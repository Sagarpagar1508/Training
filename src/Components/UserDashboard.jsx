import React from 'react';
import { Card, ProgressBar, Button } from 'react-bootstrap';
import Star from './Star';

import Details from './UserDashboard/Details';
import Activities from './UserDashboard/Activities';
import SimilarActivities from './UserDashboard/SimilarActivities';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const UserDashboard = () => {

    const [activeTab, setActiveTab] = useState('DETAILS');
    const [rateCount, setRateCount] = useState(5187)
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (liked) {
            setRateCount(rateCount - 1)
        } else setRateCount(rateCount + 1)
        setLiked(!liked);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'DETAILS':
                return <Details />;
            case 'ACTIVITIES':
                return <Activities />;
            case 'SIMILAR_ACTIVITIES':
                return <SimilarActivities />;
            default:
                return <Details />;
        }
    };

    // const openPPT = () => {
    //     <a href={'src/assets/file_example_PPT_250kB.ppt'} className='flex justify-between items-center w-full ' download='true' target="_blank" rel='noreferrel'>
    //     download</a>
    // }

    const openNewWindow = () => {
        const newWindow = window.open(
            'http://localhost:5173/Test', // URL to open
            '_blank', // Open in a new tab or window
            'width=1800,height=900' // Optional specs: width and height of the new window
        );

        // Optional: You can add additional functionality here, like focusing the new window
        if (newWindow) {
            newWindow.focus();
        };
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
                        <h5>Indroduction to Fund Accounting</h5>
                        <p>ATTENDED</p>

                        <div className='d-flex align-items-center justify-content-between'>

                            <div className="mr-2 align-items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        filled={star <= (hover || rating)}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(0)}
                                    />
                                ))}
                                &nbsp;
                                ({rateCount})&nbsp;&nbsp;
                                <Button
                                    variant="light"
                                    onClick={handleLike}
                                    style={{ border: 'none', background: 'none', padding: 0, marginTop: '-10px' }}
                                >
                                    <FaHeart color={liked ? 'red' : 'gray'} size={18} />
                                </Button>
                                <p className='text-success p-2'><i className="fa-solid fa-exclamation text-success"></i> Please rate</p>
                            </div>
                            {/* <div>
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
                                <p className='text-danger p-2'><i className="fa-solid fa-exclamation text-danger"></i> Please rate</p>
                            </div> */}
                            <div className='text-right d-flex gap-3'>
                                <p>Completion Status</p>
                                <ProgressBar now={100} label={`${0}%`} className="mt-2 ml-2" style={{ width: '150px' }} />
                                <Button onClick={openNewWindow} variant="primary" className='btn btn-primary  text-light '>
                                    <p style={{ color: 'white', textDecoration: 'none', margin: 0, padding: 0 }}>Start</p>
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

                            {/* <button style={styles.button} onClick={() => setActiveTab('DETAILS')}>DETAILS</button> */}

                            <button className="nav-link fw-medium" aria-current="page" onClick={() => setActiveTab('DETAILS')} style={{ cursor: 'pointer', hover: 'bg-red' }}>DETAILS</button>

                            <button className="nav-link fw-medium" onClick={() => setActiveTab('ACTIVITIES')}>ACTIVITIES</button>

                            <button className="nav-link fw-medium" onClick={() => setActiveTab('SIMILAR_ACTIVITIES')}>SIMILAR ACTIVITIES</button>
                        </nav>
                        <div >
                            {renderContent()}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};
// const styles = {
//     buttonContainer: {
//         display: 'flex',
//         justifyContent: 'center',
//         margin: '20px 0',
//     },
//     button: {
//         margin: '0 10px',
//         padding: '10px 20px',
//         cursor: 'pointer',
//         backgroundColor: '#007BFF',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         fontSize: '16px',
//     },
//     contentContainer: {
//         padding: '20px',
//         border: '1px solid #ddd',
//         borderRadius: '5px',
//     },
// };

export default UserDashboard;
