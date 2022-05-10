import React from 'react';
import { useTranslation } from 'next-i18next';
import styled from '@emotion/styled';
import InputButton from '../../Basic/InputButton/input';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface NewslettersProps {
  title?: string | number | any;
}

// Newsletters ‌
const Newsletters = ({ title }: NewslettersProps) => {
  const { t } = useTranslation();
  return (
    <NewslettersBox>
      <Box>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          با ثبت نام در خبرنامه ایمیلی ما؛ جدیترین و مهمترین اتفاقات دنیای رمز
          ارزها و<br /> همچنین اخبار داغ بیتمکس را به صورت هفتگی در ایمیلتان
          دریافت کنید
        </Typography>
      </Box>

      <InputButton />
    </NewslettersBox>
  );
};
const NewslettersBox = styled(Box)`
  background-image: url('/images/bg/NewslettersBox.png');
  background-size: cover;
  height: 300px;
  margin-top: 50px;
  margin-bottom: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  border-radius: 15px;
`;

export default Newsletters;
