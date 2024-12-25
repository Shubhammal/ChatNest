import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

function UserGetAllUsers() {
    const [allUser, setAllUser] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const token = Cookies.get('jwt');
                const response = await axios.get('/api/user/getAllUsers', {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setAllUser(response.data.allUsers);
                setLoading(false);
            } catch (error) {
                console.log("Error in UserGerAllUsers" + error);
            }
        };
        getUsers();
    }, [])
    return [allUser, loading];
}

export default UserGetAllUsers;