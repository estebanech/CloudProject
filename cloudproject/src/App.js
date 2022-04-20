import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import { authentication } from "./firebase-config";
import React, { useState } from 'react';
import Form from './Form';


function App() {
  const [isUserIn,setIsUserIn] = useState(false)
  authentication.onAuthStateChanged((user)=>{
    if(user){
      setIsUserIn(true)
    } else {
      setIsUserIn(false)
    }
  })
  if(isUserIn){
      return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />} />
          </Routes>
        </BrowserRouter>
      )
  } else {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
    
  }
  
}

export default App;
