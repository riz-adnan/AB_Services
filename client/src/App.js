import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';

import Homepage from './components/Homepage'

import Adminpage from './components/Adminpage';
import Adminlogin from './components/Adminlogin';
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Form from './components/Form'
import States from './context/States'



function App() {

  return (
    <>
    <States>
    
    <Router>
    

      <Routes>
      <Route exact path='/' element={<Homepage/>} />
      
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/services' element={<Services/>} />
      <Route exact path='/admin283' element={<Adminlogin/>} />
      <Route exact path='/admin283/adminpage' element={<Adminpage/>} />
      <Route exact path='/form' element={<Form/>} />
      </Routes>
    
    
    </Router>
   
    </States>
    </>
  );
}

export default App;
