/* eslint-disable key-spacing */

interface Api {
	[apiKey: string]: {

		/*
			endpoint of the api
		*/
		endpoint: string;

		/*
			http method of the api
		*/
		method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTION';

		/*
			should we add authentication token to the api ?
			value is considered as false if omitted
		*/
		escapeAuthToken?: boolean,
	};
}

const api: Api = {

	// -------------- Authentication ----------
	auth:					{ endpoint: '/auth',					method: 'POST',		escapeAuthToken: true	 },
	authVerify: 			{ endpoint: '/auth/verification',		method: 'POST',		escapeAuthToken: true	 },
	getProfile: 			{ endpoint: '/profile',					method: 'GET'								 },

	// -------------- Product -----------------
	getProducts: 			{ endpoint: '/products',				method: 'GET',		escapeAuthToken: true	 },
	getCategories: 			{ endpoint: '/categories',				method: 'GET',		escapeAuthToken: true	 },

	// -------------- Order -------------------
	createOrder: 			{ endpoint: '/order',					method: 'POST'								 },
	getOrder: 				{ endpoint: '/order/{id}',				method: 'POST'								 },
};

export default api;
