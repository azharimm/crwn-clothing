import React from 'react'
import './auth.styles.scss'
import Signin from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const Auth = () => (
    <div className="sign-in-and-sign-up">
        <Signin />
        <SignUp />
    </div>
)

export default Auth