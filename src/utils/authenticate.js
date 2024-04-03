export const setAccessToken = (token) => {
    window.localStorage.setItem('token', token);
}

export const getAccessToken = () => {
    // const userInfo = getUserInfo()
    return window.localStorage.getItem('token');
}