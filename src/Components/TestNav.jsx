import React from 'react'
import { FaArrowLeft, FaArrowRight, FaGlobe, FaHome, FaQuestion } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'

const TestNav = () => {

    function handleClick(){

    }
    return (
        <>
            <div className="container-fluid  text-light py-2 " style={{ backgroundColor: 'rgb(0, 0.5 ,101)' }}>
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
                        <FaGlobe size={24} className="mx-4" />
                        <FaHome size={24} className="mx-2" />
                        <FaQuestion size={24} className="mx-2" />
                        <FaArrowLeft size={24} className="mx-2" />
                        <button onClick={handleClick}>

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
