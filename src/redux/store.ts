import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
	persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';

import rootReducer from './reducers';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}).prepend(
		// nextReduxCookieMiddleware({
		// 	subtrees: [
		// 		'app.theme',
		// 		'user.profile',
		// 		{ subtree: 'auth', secure: true },
		// 	],
		// }),
	),
	devTools: process.env.NODE_ENV !== 'production',
});

export type AppStore = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch<AppDispatch>();
