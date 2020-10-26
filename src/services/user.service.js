export const userService = {
    login,
    logout,
    getAll,
    getAllBlogs,
    blogDetails
};

function login(email, password) {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function getAll() {
    return fetch(`https://jsonplaceholder.typicode.com/users`).then(handleResponse);
}

function getAllBlogs() {
    return fetch(`https://jsonplaceholder.typicode.com/posts`).then(handleResponse);
}

function blogDetails(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}