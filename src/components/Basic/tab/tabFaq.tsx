import * as React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';
import AccordionCom from '../Accordion/Accordion';
import SearchIcon from '@mui/icons-material/Search';
import {
  Typography,
  Tab,
  Tabs,
  TextField,
  Box,
  Divider,
  Grid,
  useMediaQuery,
  Paper,
  InputBase,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
  MenuItem,
  Select,
} from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { t } = useTranslation('common');

  const AccordionContentGeneral = [
    {
      Tittle: t('faq.GeneralQuestionsTittleOne'),
      Paragraph: t('hiring.AccordionComParagraphOne'),
    },
    {
      Tittle: t('faq.GeneralQuestionsTittleToW'),
      Paragraph: t('hiring.AccordionComParagraphTow'),
    },
  ];
  const AccordionContentKYC = [
    {
      Tittle: t('faq.KYCTittleOne'),
      Paragraph: t('faq.KYCExplanationOne'),
    },
    {
      Tittle: t('faq.KYCTittleToW'),
      Paragraph: t('faq.KYCExplanationTow'),
    },
  ];
  const AccordionContentTradingPlatform = [
    {
      Tittle: t('faq.TradingPlatformTittleOne'),
      Paragraph: t('faq.TradingPlatformExplanationOne'),
    },
    {
      Tittle: t('faq.TradingPlatformTittleToW'),
      Paragraph: t('faq.TradingPlatformExplanationTow'),
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Grid>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: { xs: '100%', md: '100%' },
            background: (t) => t.palette.background.input,
          }}
        >
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              background: 'transparent',
            }}
            type={'text'}
            placeholder="نام یا مخفف رمزارز را وارد کنید"
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        </Paper>
        <Grid>
          <ContentTypography variant="caption" gutterBottom component="div">
            {t('faq.explanationOne')}
            <a href="#">{t('faq.explanationLink')}</a>

            {t('faq.explanationTow')}
          </ContentTypography>
        </Grid>
      </Grid>
      <ContentBarGrid sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabsSec
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <TabCustomize label="سوالات عمومی" {...a11yProps(0)} />
          <TabCustomize label="احراز هویت" {...a11yProps(1)} />
          <TabCustomize label="بستر معاملاتی" {...a11yProps(2)} />
        </TabsSec>
      </ContentBarGrid>
      <TabPanel value={value} index={0}>
        <AccordionGrid>
          {AccordionContentGeneral.map((item) => (
            <AccordionCom
              titleOne={item.Tittle}
              ParagraphOne={item.Paragraph}
            />
          ))}
        </AccordionGrid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccordionGrid>
          {AccordionContentKYC.map((item) => (
            <AccordionCom
              titleOne={item.Tittle}
              ParagraphOne={item.Paragraph}
            />
          ))}
        </AccordionGrid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AccordionGrid>
          {AccordionContentTradingPlatform.map((item) => (
            <AccordionCom
              titleOne={item.Tittle}
              ParagraphOne={item.Paragraph}
            />
          ))}
        </AccordionGrid>
      </TabPanel>
      <Grid>
        <TypographyCustomerServise>
          <a href="#">
            <Typography variant="subtitle1" gutterBottom component="div">
              پاسخ پرسشتان را نگرفتید؟ با کارشناسان ما در ارتباط باشید
            </Typography>
          </a>
        </TypographyCustomerServise>
      </Grid>
    </Box>
  );
}
const TextFieldComponent = styled(TextField)`
  width: 100%;
  background: #e4e7ea;
  .MuiInputLabel-root {
    color: #636e7d;
  }
`;
const ContentTypography = styled(Typography)`
  color: ${(ContentTypographyColor) =>
    ContentTypographyColor.theme.palette.designColor.faqContent};
  text-align: left;
  margin-top: 24px;
  a {
    color: #fcb400;
  }
`;
const AccordionGrid = styled(Grid)`
  margin-top: 50px;
  text-align: left;
  .css-rtl-vkgkm7-MuiPaper-root-MuiAccordion-root {
    margin-top: 5px;
    background-color: #e4e7ea;
  }
`;
const TypographyCustomerServise = styled(Grid)`
  text-align: right;
  margin-top: 5px;
  a {
    color: #fcb400;
  }
`;

const ContentBarGrid = styled(Grid)`
  background-color: none;
  .css-rtl-b7dvft-MuiPaper-root {
    background-color: none !important;
    border: 1px solid #f3f5f7;
  }
  .css-rtl-chb2bc-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: #fcb400;
  }
  .css-rtl-chb2bc-MuiButtonBase-root-MuiTab-root {
    color: #192434;
  }
  .css-rtl-dw5qgo-MuiTabs-indicator {
    background-color: #fcb400;
  }
  .css-rtl-664j78-MuiTabs-indicator {
    background-color: #fcb400;
  }
  .css-rtl-1ikgno3-MuiOutlinedInput-notchedOutline {
    border: none;
    border-radius: 5px;
  }
`;
const Bg = styled(Box)`
  .css-rtl-x2fqn-MuiGrid-root {
    background-color: ${(textColor) =>
      textColor.theme.palette.designColor.faqBg};
  }
`;
const TabsSec = styled(Tabs)`
  .Mui-selected {
    color: ${(p) => p.theme.palette.warning.main}!important;
  }
  .MuiTabs-indicator {
    background-color: ${(bg) => bg.theme.palette.warning.main} !important;
  }
`;
const TabCustomize = styled(Tab)`
  color: #7c838d;
`;
