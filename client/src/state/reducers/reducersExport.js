import { combineReducers } from "redux";
import alertReducer from './alertReducer';

const reducers = combineReducers({
    alert: alertReducer
})

export default reducers;