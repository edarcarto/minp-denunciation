import { handleAction } from 'redux-actions';
import { ROUTES } from '../actions';

const basename = '/';
const stateDefault = {
    home       : basename + 'home',
};
export default handleAction
(   
    ROUTES,
    (state) => Object.assign({}, state),
    stateDefault
);
