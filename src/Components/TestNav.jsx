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
    function handleQuestion(){
        const newWindow = window.open(
            `http://localhost:5173/menuoverview`, // URL to open
            '_self', // Open in a new tab or window
            'width=1000,height=1000' // Optional specs: width and height of the new window
        );
    }
    function handleGlobal() {
        prompt("This are languge")
    }
    return (
        <>
            <div className="container-fluid  text-light py-2 " style={{ backgroundColor: 'rgb(0, 0.5 ,101)',position:'-webkit-sticky',top:'0',position:'sticky' }}>
                <div className="row align-items-center">
                    {/* Left side: Heading */}
                    <div className="col text-left">
                        <h4>Introduction to Fund Accounting</h4>
                    </div>

                    {/* Center: Page Number */}
                    <div className="col text-center">
                        <span>Page </span>
                    </div>

                    {/* Right side: Icons */}
                    <div className="col text-right text-light">
                        <button className='bg-success bg-opacity-10 shadow-none border-0 text-light' onClick={handleGlobal}><FaGlobe size={24} className="mx-4" /></button>
                        <button className='bg-success bg-opacity-10 shadow-none border-0 text-light' onClick={homeClick}><FaHome size={24} className="mx-2" /></button>
                        <button onClick={handleQuestion}><FaQuestion size={24} className="mx-2" /></button>
                        <button className='bg-success bg-opacity-10 shadow-none border-0 text-light' onClick={e => handleClick(e)}>

                            <FaArrowLeft size={24} className="mx-2" />
                        </button>
                        <button className='bg-success bg-opacity-10 shadow-none border-0 text-light' >

                            <FaArrowRight size={24} className="mx-2" />
                        </button>
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
