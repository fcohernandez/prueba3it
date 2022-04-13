import { combineReducers } from 'redux';
import root from './RootReducer';

// Combina los reducers
const reducers = combineReducers({
    root
});

// Exporta reducers
export default reducers;