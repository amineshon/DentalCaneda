import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Paper, Grid } from '@mui/material';
import CareerOpportunities from '../../Molecules/CareerOpportunitiesCard/CareerOpportunitiesTab';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';
import i18nConfig from '../../i18n';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { t } = useTranslation('common');

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabsSec
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"

          // sx={{ color: '#fcb400', indicatorColor: '#fcb400' }}
        >
          <TabCustomize
            label={t('hiring.opportunitiesTapone')}
            {...a11yProps(0)}
          />
          <TabCustomize
            label={t('hiring.opportunitiesTapTow')}
            {...a11yProps(2)}
          />
          <TabCustomize
            label={t('hiring.opportunitiesTaThree')}
            {...a11yProps(3)}
          />
          <TabCustomize
            label={t('hiring.opportunitiesTapFour')}
            {...a11yProps(4)}
          />
          <TabCustomize
            label={t('hiring.opportunitiesTapFive')}
            {...a11yProps(5)}
          />
          <TabCustomize
            label={t('hiring.opportunitiesTapSix')}
            {...a11yProps(6)}
          />
          <TabCustomize
            label={t('hiring.opportunitiesTapSeven')}
            {...a11yProps(1)}
          />
        </TabsSec>
      </Box>
      <TabPanelBox value={value} index={0}>
        <CareerOpportunities
          tittle={'برنامه‌نویس Python'}
          tittleEn={'Python Developer'}
          link={
            'https://jobinja.ir/companies/wonderlend/jobs/RuPq/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3-python-%D8%AF%D8%B1-%D8%A8%DB%8C%D8%AA-%D9%85%DA%A9%D8%B3'
          }
        />
        <CareerOpportunities
          tittle={'کارشناس پشتیبانی'}
          tittleEn={'Support specialist'}
          link={
            'https://jobinja.ir/companies/wonderlend/jobs/RuSv/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-%DA%A9%D8%A7%D8%B1%D8%B4%D9%86%D8%A7%D8%B3-%D9%BE%D8%B4%D8%AA%DB%8C%D8%A8%D8%A7%D9%86%DB%8C-%D8%AF%D8%B1-%D8%A8%DB%8C%D8%AA-%D9%85%DA%A9%D8%B3'
          }
        />
        <CareerOpportunities
          tittle={'کارشناس DevOps'}
          tittleEn={'DevOps Engineer'}
          link={
            'https://jobinja.ir/companies/wonderlend/jobs/RuP2/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-%DA%A9%D8%A7%D8%B1%D8%B4%D9%86%D8%A7%D8%B3-devops-%D8%AF%D8%B1-%D8%A8%DB%8C%D8%AA-%D9%85%DA%A9%D8%B3'
          }
        />
        <CareerOpportunities
          tittle={'مدیر مارکتینگ'}
          tittleEn={'Marketing ‌Manager'}
          link={
            'https://jobinja.ir/companies/wonderlend/jobs/Rj02/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-marketing-manager-%D8%AF%D8%B1-%D8%A8%DB%8C%D8%AA-%D9%85%DA%A9%D8%B3'
          }
        />
        <CareerOpportunities
          tittle={'کارشناس شبکه های اجتماعی'}
          tittleEn={'Social Media Specialist'}
          link={
            'https://jobinja.ir/companies/wonderlend/jobs/R7GB/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-social-media-specialist-%D8%AF%D8%B1-%D8%A8%DB%8C%D8%AA-%D9%85%DA%A9%D8%B3'
          }
        />
      </TabPanelBox>
      <TabPanelBox value={value} index={1}>
        <CareerOpportunities
          tittle={'مدیر مارکتینگ'}
          tittleEn={'Marketing ‌Manager'}
          link={
            'https://jobinja.ir/companies/wonderlend/jobs/Rj02/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-marketing-manager-%D8%AF%D8%B1-%D8%A8%DB%8C%D8%AA-%D9%85%DA%A9%D8%B3'
          }
        />
        <CareerOpportunities
          tittle={'کارشناس شبکه های اجتماعی'}
          tittleEn={'Social Media Specialist'}
          link={
            'https://jobinja.ir/companies/wonderlend/jobs/R7GB/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-social-media-specialist-%D8%AF%D8%B1-%D8%A8%DB%8C%D8%AA-%D9%85%DA%A9%D8%B3'
          }
        />
      </TabPanelBox>
      <TabPanelBox value={value} index={2}>
        <CareerOpportunities
          tittle={'کارشناس DevOps'}
          tittleEn={'DevOps Engineer'}
          link={
            'https://jobinja.ir/companies/wonderlend/jobs/RuP2/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-%DA%A9%D8%A7%D8%B1%D8%B4%D9%86%D8%A7%D8%B3-devops-%D8%AF%D8%B1-%D8%A8%DB%8C%D8%AA-%D9%85%DA%A9%D8%B3'
          }
        />
        <CareerOpportunities
          tittle={'برنامه‌نویس Python'}
          tittleEn={'Python Developer'}
          link={
            'https://jobinja.ir/companies/wonderlend/jobs/RuPq/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3-python-%D8%AF%D8%B1-%D8%A8%DB%8C%D8%AA-%D9%85%DA%A9%D8%B3'
          }
        />
      </TabPanelBox>
      <TabPanelBox value={value} index={3}>
        <Typography variant="subtitle2" gutterBottom component="div">
          موقعیت شغلی وجود ندارد
        </Typography>
      </TabPanelBox>
      <TabPanelBox value={value} index={4}>
        <Typography variant="subtitle2" gutterBottom component="div">
          موقعیت شغلی وجود ندارد
        </Typography>{' '}
      </TabPanelBox>
      <TabPanelBox value={value} index={5}>
        <Typography variant="subtitle2" gutterBottom component="div">
          موقعیت شغلی وجود ندارد
        </Typography>
      </TabPanelBox>
      <TabPanelBox value={value} index={6}>
        <CareerOpportunities
          tittle={'کارشناس پشتیبانی'}
          tittleEn={'Support specialist'}
          link={
            'https://jobinja.ir/companies/wonderlend/jobs/RuSv/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-%DA%A9%D8%A7%D8%B1%D8%B4%D9%86%D8%A7%D8%B3-%D9%BE%D8%B4%D8%AA%DB%8C%D8%A8%D8%A7%D9%86%DB%8C-%D8%AF%D8%B1-%D8%A8%DB%8C%D8%AA-%D9%85%DA%A9%D8%B3'
          }
        />
      </TabPanelBox>
    </Box>
  );
}
const TabPanelBox = styled(TabPanel)`
  .MuiTypography-body1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
  }
`;
const TabCustomize = styled(Tab)`
  color: #7c838d;
`;
const TabsSec = styled(Tabs)`
  .Mui-selected {
    color: ${(p) => p.theme.palette.warning.main}!important;
  }
  .MuiTabs-indicator {
    background-color: ${(bg) => bg.theme.palette.warning.main} !important;
  }
`;
