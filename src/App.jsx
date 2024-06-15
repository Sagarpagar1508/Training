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





function App() {
  return (
    <>
      {/* <FundPPT/>
      <div className="App">
			<div className="PDF-viewer">
				<PdfViewerComponent document={'src/assets/pptexamples (1).ppt.pptx'} />
			</div>
		</div> */}

      {/* <FirstTest/> */}
      {/* <TestNav/>  */}

      {/* <Availablechapter/> */}
      {/* <MenuOverview/> */}
      {/* <SecondPage/> */}
      {/* <MenuOverview/> */}



      <Router>
        <Routes>
          <Route path='/' element={<Navbar />} >
            <Route path='/' element={<Home />} />
            <Route path='user' element={<UserDashboard />} />
          </Route>

          <Route path="Test" element={<TestNav />}>
            <Route path="" element={<TestStart />} />
            <Route path="test0" element={<FirstTest />} />
            <Route path="second" element={<SecondPage />} />
            <Route path="menuoverview" element={<MenuOverview />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App