import React from 'react';
import { Card, ProgressBar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    const openNewWindow = () => {
        const newWindow = window.open(
          'http://localhost:5173/Test', // URL to open
          '_blank', // Open in a new tab or window
          'width=1000,height=1000' // Optional specs: width and height of the new window
        );
        
        // Optional: You can add additional functionality here, like focusing the new window
        if (newWindow) {
          newWindow.focus();
        }
    }
    return (
        <div className='container' >
            <div className='container border mt-4 ' style={{ backgroundColor: 'rgb(240, 248, 255)' }}>
                <div className='row mt-2 '>
                    <div className='col-4 text-center border' style={{ backgroundColor: 'white', color: 'black', padding: '50px' }}>
                        <i className="fa-solid fa-globe" style={{ fontSize: '100px' }}></i>
                    </div>
                    <div className='col-8'>
                        <p>COURSE - SELF PACED</p>
                        <h5>Privacy and Records Management Awareness for Non-Employees</h5>
                        <p>ATTENDED</p>

                        <div className='d-flex align-items-center justify-content-between'>
                            <div>
                                <span className="mr-2">
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-muted"></i> &nbsp;
                                    (5187)&nbsp;&nbsp;
                                    <i className="fa-regular fa-heart"></i>&nbsp;&nbsp;&nbsp;
                                    <i className="fa-solid fa-share-nodes text-primary" ></i>
                                </span>
                                <p><i className="fa-solid fa-exclamation text-danger"></i> Please rate</p>
                            </div>
                            <div className='text-right d-flex gap-3'>
                                <p>Completion Status</p>
                                <ProgressBar now={100} label={`${0}%`} className="mt-2 ml-2" style={{ width: '150px' }} />
                                <Button variant="primary" onClick={openNewWindow} className='text-color-white mt-2 ml-2 mr-2 '>
                                    <p style={{ color: 'white', textDecoration: 'none' }}>Start</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-4 border-end">
                        <h6 className="bg-primary text-white p-2">Privacy and Records manegement Aware...</h6>
                    </div>
                    <div className="col-8">
                        <nav className="nav mb-4 border-bottom">
                            <a className="nav-link active fw-medium" aria-current="page"  style={{cursor:'pointer',hover:'bg-red'}}>DETAILS</a>
                            <a className="nav-link fw-medium" href="/activites">ACTIVITES</a>
                            <a className="nav-link fw-medium" href="/similar activities">SIMILAR ACTIVITIES</a>
                        </nav>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item border" style={{ backgroundColor: 'rgb(240, 248, 255)' }}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Full Description
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div className="accordion-item border" style={{ backgroundColor: 'rgb(240, 248, 255)' }}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Schedule and Pricing
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flucsh</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item border" style={{ backgroundColor: 'rgb(240, 248, 255)' }}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Additional Information
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
