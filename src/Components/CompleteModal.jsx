import React from 'react'
import { Link } from 'react-router-dom'
import { FaGlobe, FaHome, FaQuestion, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const CompleteModal = () => {
    function handleClick1(e) {
        e.preventDefault()
        window.history.back()
    }
    return (
        <>
            <div className="container-fluid">
                <div className="conatiner text-center  " style={{ margin: '120px' }}>
                    <h1 className='fw-5'>
                        Thanks For Completing the Module
                    </h1>
                    <h4 className='mb-5'>
                        To Take Assignment
                    </h4>
                    <Link className='Link border p-2 bg-success text-light rounded' to='/test/mcq' style={{textDecoration:'none', }}>Click on </Link>
                </div>
                {/* <div className='w-25 text-end' style={{ position: 'fixed', bottom: '20px', right: '10px' }}>
                <Link className='Link' onClick={e => handleClick1(e)}><FaArrowLeft size={24} className="mx-2 " /></Link>
                &nbsp;&nbsp;
                < Link className='Link' to='/third/mcq'><FaArrowRight size={24} className="mx-2" /></Link>
            </div> */}

            </div >
        </>
    )
}

export default CompleteModal
