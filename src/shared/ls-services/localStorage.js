export const setToken = token => localStorage.setItem('token', token);

export const getToken = () => localStorage.getItem('token');

export const removeToken = () => localStorage.removeItem('token');

export const setEmailLs = email => localStorage.setItem('email', email);

export const getEmailLs = () => localStorage.getItem('email');

export const removeEmailLs = () => localStorage.removeItem('email');
