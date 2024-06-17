import React from 'react';
import audioFile from '../../assets/Fund.mp3';
import { FaGlobe, FaHome, FaQuestion, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SecondPage = () => {
    function handleClick1(e) {
        e.preventDefault()
        window.history.back()
    }
    return (
        <>
            <div className="container-fluid">
                <div className="container ">
                    <div className="row">
                        <div className="col-4 mt-5 ">
                            <h3 className='p-2 text-center w-100' style={{ border: '10px solid lightblue' }}>Introduction to Fund Accounting</h3>
                        </div>
                        <div className="col-8 mt-3">
                            <p>Fund accounting is a specialized accounting system used primarily by non-profit organizations, government entities, and other institutions where accountability rather than profitability is the primary focus. Unlike traditional for-profit accounting, which tracks the overall financial performance of a business, fund accounting segregates resources into various funds or accounts to ensure that they are used for their intended purposes. Each fund operates as a separate entity with its own set of financial statements, enabling organizations to track the allocation, use, and balance of financial resources. </p>
                            <div className=''>
                                <audio controls style={{ visibility: 'hidden' }}>
                                    <source src="src\assets\Fund.mp3" type="audio/mpeg" />
                                    <source src="src\assets\Fund.mp3" type="audio/ogg" />
                                </audio>
                                <audio controls>
                                    <source src={audioFile} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>


                            </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 p-4 " style={{ border: '10px solid #6495ED' }}>
                                <h6>Purpose and Focus:</h6>Fund accounting is used by non-profit organizations, government entities, and similar institutions.
                                <ul>
                                    <li>Purpose and Focus</li>
                                    <li>Segregation of Resources</li>
                                    <li>Independent Fund Entities</li>
                                    <li>Compliance with Donor Restrictions</li>
                                    <li>Grant Requirements Adherence</li>
                                    <li>Legal Stipulations Compliance</li>
                                    <li>Financial Transparency</li>
                                    <li>Enhanced Accountability</li>
                                    <li>Types of Funds</li>
                                    <li>Restricted Funds</li>
                                    <li>Unrestricted Funds</li>
                                    <li>Endowment Funds</li>
                                </ul>
                            </div>
                            <div className="col-7">
                                <div className='p-2' style={{ border: '10px solid #6495ED' }}>
                                    <h6>Transparency and Accountability</h6>Transparency and Accountability in fund accounting refer to the principles of openness and responsibility in managing and reporting financial activities.
                                    <ul>
                                        <li>Clear Financial Reporting</li>
                                        <li>Donor and Stakeholder Communication</li>
                                        <li>Internal Controls</li>
                                        <li>Regulatory Compliance</li>
                                        <li>Accessibility of Information</li>
                                        <li>Governance and Oversight</li>
                                    </ul>
                                </div>
                                <div className='text-center ms-5' style={{ marginTop: '90px', color: '#1E90FF' }}>
                                    <p>please navigate to the next page</p>
                                </div>
                                <div>
                                    <i data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" className="fa-solid fa-info " style={{ borderRadius: '50%', border: '4px solid #6495ED', padding: '10px 15px ', fontSize: '26px', color: '#02ccff', position: 'fixed', bottom: '30px', right: '100px', cursor: 'pointer' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-25 text-end ' style={{ position: 'fixed', bottom: '20px', right: '10px' }}>
                        <Link className='Link ' onClick={e => handleClick1(e)}><FaArrowLeft size={24} className="mx-2 " /></Link>
                        &nbsp;&nbsp;
                        < Link className='Link' to='/test/third'><FaArrowRight size={24} className="mx-2" /></Link>
                    </div>
                </div>
            </div>


            <div className="offcanvas offcanvas-bottom" style={{ backgroundColor: 'lightblue' }} tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">The Concept of Fund Accounting in Nonprofit Organizations</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small">
                    Fund accounting is a system used primarily by nonprofit organizations and governments to segregate and track financial resources according to their intended purposes. Unlike for-profit businesses, where the main focus is on profitability, nonprofit organizations emphasize accountability and stewardship over the funds they receive. In fund accounting, resources are divided into various funds, each with its own set of restrictions and reporting requirements. These funds can be unrestricted, temporarily restricted, or permanently restricted, based on donor stipulations.
                </div>

            </div>
        </>

    )
}

export default SecondPage