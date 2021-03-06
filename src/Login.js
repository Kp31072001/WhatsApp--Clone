import React from 'react'
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from './firebase'
import { actionType } from './reducer';
import {useStateValue} from "./StateProvider"


function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionType.SET_USER,
                user: result.user,
            })
        })
        .catch(error => alert(error.message)) ;
    }; 

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-transparent-background-22.png" alt="" />
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn} >Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login 
