import React from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom" //可以處理頁面跳轉
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.js';
import { CreateActivity, EditActivity, ListActivity } from './components/activity/index';

function App() {
  return (
      <Router>
        <div className='container'>
          <Navbar/> 
          <br />
          <Routes>
            {/* actual  relative URL  */}
            <Route path='/' element = {<ListActivity/>} /> 
            <Route path = '/create_activity' element ={<CreateActivity/>} />
            <Route path = '/edit/:id' element ={<EditActivity/>} /> 
          </Routes>
        </div>
      </Router>
  );
}

export default App;
