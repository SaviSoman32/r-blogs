import { userConstants } from '../constants';
import { userService } from '../services';

export const userActions = {
    login,
    logout,
    getAll,
    getAllBlogs,
    blogDetails
};



function login(email, password) {
    return dispatch => {
        userService.login(email, password)
            .then(
                user => { 
                    const result = user.filter(currentUser => {
                        return currentUser.email.toLowerCase().includes(email.toLowerCase()) && currentUser.username.toLowerCase().includes(password.toLowerCase())
                    });
                    console.log('resrs', result);
                    if(result.length > 0) {
                        localStorage.setItem('user', JSON.stringify(user));
                        dispatch(success(result));
                        window.location.pathname = '/home';
                    } else {
                        //toast.error('User not exist');
                        dispatch(failure('User not exist'));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getAllBlogs() {
    return dispatch => {
        dispatch(request());

        userService.getAllBlogs()
            .then(
                blogs => dispatch(success(blogs)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_BLOGS } }
    function success(blogs) { return { type: userConstants.BLOGS_SUCCESS, blogs } }
    function failure(error) { return { type: userConstants.BLOGS_FAILURE, error } }
}

function blogDetails(id) {
    return dispatch => {
        dispatch(request());

        userService.blogDetails(id)
            .then(
                blogs => dispatch(success(blogs)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.BLOG_DETAILS } }
    function success(blogs) { return { type: userConstants.DETAILS_SUCCESS, blogs } }
    function failure(error) { return { type: userConstants.DETAILS_FAILURE, error } }
}

