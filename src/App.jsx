import { Route, Router, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';
import { useState } from 'react';
import Login from './components/LoginPage';
import Signup from './components/signuppage/Signup';
import MainSectionPage from './components/MainSectionPage';
import SettingsMain from './components/SettingsMain';
import RegisterPage from './components/RegisterPage';

function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/main' element={<MainSectionPage/>}></Route>
        <Route path='/setting' element={<SettingsMain/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/personal' element={<MainSectionPage/>}></Route>
        <Route path='/work' element={<MainSectionPage/>}></Route>
        <Route path='/education' element={<MainSectionPage/>}></Route>
        
      </Routes>
  </>
  )
}
export default App;
