import React from 'react';

import MaterialContainer, { ContainerProps } from '@mui/material/Container';

// Components
const Container = (props: ContainerProps) => (
  <MaterialContainer maxWidth="xl" {...props} />
);

export default Container;
