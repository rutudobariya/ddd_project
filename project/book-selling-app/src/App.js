import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import Home from './Customer/Home';
import Addbook from './Admin/Add-book';
import Managebook from './Admin/Manage-book';
import Updatebook from './Admin/Update-book';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* customer side */}
          <Route path='/' element={<Home />} />

          {/* admin side */}
          <Route path='/add-book' element={<Addbook />} />
          <Route path='/manage-book' element={<Managebook />} />
          <Route path='/update-book/:id' element={<Updatebook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
