// Followed login guide from https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
import { useState } from 'react';

export default function useToken() {
    const saveToken = userToken => {
        sessionStorage.setItem('token', userToken);
        setToken(userToken);
    }
        
    const getToken = () => {
        const userToken = sessionStorage.getItem('token');
        return userToken
    }

    const [token, setToken] = useState(getToken());

    return {
    setToken: saveToken,
    token
    }
}