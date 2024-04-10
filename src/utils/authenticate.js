export const setAccessToken = (token) => {
    window.localStorage.setItem('token', token);
}

export const getAccessToken = () => {
    return window.localStorage.getItem('token');
}

export const setUserInfo = (data) => {
        window.localStorage.setItem('userInfo', data)
}

export const getUserInfo = () => {
    return window.localStorage.getItem('userInfo')
}