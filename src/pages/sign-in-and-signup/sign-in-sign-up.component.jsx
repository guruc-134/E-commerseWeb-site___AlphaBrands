import React from 'react';

import './sign-in-sign-up.style.scss';  

import SignIn from '../../components/signin/sign-in.component';

import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignupPage = ()=>
(
    <div className='sign-in-and-sign-up'>
        <SignIn/> 
        <SignUp/>
    </div>

);

export default SignInAndSignupPage;