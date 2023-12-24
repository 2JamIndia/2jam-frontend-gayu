import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import register from './register';
import videoPlayer from './videoPlayer';

export const rootReducer = combineReducers({
	register,
	videoPlayer,
	form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>