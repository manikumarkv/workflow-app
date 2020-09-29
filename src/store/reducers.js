import { combineReducers } from 'redux';
import workflowsReducer from '../reducers/workflows.reducer';
import userReducer  from '../reducers/user.reducer'


export default combineReducers({
    workflowsReducer,
    userReducer
});