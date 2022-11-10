import { Axios } from "axios";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

export default function _auth(SpecificComponent, option, adminRoute = null){
    //SpecificComponent: 
    //option nulll(all), true(only login_user), false

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function AuthenticationCheck(props){
        useEffect( () => {
            dispatch(auth()).then(response => {
                console.log(response)

                if(!response.payload.isAuth){ //not login_user
                    if(option) {
                        navigate('/login')
                    }
                }
                else{
                    if(adminRoute && !response.payload.isAdmin){
                        navigate('/')
                    }
                    else{
                        if(option === false){
                            navigate('/')
                        }
                    }
                }
            });
        },[]);

        return <SpecificComponent/>
    }

    return <AuthenticationCheck/>
}