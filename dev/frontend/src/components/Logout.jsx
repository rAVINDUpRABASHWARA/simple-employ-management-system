import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import Navbar from './Navbar';

export default function Logout() {

//use navigate to redirect the user from one page to another
    const navigate = useNavigate();

//logout function
    const logout = async () => {
        try {
            //Request backend to logout
            const res = await fetch('/logout', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });

            //if an error occurred
            if(res.status === 401 || !res) {
                window.alert("Please Logout Later");
            } else {
                navigate.push('/');
                window.location.reload();
            }
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        logout();
    }, []);

    return (
        <div>
            {/* use the navbar so the use can again go to the home page or can login in to the system again */}
            <Navbar/>
        </div>
    )
}
