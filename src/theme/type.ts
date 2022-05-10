import React from 'react';
import { Theme as MaterialTheme } from '@mui/material/styles';

export type BorderRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Direction = 'ltr' | 'rtl';
export type ThemeMode = 'light' | 'dark';

export type ThemeObject = {
  fontFamily?: React.CSSProperties['fontFamily'];
  direction: Direction;
  mode: ThemeMode;
  responsiveFont?: Boolean;
};

declare module '@mui/material/styles' {
  export interface Theme {
    shape: {
      borderRadius: Record<BorderRadius, string>;
      headerHeight: Number;
      siderWidth: Number;
    };
  }

  // allow configuration using `createTheme`
  export interface ThemeOptions {
    shape: {
      borderRadius: Record<BorderRadius, string>;
      headerHeight: Number;
      siderWidth: Number;
    };
  }
}

declare module '@emotion/react' {
  export interface Theme extends MaterialTheme {}
}
