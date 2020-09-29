import { combineReducers } from 'redux';
import workflowsStore from '../reducers/workflows.reducer';
import userStore  from '../reducers/user.reducer'


export default combineReducers({
    workflowsStore,
    userStore
});