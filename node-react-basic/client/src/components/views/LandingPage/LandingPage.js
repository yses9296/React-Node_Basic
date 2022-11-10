import React, { useEffect } from 'react';
import axios from 'axios';
import Auth from '../../../hoc/auth'

const LandingPage = ()=>{

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => { console.log(response) })
    }, [])

    const onClickLogout = () => {
        axios.get('/api/users/logout').then(response => {
            if(response.data.success){
                alert('Logout')
            }
            else {
                alert('Logout failed')
            }
        })
    }

    return (
        <div id="page" className="landing_page" >
            <h2>Start React - Node</h2>

            <button className='logout_btn' onClick={onClickLogout}>Logout</button>
        </div>
    );
}


export default LandingPage;
// export default Auth(LandingPage, null);
