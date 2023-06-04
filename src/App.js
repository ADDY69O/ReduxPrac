
import './App.css';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';

import { Routes, Route } from "react-router-dom";

import {BrowserRouter} from 'react-router-dom'
import ProductContainer from './container/ProductContainer';
import Card from './container/Card';
import Navbar from './container/Navbar';
import { BigCard } from './container/BigCard';


function App() {
const products =useSelector((state)=>state);


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<ProductContainer/>}/>
      <Route exact path="/product/:productId" element={<BigCard/>}/>
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
