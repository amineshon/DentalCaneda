import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

import { appSlice, userSlice, authSlice } from './slices';

const rootPersistConfig = {
	key: 'root',
	blacklist: ['basket'],
	version: 1,
	storage,
};

const rootReducer = combineReducers({
	app: appSlice.reducer,
	user: userSlice.reducer,
	auth: authSlice.reducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
