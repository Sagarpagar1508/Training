import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaGlobe, FaHome, FaQuestion } from 'react-icons/fa'
import { Navigate, Outlet } from 'react-router-dom'
import { Link} from 'react-router-dom';
import SecondPage from './Test1pages/SecondPage'
import Availablechapter from './Test1pages/Availablechapter'
import FirstTest from './FirstTest'
import TestStart from './TestStart'
import backgroundImage from 'C:/Users/Avani/Downloads/new project/Training/src/assets/background.jpg';




const TestNav = () => {



  function homeClick() {
    const newWindow = window.open(
      `http://localhost:5173/Test`, // URL to open
      '_self', // Open in a new tab or window
      'width=1000,height=1000' // Optional specs: width and height of the new window
    );

    // Optional: You can add additional functionality here, like focusing the new window
    if (newWindow) {
      newWindow.focus();
    }
  }
  // function handleQuestion() {
  //     const newWindow = window.open(
  //         `http://localhost:5173/Test/menuoverview`, // URL to open
  //         '_self', // Open in a new tab or window
  //         'width=1000,height=1000' // Optional specs: width and height of the new window
  //     );
  // }




  return (
    <>
      <div className="container-fluid  text-light py-2 " style={{ backgroundColor: 'rgb(0, 0.5 ,101)', top: '0', position: 'sticky', }}>
        <div className="row align-items-center justify-content-between" >
          {/* Left side: Heading */}
          <div className="col text-left">
            <h4>Introduction to Fund Accounting</h4>
          </div>


          <div className="col text-right text-light " style={{ marginLeft: '400px' }}>
            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='bg-success bg-opacity-10 shadow-none border-0 text-light' >
              <FaGlobe size={24} className="mx-4" />
            </button>
            <Link className='Link text-light bg-opacity-10 mt-0 p-0' to='/test/chapter'><i className=" fa-solid fa-bars mx-4 fs-5 "size={30}></i></Link>

            <button className='bg-success bg-opacity-10 shadow-none border-0 text-light' onClick={homeClick}>
              <FaHome size={24} className="mx-2" />
            </button>

            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop1" className='bg-success bg-opacity-10 shadow-none border-0 text-light' >
              <FaQuestion size={24} className="mx-2" />
            </button>


          </div>
        </div>

      </div>


      <div style={{ width: '100%' }}>


        <Outlet />

      </div>


      {/* model for Langauge */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Language</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body ">
              <select className='form-control' name="" id="">
                <option value="">English</option>
                <option value="">Hindi</option>
                <option value="">Marathi</option>
              </select>
            </div>
          </div>
        </div>
      </div>




      <div className="modal fade modal-fullscreen-xxl-down" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen-xxl-down">
          <div className="modal-content">

            <div class="modal-body">

              <div className="container-fluid text-light" style={{
                backgroundImage: `url(${backgroundImage})`,
                // height: '100vh',
                width: '100vw',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                margin: 0,
                padding: 0
              }}>
                <div className="container"  >
                  <div className='d-flex align-items-center justify-content-between ' >
                    <div>
                      <h1>Menu Overview</h1>
                      <p>For the best viewing</p>
                    </div>
                    <button data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark fs-1"></i></button>
                  </div>

                  <div className='row border w-50 mt-3'>
                    <div className='col-2 border-end p-4' >
                      <i className="fa-solid fa-angle-left fs-4"></i> <i className="fa-solid fa-chevron-right fs-4"></i>
                    </div>
                    <div className='col-10'>
                      <p className='text-justify'>Course navigation-go to the next or Previous page. When button is in locked stateit will appear faded</p>
                    </div>
                  </div>
                  <div className='row border w-50 mt-3'>
                    <div className='col-2 border-end text-center p-4' >
                      <i className="fa-solid fa-bars fs-4"></i>
                    </div>
                    <div className='col-10'>
                      <p>The Menu button shows all available chapter in the course</p>
                    </div>
                  </div>
                  <div className='row border mt-3 w-50'>
                    <div className='col-2 border text-center p-4'>
                      <i className="fa-solid fa-house fs-4"></i>
                    </div>
                    <div className='col-10'>
                      <p>The Home button will return you to the Menu selection page</p>
                    </div>
                  </div>
                  <div className='row border mt-3 w-50'>
                    <div className='col-2 border text-center p-4'>
                      <i className="fa-solid fa-question fs-4"></i>
                    </div>
                    <div className='col-10'>
                      <p>The Help button will display this Menu Overview</p>
                    </div>
                  </div>
                  <div className='row border w-50 border-bottom-0 mt-3'>
                    <div className='col-2 border text-center p-4 '>
                      <i className="fa-solid fa-globe fs-4"></i>
                    </div>
                    <div className='col-6 '>
                      <p>The Language Selection button will take you back to the language selection page.</p>
                    </div>
                  </div>


                  <div className="row gap-5 mt-5 pb-2">
                    <div className="col-5 border">
                      <h6>Accessibility</h6><a href="Menu Overview">"If you requare an accessible document version of tranning please click here Instructions for aquiring completion are contained withing the document"</a>
                    </div>
                    <div className="col-5 border">
                      If you requare an accessible document version of tranning please click here Instructions for aquiring completion are contained withing the document
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default TestNav
