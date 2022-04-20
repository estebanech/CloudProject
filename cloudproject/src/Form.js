import axios from "axios";
import React, { useState } from "react";
import { authentication } from "./firebase-config";
import { NavLink } from "react-router-dom";
import './Form.css'

const Form = () => {
    const apiLink = "https://us-central1-my-first-project-337919.cloudfunctions.net/project";

    const [clazz,setClazz] = useState("")
    const [image,setImage] = useState(null)
    const [submited,setSubmited] = useState(false)


    const signOut = () => {
        authentication.signOut();
    }

    const handleChangeClazz = (event) =>{
        setClazz(event.target.value)
    }

    const handleChangeImage = (event) => {
        setImage(event.target.files[0])
    }

    const handleSubmit = (event) => {
        //event.preventDefault();
        const bodyFormData = new FormData();
        bodyFormData.append('class',clazz);
        bodyFormData.append('file',image);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(apiLink,bodyFormData,config).then((res) =>
            console.log(res)
        ).catch((err) => {
            console.log(err)
        })
        setSubmited(true)
    }

    if(submited){
        return(
            <div className="container">
                <div id="page-head">
                    <ul className='nav'>
                        <li className="main-item"><NavLink to="/">Esteban Echeverri</NavLink></li>
                    <li className="last-item"><NavLink to="/" onClick={signOut}>Sign out</NavLink></li>
                    </ul>
                </div>
                
                <div className="form-container">
                    <button onClick={()=>setSubmited(!submited)}>Submit a new file</button>
                </div>
            </div>
        )
    } else {
        return(
            <div className="container">
                <div id="page-head">
                    <ul className='nav'>
                        <li className="main-item"><NavLink to="/">Esteban Echeverri</NavLink></li>
                    <li className="last-item"><NavLink to="/" onClick={signOut}>Sign out</NavLink></li>
                    </ul>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label for="fname" >Class name</label><br/>
                        <input type="text" 
                                id="class" 
                                name="class" 
                                onChange={handleChangeClazz}/><br/>
                        <input type="file"
                                id="avatar" name="avatar"
                                accept="image/png" 
                                onChange={handleChangeImage}/><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form