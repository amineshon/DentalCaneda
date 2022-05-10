import { colors } from '@mui/material';
import common from './common';

const dark = {
  text: {
    primary: colors.grey[200],
    secondary: common.primary.main,
    alternate: colors.grey[900],
    hint: colors.grey[400],
    link: colors.blue[600],
    tag: '#EBF4FF',
  },
  background: {
    default: '#223348',
    paper: '#2B3D54',
    toolbar: '#20232a',
    tableHeader: '#20232a',
    card: 'linear-gradient(111.29deg, #D3D3D3 0%, rgba(211, 211, 211, 0) 65.87%)',
    dropDownMenu: '#3A4E66',
    input: '#3A4E66',
    contactBox: '#3A4E66',
    faqMenuBar: '#3A4E66',
    faq: '#2D3D51',
  },
  divider: colors.grey[800],
  border: {
    default: colors.grey[800],
    primary: '#F5F9FF',
  },
  svg: {
    default: '#EBF4FF',
  },
  tag: {
    default: 'rgba(235, 244, 255, 0.2)',
  },

  card: {
    hiringCard: '#2C3D53',
  },
  transparentContent: {
    termsConditions: '-webkit-linear-gradient(#eee, #333)',
  },
  designColor: {
    defaultLogoType: '#fcb400',
    textDefault: '#DFE8F4',
    faqBg: '#2B3D54',
    faqContent: '#EDF0F4',
    button: '#fcb400',
  },
  number: '#FF5F57',
};

export default dark;
