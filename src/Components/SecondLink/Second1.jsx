import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { FaGlobe, FaHome, FaQuestion, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';

const Second1 = () => {
    function handleClick(e) {
        e.preventDefault()
        window.history.back()
    }
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-5 my-3">
                            <h2 className=' p-1 text-center w-60' style={{ border: '10px solid rgb(0, 171, 240)' }}>Fund Accounting Principle and Concept</h2>
                            <p className='my-5 w-70'>  <span className="fw-bold">fund accounting principle and concept</span> Specialized accounting system used by non-profits, governments, and other organizations to track resource usage.</p>
                            <img src='../src\assets\principle.jpeg' alt="Discussion about data privacy" className="img-fluid " style={{ height: '350px', width: '500px', boxShadow: '3px 10px 10px 3px lightblue' }} />
                        </div>
                        <div className="col-6 " style={{ marginLeft: '90px' }}>
                            <div className='' style={{ width: '535px', marginTop: '100px' }}>
                                <h6>Fund accounting:</h6><p>is a specialized system used primarily by non-profit organizations, governmental entities, and similar institutions to manage and track resources whose use is restricted by donors, grantors, or governing agencies.This method provides a clear and transparent way to demonstrate how financial resources are allocated and expended, aligning with the organization's mission and legal requirements.</p>
                            </div>

                            <div className='text-light my-5' style={{ backgroundColor: 'rgb(0, 171, 240)', boxShadow: '3px 10px 10px 3px lightblue', height: '350px', borderRadius: '20px', width: '300px', marginLeft: '90px' }}>
                                <h2 className='text-center p-2'> Learn about the Fund Accounting Principle and Concept
                                </h2>
                                <div className='text-center' style={{ marginTop: '120px' }}>
                                    <a href="https://www.youtube.com/watch?v=Y8yV12bShrI&pp=ygUsZnVuZCBhY2NvdW50aW5nIHByaW5jaXBsZSBhbmQgY29uY2VwdCAgdmVkaW8%3D" target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-warning'>Watch Video</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-25 text-end fs-1' style={{ position: 'fixed', bottom: '20px', right: '10px' }}>
                    <Link className='Link' onClick={e => handleClick(e)}><FaArrowLeft size={24} className="mx-2 " /></Link>
                    &nbsp;&nbsp;
                    <Link className='Link' to='/Test/test1/page2' ><FaArrowRight size={24} className="mx-2" /></Link>
                </div>
            </div>

        </>
    )
}

export default Second1
