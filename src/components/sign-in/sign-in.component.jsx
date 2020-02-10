import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'


class Signin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''})

    }

    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have account</h2>
                <span>Signin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email"
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label="Email"
                        required/>
                    <FormInput 
                        type="password" 
                        name="password"
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="Password"
                        required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default Signin