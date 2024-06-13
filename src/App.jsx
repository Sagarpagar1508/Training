import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import UserDashboard from './Components/UserDashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestNav from './Components/TestNav';


import { BrowserRouter } from 'react-router-dom';
import TestStart from './Components/TestStart';
import FirstTest from './Components/FirstTest';
import SecondPage from './Components/SecondPage';


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      {/* <TestNav />
      <TestStart /> */}

      {/* <FirstTest/> */}
      {/* <SecondPage/> */}

      <Router>
        <Routes>


          <Route path='/' element={<Navbar />} >
            <Route path='' element={<Home />} />
            <Route path='user' element={<UserDashboard />} />
          </Route>
          <Route path="Test" element={<TestNav />}>
            <Route path="" element={<TestStart />} />
            <Route path="test0" element={<FirstTest />} />
          </Route>



        </Routes>
      </Router>


    </>
  )
}

export default App