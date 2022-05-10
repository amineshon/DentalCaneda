import React from 'react';
import MaterialButton from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import styled from '@emotion/styled';


// Components
import LoadingIndicator from 'components/Basic/LoadingIndicator';

interface PropTypes extends ButtonProps {
  children: React.ReactElement | React.ReactElement[];
  onClick?: Function | string | any;
  isLoading?: Boolean;
  
}

// Button Component
const Button = ({
  children,
  
  isLoading = false,
  onClick,
  ...restProps
}: PropTypes) => (
  <MaterialButtonEdit
  sx={{
    backgroundColor:'#6875F7',
    minWidth: '160px',
    minHeight:'45px',
    fontWeight:'700'
  }}
    {...restProps}
    onClick={onClick}
    disabled={isLoading || restProps.disabled}
  >
    {isLoading ? <LoadingIndicator size={8} color="light" /> : children}
  </MaterialButtonEdit>
);

const MaterialButtonEdit = styled(MaterialButton)`
border-radius: 5px;

:hover{
  background-color: #4F5FFF;
}
`
 

export default Button;
