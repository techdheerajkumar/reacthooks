import React, { useState } from 'react';
import FormComponent from '../Molecules/LoginComponent';
import { useLocation} from "react-router";
const LoginPageComponent = () => {
    const location = useLocation();
    // console.log(location.pathname)
    return (
        <div className="page-wrapper">
            <div className="container">
                <FormComponent />
            </div>
        </div>
    )
}

export default LoginPageComponent;