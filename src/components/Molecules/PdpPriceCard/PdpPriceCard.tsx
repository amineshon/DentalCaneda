import {
  Box,
  Divider,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from '@mui/material';
import MiniChart from 'components/Basic/MiniChart/MiniChart';
import React, { useEffect, useState } from 'react';
import ReactNumberFormat from 'react-number-format';
import Tag from 'components/Basic/Tag/Tag';
import BtcSvg from 'cryptocurrency-icons/svg/color/btc.svg';
import DropdownList from 'components/Basic/DropDownList/DropdownList';
import Link from 'components/Basic/Link';
import Button from 'components/Basic/Button';
import axios from 'axios';
import { decimalEmitter } from 'consts/decimal';

interface Props {
  ascending: boolean;
  name: string;
  highPrice: string;
  priceChange: string;
  highPriceIRT: string;
  pdp?: boolean;
}

const PdpPriceCard = ({
  name,
  highPrice,
  highPriceIRT,
  priceChange,
  ascending,
  pdp,
}: Props) => {
  const symbol = name?.toLocaleLowerCase();
  const [buttonSort, setButtonSort] = useState('IRT');
  const [chartData, setChartData] = useState({});
  const theme = useTheme();

  const api = async () => {
    const data = await axios.get(
      'https://api.maxpool.ir/mainpage/binance-api/one-symbol?select=BTCUSDT',

      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
    setChartData(data.data);
  };

  useEffect(() => {
    api();

    setInterval(() => {
      api();
    }, 180000);

    return () => clearInterval();
  }, []);

  const handleAlignment = (event, newAlignment) => {
    setButtonSort(event.target.value);
  };

  const changesTime = [
    {
      labels: 'هفتگی',
    },
    {
      labels: 'ماهانه',
    },
    {
      labels: ' سه ماهه',
    },
    {
      labels: ' شش ماهه',
    },
    {
      labels: ' سالانه',
    },
  ];

  return (
    <Box
      component="div"
      sx={{
        background: pdp ? '#3A4E66' : (t) => t.palette.background.card,
        width: '384px',
        height: '276px',
        borderRadius: '4px',
        backgroundColor: (t) => (t.palette.mode === 'dark' ? 'none' : '#fff'),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '98px',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <div>
          <Tag title={name} />
        </div>
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: '600',
            margin: 0,
            color: (t) => t.palette.text.primary,
          }}
        >
          {name}
        </Typography>
        <div>
          <img
            src={`/images/icon/color/${symbol}.svg`}
            style={{
              width: '50px',
              height: '50px',
              margin: '0px 20px',
            }}
            alt="coinIcon"
          />
        </div>
      </Box>
      <Divider
        sx={{
          borderColor: (t) => (t.palette.mode === 'dark' ? 'transparent' : ''),
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            my: 2,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: (t) => t.palette.text.primary,
            }}
          >
            آخرین قیمت
          </Typography>
          <Select
            value={buttonSort}
            onChange={handleAlignment}
            sx={{
              display: { xs: 'flex' },
              '&:before': {
                border: 'none',
              },
              '&:hover': {
                border: 'none',
              },
            }}
            variant="standard"
          >
            <MenuItem value={'IRT'}>IRT</MenuItem>
            <MenuItem value={'Tether'}>Tether</MenuItem>
          </Select>
          <ReactNumberFormat
            thousandSeparator
            isNumericString
            prefix={`${buttonSort === 'Tether' ? '$' : ''}`}
            value={
              buttonSort === 'Tether'
                ? decimalEmitter(chartData.highPrice)
                : decimalEmitter(chartData.highPriceIRT)
            }
            displayType="text"
            style={{
              fontSize: '18px',
              alignSelf: 'baseline',
              color: theme.palette.text.primary,
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <DropdownList
            title={'تغییرات روزانه'}
            children={changesTime}
            color={(t) => t.palette.text.primary}
          />
          <ReactNumberFormat
            thousandSeparator
            isNumericString
            suffix="%"
            value={decimalEmitter(chartData.priceChange)}
            displayType="text"
            style={{
              color: chartData.ascending ? '#00A841' : '#F52419',
              fontSize: '18px',
              alignSelf: 'baseline',
              direction: 'ltr',
            }}
          />
        </Box>
        <Link sx={{ mx: 2, width: '100%' }} href="#">
          <Button
            sx={{
              px: 2,
              backgroundColor: (t) => t.palette.warning.main,
              '&:hover': {
                backgroundColor: (t) => t.palette.warning.main,
              },
              borderRadius: '4px',
              width: '100%',
            }}
          >
            {' خرید/فروش'}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default PdpPriceCard;
