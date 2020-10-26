import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { blogs } from './blogs.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    blogs
});

export default rootReducer;