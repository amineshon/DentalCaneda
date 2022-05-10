import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Constants
import routeConf from 'configs/route';

/* WithAuth Component =================== */
const WithAuth = ({ children }) => {
	const route = useRouter();
	const loggedIn = useSelector(state => state.auth.loggedIn);
	const routeObject = useMemo(
		() => Object.values(routeConf).find(r => r.href === route.route),
		[route],
	);

	if (routeObject) {
		const { privateRoute, loginRoute } = routeObject;

		if (loggedIn && loginRoute) {
			if (route.query.redirect) {
				route.replace(route.query.redirect);
			}
			else {
				route.replace(routeConf.home.href);
			}
		}
		else if (!loggedIn && privateRoute) {
			route.replace(
				routeConf.authLogin.href,
				`${routeConf.authLogin.href}?redirect=${route.route}`,
				{ shallow: true },
			);
		}
	}

	return children;
};

// Export default
export default WithAuth;
