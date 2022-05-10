import { colors } from '@mui/material';
import common from './common';

const light = {
  text: {
    primary: '#161616',
    secondary: common.primary.main,
    alternate: colors.grey[100],
    hint: colors.grey[600],
    link: colors.blue[600],
    tag: '#192434',
  },
  background: {
    default: '#F6F7F9',
    paper: 'white',
    toolbar: '#ffffff',
    tableHeader: 'rgb(241, 243, 246)',
    card: '#ffff',
    dropDownMenu: '#FFFFFF',
    input: 'rgba(91, 102, 118, 0.1)',
    contactBox: '#F6F7F9',
    faqMenuBar: '#FFF',
    faq: '#F6F7F9',
  },
  divider: colors.grey[200],
  border: {
    default: '#E7E8F8',
    primary: 'rgba(26, 56, 96, 0.1)',
  },
  svg: {
    default: '#192434',
  },
  tag: {
    default: 'rgba(91, 102, 118, 0.1)',
  },
  designColor: {
    defaultLogoType: '#fcb400',
    textDefult: '#263140',
    faqBg: '#f3f5f7',
    faqContent: '#192434',
    button: '#fcb400',
  },
  card: {
    hiringCard: '#fff',
  },
  transparentContent: {
    termsConditions: '-webkit-linear-gradient(#333, #eee)',
  },
  number: '#F52419',
};

export default light;
