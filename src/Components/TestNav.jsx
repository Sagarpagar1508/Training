import React from 'react'
import { FaArrowLeft, FaArrowRight, FaGlobe, FaHome, FaQuestion } from 'react-icons/fa'
import { Navigate, Outlet } from 'react-router-dom'

const TestNav = () => {

    function handleClick(e) {
        e.preventDefault()
        window.history.back()
    }
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
    function handleQuestion() {
        const newWindow = window.open(
            `http://localhost:5173/Test/menuoverview`, // URL to open
            '_self', // Open in a new tab or window
            'width=1000,height=1000' // Optional specs: width and height of the new window
        );
    }

    function handlenextPage() {
        const newWindow = window.open(
            `http://localhost:5173/Test/second`, // URL to open
            '_self', // Open in a new tab or window
            'width=1000,height=1000' // Optional specs: width and height of the new window
        );
    }
    return (
        <>
            <div className="container-fluid  text-light py-2 " style={{ backgroundColor: 'rgb(0, 0.5 ,101)', top: '0', position: 'sticky' }}>
                <div className="row align-items-center">
                    {/* Left side: Heading */}
                    <div className="col text-left">
                        <h4>Introduction to Fund Accounting</h4>
                    </div>

                    {/* Center: Page Number */}
                    <div className="col text-center">
                        <span>Page </span>
                    </div>


                    <div className="col text-right text-light">
                        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='bg-success bg-opacity-10 shadow-none border-0 text-light' ><FaGlobe size={24} className="mx-4" /></button>
                        <button className='bg-success bg-opacity-10 shadow-none border-0 text-light' onClick={homeClick}><FaHome size={24} className="mx-2" /></button>
                        <button className='bg-success bg-opacity-10 shadow-none border-0 text-light' onClick={handleQuestion}><FaQuestion size={24} className="mx-2" /></button>
                        <button className='bg-success bg-opacity-10 shadow-none border-0 text-light' onClick={e => handleClick(e)}>

                            <FaArrowLeft size={24} className="mx-2" />
                        </button>
                        <button onClick={handlenextPage} className='bg-success bg-opacity-10 shadow-none border-0 text-light' >

                            <FaArrowRight size={24} className="mx-2" />
                        </button>
                    </div>
                </div>

            </div>






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
            <div style={{ width: '100%' }}>
                <Outlet />
            </div>
        </>
    )
}

export default TestNav
