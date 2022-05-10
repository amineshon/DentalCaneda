import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'components/Basic/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React, { useState } from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  children: string[];
  onItemClick?: () => void;
  color?: string;
  accordion?: boolean;
}

const MenuSytle = styled(Menu)`
  .MuiMenu-list,
  .MuiMenu-paper,
  .MuiMenu-root {
    border-radius: 6px;
    background-color: ${(props) => props.theme.palette.background.dropDownMenu};
    padding: 0 !important;
  }
`;

const DropdownList = ({
  title,
  children,
  onItemClick,
  color,
  accordion,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expandedPanel, setExpandedPanel] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    if (isExpanded && expandedPanel === panel) {
      setExpandedPanel(false);
    } else setExpandedPanel(isExpanded ? panel : false);
  };

  return accordion ? (
    <Accordion
      expanded={expandedPanel === title}
      onChange={handleAccordionChange(title)}
      sx={{
        width: '100%',
        background: 'transparent !important',
        '&:before': {
          backgroundColor: 'transparent !important',
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: (t) => t.palette.warning.main }} />
        }
        sx={{ padding: '0', background: 'transparent !important' }}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      {children.map((item, index) => (
        <AccordionDetails sx={{ padding: '0' }} key={item.labels}>
          <Link
            key={item.labels}
            sx={{ mx: 3, textAlign: 'left' }}
            href={item.href}
            color="text.primary"
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {item.labels}
            </Box>
          </Link>
        </AccordionDetails>
      ))}
    </Accordion>
  ) : (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          mx: color ? 0 : 2,
          padding: color && '0',
          color: color ? color : (t) => t.palette.warning.main,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Typography variant="subtitle1">{title}</Typography>
      </Button>
      <MenuSytle
        elevation={0}
        id="demo-customized-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        variant="menu"
      >
        {children?.map((item) => (
          <MenuItem
            key={item.key}
            onClick={handleClose}
            disableRipple
            sx={{
              direction: 'ltr',
              padding: '14px 19px 32px 19px !important',
            }}
          >
            {item.href ? (
              <Link
                key={item.labels}
                sx={{ mx: 3, textAlign: 'left' }}
                href={item.href}
                color="text.primary"
              >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {item.labels}
                  <Typography
                    variant="caption"
                    sx={{ direction: 'ltr', textAlign: 'left' }}
                  >
                    {item.details}
                  </Typography>
                </Box>
              </Link>
            ) : (
              <Box
                component="div"
                sx={{ display: 'flex', flexDirection: 'column' }}
                onClick={onItemClick}
              >
                {item.labels}
                <Typography
                  variant="caption"
                  sx={{ direction: 'ltr', textAlign: 'left' }}
                >
                  {item.details}
                </Typography>
              </Box>
            )}
          </MenuItem>
        ))}
      </MenuSytle>
    </>
  );
};

export default DropdownList;
