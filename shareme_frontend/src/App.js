import React, {useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { gapi } from 'gapi-script';

function App() {
  const navigate = useNavigate();

  
  useEffect(() => {
    function start () {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_API_TOKEN ,
        scope: ''
      })
    };

    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    if (!User) navigate('/login');
    
    gapi.load('client:auth2', start)
  }, [])

  return (
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='/*' element={<Home/>}/>
    </Routes>
  );
}

export default App;
