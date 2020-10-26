import { userConstants } from '../constants';

export function blogs(state = {}, action) {
    switch (action.type) {
            case userConstants.GETALL_BLOGS:
                return {
                    loading: true
                };
            case userConstants.BLOGS_SUCCESS:
                return {
                    loading: false,
                    items: action.blogs
                };
            case userConstants.BLOGS_FAILURE:
                return {
                    error: action.error
                };
            case userConstants.BLOG_DETAILS:
                return {
                    loading: true
                };
            case userConstants.DETAILS_SUCCESS:
                return {
                    loading: false,
                    item: action.blogs
                };
            case userConstants.DETAILS_FAILURE:
                return {
                    error: action.error
                };
        default:
            return state
    }
}