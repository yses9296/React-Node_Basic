import React, { useEffect } from 'react';
import axios from 'axios';
// import '../../../App.css'

const LandingPage = ()=>{

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => { console.log(response) })
    }, [])

    return (
        <div id="page" className="landing_page" >
            <h2>Start React - Node</h2>
        </div>
    );
}

export default LandingPage;
