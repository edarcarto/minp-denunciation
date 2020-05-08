import { combineReducers } from 'redux';
import routesReducers from './routes';

const rootReducer = combineReducers({
    routes: routesReducers
});
export default rootReducer;