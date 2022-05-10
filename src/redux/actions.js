// Consts
import API_CONSTANTS from 'constants/api';
import APP_CONSTANTS from 'constants/app';

import authSlice from 'redux/auth/slice';
import userSlice from 'redux/user/slice';

// Libs
import Api from 'libs/Api';
import Util from 'libs/Util';

/*
 * Make API Action
 */
export function api(apiKey, body, params, jsonType = true) {
	return (dispatch, getState) => new Promise((resolve, reject) => {
		if (!apiKey) return reject(new Error('error.unknown'));

		(async () => {
			const { auth } = getState();
			const apiConf = API_CONSTANTS[apiKey];

			// ========================== Make url
			let finalUrl = Util.makeUrlWithParams(apiConf.endpoint, params);
			finalUrl = `${APP_CONSTANTS.API_HOST_NAME}${finalUrl}`;

			console.log(auth);

			// ========================== Make Header
			const headers = {};
			if (!apiConf.escapeJWT) {
				body.token = auth.accessToken;
				// headers.Authorization = ``;
			}

			// Make Request
			return Api({
				url: finalUrl,
				method: apiConf.method,
				body,
				headers,
				jsonType,
			})
				.then(res => resolve(res.data))
				.catch(async err => {
					if (typeof err === 'string' && (err.includes('Failed to fetch') || err.includes('Network request failed'))) {
						return reject(new Error('error.check_internet_connection'));
					}

					return reject(err);
				});
		})();
	});
}

// Action Creators

export function loginAction(mobile, code, name) {
	return dispatch => new Promise(async (resolve, reject) => {
		try {
			const res = await dispatch(api('authVerify', {
				phone_number: mobile,
				verification_code: code,
				name,
			}));

			dispatch(authSlice.actions.login({ accessToken: res.token }));
			dispatch(userSlice.actions.updateProfile(res.profile));

			return resolve(res);
		}
		catch (err) {
			return reject(err);
		}
	});
}

export function logoutAction() {
	return dispatch => new Promise(async (resolve, reject) => {
		try {
			dispatch({ type: 'RESET' });
			return resolve();
		}
		catch (err) {
			return reject(err);
		}
	});
}
