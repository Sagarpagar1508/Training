import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaGlobe, FaHome, FaQuestion, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';

const FirstTest = () => {
    
    
    function handleClick(e) {
            e.preventDefault()
            window.history.back()
        }
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-7 my-4">
                            <h2 className=' p-2 text-center w-50' style={{ border: '10px solid lightblue' }}>Fund Accounting</h2>
                            <p className='my-5 w-75'>  <span className="fw-bold">Fund Aacounting</span> Specialized accounting system used by non-profits, governments, and other organizations to track resource usage.</p>
                            <img src='../src/assets/test2_img.jpg' alt="Discussion about data privacy" className="img-fluid " style={{ height: '350px', width: '500px', boxShadow: '3px 10px 10px 3px lightblue' }} />
                        </div>
                        <div className="col-5 text-light my-5" style={{ backgroundColor: 'rgb(0, 171, 240)', boxShadow: '3px 10px 10px 3px lightblue' }} >
                            <p className='p-3 text-ju75ify'><h5>FUND ACCOUNTING</h5>
                                Fund accounting is a specialized accounting system used primarily by non-profit organizations, government entities, and public sector institutions to track and report on the use of funds. Unlike traditional for-profit accounting, which focuses on profitability, fund accounting emphasizes accountability and compliance with donor-imposed or legal restrictions on funds. Each fund is a self-balancing set of accounts, designed to segregate financial resources for specific activities or objectives, ensuring that funds are used solely for their intended purposes. For instance, an organization may have multiple funds, such as a general fund for operational expenses, a grant fund for a specific program, and an endowment fund where the principal must remain intact while the income generated supports ongoing initiatives. This system facilitates transparency and meticulous tracking of revenues and expenditures, enabling organizations to provide detailed reports to stakeholders, demonstrate financial stewardship, and ensure adherence to donor stipulations.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='w-25 text-end fs-1' style={{position:'fixed',bottom:'20px',right:'10px'}}>
                    <Link className='Link' onClick={e=>handleClick(e)}><FaArrowLeft size={24} className="mx-2 " /></Link>
                    &nbsp;&nbsp;
                    < Link className='Link' to='/test/second' ><FaArrowRight size={24} className="mx-2" /></Link>
                </div>
            </div>
        
        </>
    );
};

export default FirstTest;