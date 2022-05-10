import { TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';
import React from 'react';

export interface IHeads {
  id: string;
  numeric: boolean;
  disablePadding: boolean;
  label: string;
  sort: boolean;
  display: boolean;
  align: string;
}

interface TablesHeadProps {
  order: string;
  orderBy: string;
  onRequestSort: (property: string) => void;
  heads: IHeads[];
}

const TablesHead = (props: TablesHeadProps) => {
  const { order, orderBy, onRequestSort, heads } = props;

  const createSortHandler = (property: string) => (event: any) => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {heads?.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={'normal'}
            sx={{
              borderBottomColor: (theme) => theme.palette.border.primary,
              background: (theme) => theme.palette.background.default,
              display: {
                sm: 'table-cell',
                xs: headCell.display ? 'table-cell' : 'none',
              },
            }}
          >
            {headCell.sort ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                sx={{
                  '& svg': {
                    fill: (theme) => theme.palette.text.primary,
                  },
                }}
              >
                {headCell.label}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TablesHead;
