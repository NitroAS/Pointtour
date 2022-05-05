import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Assets/CSS/global.css';
import Home from './Pages/Home/home'

import {  Roteiro } from './Pages/Roteiro/roteiro'


const Rotas = () =>{

    return(

      <BrowserRouter>
      <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Roteiro  />} path="/Roteiro" />
         
      </Routes>
  </BrowserRouter>


    );

}
ReactDOM.render(<Rotas/> , document.getElementById('root'));