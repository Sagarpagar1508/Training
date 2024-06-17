import React from 'react'

const Availablechapter = () => {
    return (
        <div className="container-fluid">
            <div className='m-5'>
                <h1>
                    Available Module
                </h1>
            </div>
            <div className="container-fluid h-25 ">
                <div className="row ">
                    <div className="col-4">
                     <div className="card p-3">
                        <img className='card-img-top' src="../src\assets\test3_img.jpg" alt="sagar" />
                        <div className="card-body">
                            <p>Segregation of Resources</p>
                        </div>
                     </div>
                    </div>
                    <div className="col-4 ">
                    <div className="card p-3">
                        <img className='card-img-top' src="../src\assets\test3_img.jpg" alt="sagar" />
                        <div className="card-body text-center ">
                            <p className=''>Enhanced Accountability</p>
                        </div>
                     </div>
                    </div>
                    <div className="col-4">
                    <div className="card p-3">
                        <img className='card-img-top' src="../src\assets\test3_img.jpg" alt="sagar" />
                        <div className="card-body">
                            <p className='text-center'>Enhanced Accountability</p>
                        </div>
                     </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Availablechapter
