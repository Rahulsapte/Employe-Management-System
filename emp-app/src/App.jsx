import React from 'react'
import ListEmployeComponent from './Components/ListEmployeComponent'
import Header from './Components/Header';
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './Components/CreateEmployee';
import Dashboard from './Components/Dashbord';
import HomePage from './Components/HomePage';
import AboutWebsite from './Components/AboutWebsite';
import ReportDemo from './Components/ReportDemo';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/employees' element={<ListEmployeComponent />} />
          <Route path='/add-employee' element={<CreateEmployee />} />
          <Route path='/edit-employee/:id' element={<CreateEmployee />} />

          {/* New Routes */}
          <Route path='/dashboard' element={<Dashboard />} />
           <Route path='/about' element={<AboutWebsite/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
