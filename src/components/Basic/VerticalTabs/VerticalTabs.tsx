import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { useTranslation } from 'next-i18next';
import i18nConfig from '../../i18n';
import AccordionCom from '../Accordion/Accordion';
import SearchIcon from '@mui/icons-material/Search';
import {
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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
interface verticalTabsProps {
  locale: string;
}

const VerticalTabs = ({}: verticalTabsProps) => {
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
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 800,
        boxShadow: '0px 12px 48px -6px rgba(28, 50, 79, 0.25)',
      }}
    >
      <ContentBarGrid container spacing={2}>
        <MenuBarGrid item xs={4}>
          <TypographyStyle variant="h4" gutterBottom component="div">
            {t('faq.faqTittle')}{' '}
          </TypographyStyle>
          <MenuBarItem>
            <TabsSec
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <TabCustomize
                label={t('faq.VerticalTabsTittleOne')}
                {...a11yProps(0)}
              />
              <TabCustomize
                label={t('faq.VerticalTabsTittleTow')}
                {...a11yProps(1)}
              />
              <TabCustomize
                label={t('faq.VerticalTabsTittleThree')}
                {...a11yProps(2)}
              />
            </TabsSec>
          </MenuBarItem>
        </MenuBarGrid>
        <ContentBarGrid item xs={8}>
          <Item>
            <TabPanel value={value} index={0}>
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
                <ContentTypography
                  variant="caption"
                  gutterBottom
                  component="div"
                >
                  {t('faq.explanationOne')}
                  <a href="#">{t('faq.explanationLink')}</a>

                  {t('faq.explanationTow')}
                </ContentTypography>
              </Grid>
              <AccordionGrid>
                {AccordionContentGeneral.map((item) => (
                  <AccordionCom
                    titleOne={item.Tittle}
                    ParagraphOne={item.Paragraph}
                  />
                ))}
              </AccordionGrid>
              <TypographyCustomerServise>
                <a href="#">
                  <Typography variant="subtitle1" gutterBottom component="div">
                    پاسخ پرسشتان را نگرفتید؟ با کارشناسان ما در ارتباط باشید
                  </Typography>
                </a>
              </TypographyCustomerServise>
            </TabPanel>
            <TabPanel value={value} index={1}>
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
                <ContentTypography
                  variant="caption"
                  gutterBottom
                  component="div"
                >
                  {t('faq.explanationOne')}
                  <a href="#">{t('faq.explanationLink')}</a>

                  {t('faq.explanationTow')}
                </ContentTypography>
              </Grid>
              <AccordionGrid>
                {AccordionContentKYC.map((item) => (
                  <AccordionCom
                    titleOne={item.Tittle}
                    ParagraphOne={item.Paragraph}
                  />
                ))}
              </AccordionGrid>
              <TypographyCustomerServise>
                <a href="#">
                  <Typography variant="subtitle1" gutterBottom component="div">
                    پاسخ پرسشتان را نگرفتید؟ با کارشناسان ما در ارتباط باشید
                  </Typography>
                </a>
              </TypographyCustomerServise>
            </TabPanel>
            <TabPanel value={value} index={2}>
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
                <ContentTypography
                  variant="caption"
                  gutterBottom
                  component="div"
                >
                  {t('faq.explanationOne')}
                  <a href="#">{t('faq.explanationLink')}</a>

                  {t('faq.explanationTow')}
                </ContentTypography>
              </Grid>
              <AccordionGrid>
                {AccordionContentTradingPlatform.map((item) => (
                  <AccordionCom
                    titleOne={item.Tittle}
                    ParagraphOne={item.Paragraph}
                  />
                ))}
              </AccordionGrid>
              <TypographyCustomerServise>
                <a href="#">
                  <Typography variant="subtitle1" gutterBottom component="div">
                    پاسخ پرسشتان را نگرفتید؟ با کارشناسان ما در ارتباط باشید
                  </Typography>
                </a>
              </TypographyCustomerServise>
            </TabPanel>
          </Item>
        </ContentBarGrid>
      </ContentBarGrid>
    </Box>
  );
};

const TypographyStyle = styled(Typography)`
  padding: 20px;
  color: ${(ContentTypographyColor) =>
    ContentTypographyColor.theme.palette.designColor.faqContent};
`;
const TextFieldComponent = styled(TextField)`
  width: 100%;
  background: #e4e7ea;
  .MuiInputLabel-root {
    color: #636e7d;
  }
`;
const MenuBarGrid = styled(Grid)`
  box-shadow: 20px 0px 20px -6px rgb(28 50 79 / 25%);
  height: 816px;
  background-color: ${(bgContentBarColor) =>
    bgContentBarColor.theme.palette.background.faqMenuBar};

  .css-rtl-b7dvft-MuiPaper-root {
    background-color: #fff !important;
  }
`;
const MenuBarItem = styled(Item)`
  background-color: ${(bgContentBarColorTap) =>
    bgContentBarColorTap.theme.palette.background.faqMenuBar} !important;
  background-image: none;
  color: ${(textColorVertical) =>
    textColorVertical.theme.palette.svg.default} !important;
`;
const ContentBarGrid = styled(Grid)`
  background-color: ${(bgContentBarColor) =>
    bgContentBarColor.theme.palette.background.faq};
  .css-rtl-b7dvft-MuiPaper-root {
    background-color: #f3f5f7 !important;
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
  .css-rtl-1ikgno3-MuiOutlinedInput-notchedOutline {
    border: none;
    border-radius: 5px;
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
const TabsSec = styled(Tabs)`
  .Mui-selected {
    color: ${(p) => p.theme.palette.warning.main}!important;
  }
  .MuiTabs-indicator {
    background-color: ${(bg) => bg.theme.palette.warning.main};
  }
`;
const TabCustomize = styled(Tab)`
  color: ${(textColorVertical) =>
    textColorVertical.theme.palette.svg.default} !important;
`;

export default VerticalTabs;
