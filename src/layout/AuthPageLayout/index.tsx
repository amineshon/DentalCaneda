import React from 'react';
import { useTranslation } from 'next-i18next';

import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';

// Components
import { Grid, Typography } from '@mui/material';
import Container from 'layout/Container';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const Background = styled.div<{ src: String }>`
	width: 100%;
	height: 100%;
	min-height: 450px;
	background-size: contain;
	background-image: ${p => `url(${p.src})`};
	background-repeat: no-repeat;
	background-position: center center;
`;

interface PropTypes {
	page: 'login' | 'register' | 'forget-password',
	steps?: [],
	currentSteps?: number,
	children: React.ReactNode,
	title?: string,
	subtitle?: string,
}

const AuthPageLayout = ({
	steps,
	currentSteps,
	page,
	children,
	title = '',
	subtitle = '',
}: PropTypes) => {
	const theme = useTheme();
	const { t } = useTranslation('common');

	return (
		<Container sx={{ height: 'calc(100vh - 150px)' }}>
			<Grid container alignItems="center" spacing={2} sx={{ height: '100%' }}>
				{steps ? (
					<Box sx={{ width: '100%' }}>
						<Stepper activeStep={currentSteps} alternativeLabel color="warning.main">
							{steps.map(s => (
								<Step key={s}>
									<StepLabel>{t(`${page}.steps.${s}`)}</StepLabel>
								</Step>
							))}
						</Stepper>
					</Box>
				) : null}
				<Grid alignItems="center" item xl={4} lg={5} md={6} xs={12}>
					{title ? <Typography variant="h5" sx={{ fontWeight: '800' }}>{title}</Typography> : null}
					<Typography sx={{ mt: 1, mb: 3 }} variant="subtitle1">{subtitle}</Typography>
					{children}
				</Grid>
				<Grid item xl={8} lg={7} md={6} xs={0} alignItems="center" sx={{ height: '80%', display: { xs: 'none', md: 'flex' } }}>
					<Background src={`/images/bg/bg-${page}-${theme.palette.mode}.png`} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default AuthPageLayout;
