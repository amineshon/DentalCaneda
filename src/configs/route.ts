/* eslint-disable quote-props */
/* eslint-disable key-spacing */

interface Route {
	[routeKey: string]: {

		/*
			url of the route
		*/
		href: string;

		/*
			header config of the route
		*/
		header?: {
			visible?: boolean,

			theme?: 'default' | 'transparent',

			/*
				should header be fixed at certain scroll position or not
				undefined means not fixed
			*/
			fixedOnScroll?: number | undefined
		};

		footer?: {
			visible?: boolean,
		},

		tabbar?: {
			visible?: boolean,
		}

		layout?: 'default' | 'auth' | 'dashboard' | 'static',

		/*
			should redirect to login route if user is not logged in ?
			value is considered as false if omitted
		*/
		private?: boolean,

		/*
			should redirect to dashboard if user is logged in ?
			value is considered as false if omitted
		*/
		auth?: boolean,
	};
}

export const setting = {
	auth: false,
	private: false,
	layout: 'default',
	header: {
		visible: true,
		theme: 'default',
		fixedOnScroll: -1,
	},
	footer: {
		visible: true,
	},
	tabbar: {
		visible: true,
	},
};

export const route: Route = {

	// Authentication related routes
	'auth-login': 						{ href: '/login',						layout: 'auth',					auth: true 		 			},
	'auth-register': 					{ href: '/register',					layout: 'auth',					auth: true 					},
	'auth-forget-password': 			{ href: '/register',					layout: 'auth',					auth: true 					},

	// Dashboard related routes
	'dashboard': 						{ href: '/app',							layout: 'dashboard',			private: true			 	},
	'dashboard-ticket-list': 			{ href: '/app/ticket/list',				layout: 'dashboard',			private: true			 	},
	'dashboard-ticket-new': 			{ href: '/app/ticket/new',				layout: 'dashboard',			private: true	 		 	},
	'dashboard-ticket-view': 			{ href: '/app/ticket/view/[id]',		layout: 'dashboard',			private: true			 	},
	'dashboard-profile': 				{ href: '/app/profile',					layout: 'dashboard',			private: true			 	},
	'dashboard-cards': 					{ href: '/app/cards',					layout: 'dashboard',			private: true			 	},
	'dashboard-withdraw': 				{ href: '/app/withdraw',				layout: 'dashboard',			private: true			 	},
	'dashboard-deposit': 				{ href: '/app/deposit',					layout: 'dashboard',			private: true			 	},
	'dashboard-history': 				{ href: '/app/history',					layout: 'dashboard',			private: true			 	},
	'dashboard-security': 				{ href: '/app/security',				layout: 'dashboard',			private: true			 	},
	'dashboard-security-history': 		{ href: '/app/security/history',		layout: 'dashboard',			private: true			 	},
	'dashboard-wallet': 				{ href: '/app/wallet',					layout: 'dashboard',			private: true			 	},
	'dashboard-quick-order': 			{ href: '/app/quick-order',				layout: 'dashboard',			private: true			 	},
	'dashboard-referral': 				{ href: '/app/referral',				layout: 'dashboard',			private: true			 	},

	// Static routes
	'terms': 							{ href: '/terms',						layout: 'default',				private: false			 	},
	'contact': 							{ href: '/contact',						layout: 'default',				private: false			 	},
	'about': 							{ href: '/about',						layout: 'default',				private: false			 	},
	'product': 							{ href: '/product/[id]',				layout: 'default',				private: false			 	},
};
