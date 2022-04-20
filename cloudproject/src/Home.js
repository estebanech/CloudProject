import React from "react";
import { authentication } from "./firebase-config";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { NavLink } from "react-router-dom";
import './Home.css'

const Home = () => {
    const SignInGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication,provider).then((res) => {
            console.log(res)
        }).catch((err)=> {
            console.log(err)
        })
    }

    return(
        <div className="container">
            <div id="page-head">
                <ul className='nav'>
                    <li className="main-item"><NavLink to="/">Esteban Echeverri</NavLink></li>
                </ul>
            </div>
            <div className="button-container">
                <button onClick={SignInGoogle}>Sign in with google</button>
            </div>
        </div>
    )
}

export default Home