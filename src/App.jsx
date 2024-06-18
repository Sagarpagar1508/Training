import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import UserDashboard from './Components/UserDashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestNav from './Components/TestNav';


import { BrowserRouter } from 'react-router-dom';
import TestStart from './Components/TestStart';
import FirstTest from './Components/FirstTest';
import SecondPage from './Components/Test1pages/SecondPage';
import MenuOverview from './Components/MenuOverview';
import Availablechapter from './Components/Test1pages/Availablechapter';
import CompleteModal from './Components/CompleteModal';
import Mcq from './Components/MCQ/Mcq';
import Second1 from './Components/SecondLink/Second1';
import Page2 from './Components/SecondLink/Page2';
import PdfViewerComponent from './Components/pdfViewer/PdfViewerComponent';
import Login from './Components/Login/Login';






function App() {
  return (
    <>
    {/* <Login/> */}
      {/* <h1>hello</h1> */}
      {/* <PowerPointViewer/> */}
      {/* <CompleteModal/> */}

      {/* <PdfViewerComponent /> */}
      {/* <FirstTest/> */}
      {/* <TestNav/>  */}

      {/* <Availablechapter/> */}
      {/* <MenuOverview/> */}
      {/* <SecondPage/> */}
      {/* <MenuOverview/> */}
      {/* <Page2/> */}
      {/* <Login/> */}

      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path='/' element={<Navbar />} >
            <Route path='/home' element={<Home />} />
            <Route path='user' element={<UserDashboard />} />
          </Route>

          <Route path="Test" element={<TestNav />}>
            <Route path="" element={<TestStart />} />
            <Route path="test0" element={<FirstTest />} />
            <Route path="second" element={<SecondPage />} />
            <Route path="menuoverview" element={<MenuOverview />} />
            <Route path="third" element={<CompleteModal />} />
            <Route path="test1" element={<Second1 />} />
            <Route path="chapter" element={<Availablechapter />} />
            <Route path="mcq" element={<Mcq />} />
           <Route path="page2" element={<Page2 />}/>

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App