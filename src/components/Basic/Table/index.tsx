import React, { useEffect } from 'react';
import Image from 'next/image';
import {
  TableRow,
  TableCell,
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  IconButton,
  Grid,
  useTheme,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TablesHead, { IHeads } from './TablesHead';
import MiniChart from 'components/Basic/MiniChart/MiniChart';
import ReactNumberFormat from 'react-number-format';
import Tag from 'components/Basic/Tag/Tag';
import { useTranslation } from 'next-i18next';
import { coinTranslate } from 'consts/tanslateCoinName';
import { decimalEmitter } from 'consts/decimal';
import axios from 'axios';
interface IRows {
  coinName: string;
  lastPrice: number;
  priceChangePercent: number;
  coinCharts: any;
  lastPriceIRT: string;
}

interface Props {
  rows: IRows[];
  heads: IHeads[];
  onOrderClick?: () => void;
  onDetailClick?: () => void;
  price: string;
  locale: string;
}

const index = ({
  rows,
  heads,
  onOrderClick,
  onDetailClick,
  price,
  locale,
}: Props) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('lastPrice');
  const [coinsData, setCoinsData] = React.useState<[any]>();
  const { t } = useTranslation('common');
  const theme = useTheme();

  const coins = async () => {
    const data = await axios.get('https://api.maxpool.ir/coins/');
    setCoinsData(data.data);
  };

  useEffect(() => {
    coins();
  }, []);

  function descendingComparator(a: any, b: any, orderBy: any) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order: string, orderBy: string) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const coinNames = (symbol) => {
    if (coinsData) {
      return coinsData?.message.map((item) => {
        if (item.symbol === symbol) {
          return locale === 'en' ? item.enName : item.faName;
        }
      });
    }
  };

  return (
    <Box sx={{ width: '100%', minHeight: '400px', position: 'relative' }}>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table
            sx={{
              minWidth: { md: 750, xs: 120 },
            }}
            aria-labelledby="tableTitle"
            size="medium"
            stickyHeader
          >
            <TablesHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              heads={heads}
            />
            <TableBody>
              {rows
                ?.slice()
                ?.sort(getComparator(order, orderBy))
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const symbol = row.coinName.toLocaleLowerCase();

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.coinName}
                      sx={{
                        height: '56px',
                        background: (theme) => theme.palette.background.default,
                      }}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="center"
                        padding="none"
                        sx={{
                          borderBottomColor: (theme) =>
                            theme.palette.border.primary,
                          borderBottomWidth: '1px',
                        }}
                      >
                        <Grid
                          container
                          component="div"
                          spacing={1}
                          alignItems="center"
                          wrap="nowrap"
                        >
                          <Grid item xs>
                            <img
                              src={`/images/icon/color/${symbol}.svg`}
                              style={{
                                width: '30px',
                                height: '30px',
                              }}
                              alt="coinIcon"
                            />
                          </Grid>
                          <Grid item xs>
                            {coinNames(row?.coinName)}
                          </Grid>
                          <Grid
                            item
                            xs
                            sx={{ display: { md: 'flex', xs: 'none' } }}
                          >
                            <Tag
                              title={row.coinName}
                              sx={{ display: { xs: 'none', md: 'flex' } }}
                            />
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell
                        align="right"
                        padding="none"
                        sx={{
                          borderBottomColor: (theme) =>
                            theme.palette.border.primary,
                        }}
                      >
                        <ReactNumberFormat
                          thousandSeparator
                          isNumericString
                          thousandsGroupStyle="thousand"
                          prefix={`${price === 'tether' ? '$' : ''}`}
                          value={
                            price === 'tether'
                              ? decimalEmitter(row.lastPrice)
                              : decimalEmitter(row.lastPriceIRT)
                          }
                          displayType="text"
                          allowNegative={true}
                          style={{ fontFamily: 'IranSans' }}
                        />
                      </TableCell>
                      <TableCell
                        align="right"
                        padding="none"
                        sx={{
                          direction: 'rtl !important',
                          borderBottomColor: (theme) =>
                            theme.palette.border.primary,
                        }}
                      >
                        <ReactNumberFormat
                          thousandSeparator
                          isNumericString
                          // decimalSeparator=","
                          suffix="%"
                          value={decimalEmitter(row.priceChangePercent)}
                          displayType="text"
                          style={{
                            color: row.ascending
                              ? '#00A841'
                              : theme.palette.number,
                            fontSize: '18px',
                            alignSelf: 'baseline',
                            fontFamily: 'IranSans',
                          }}
                        />
                      </TableCell>
                      <TableCell
                        align="center"
                        padding="none"
                        sx={{
                          borderBottomColor: (theme) =>
                            theme.palette.border.primary,
                          display: {
                            sm: 'table-cell',
                            xs: 'none',
                          },
                        }}
                      >
                        <MiniChart
                          asc={row.ascending}
                          symbol={row.coinName}
                          chart={row?.chartUrl.url}
                        />
                      </TableCell>
                      <TableCell
                        align="center"
                        padding="none"
                        sx={{
                          borderBottomColor: (theme) =>
                            theme.palette.border.primary,
                          display: {
                            sm: 'table-cell',
                            xs: 'none',
                          },
                        }}
                      >
                        <IconButton onClick={onOrderClick}>
                          <ShoppingCartIcon
                            sx={{
                              color: (theme) => theme.palette.warning.main,
                            }}
                          />
                        </IconButton>
                      </TableCell>
                      <TableCell
                        padding="none"
                        sx={{
                          borderBottomColor: (theme) =>
                            theme.palette.border.primary,
                          textAlign: { md: 'center', xs: 'right' },
                        }}
                      >
                        <IconButton onClick={onDetailClick}>
                          <InfoOutlinedIcon
                            sx={{
                              color: (theme) => theme.palette.text.primary,
                            }}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default index;
