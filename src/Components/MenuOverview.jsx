import React from 'react'

const MenuOverview = () => {
  return (
    <>

    <div className="container">
      <div className='d-flex align-items-center justify-content-between ' >
      <div>
        <h1>Menu Overview</h1>
        <p>For the best viewing</p>
      </div>
      <i class="fa-solid fa-xmark fs-1"></i>
      </div>

      <div className='row border w-50 mt-3'>
        <div className='col-2 border-end p-4' >
        <i class="fa-solid fa-angle-left fs-4"></i> <i class="fa-solid fa-chevron-right fs-4"></i>
        </div>
        <div className='col-10'>
            <p className='text-justify'>Course navigation-go to the next or Previous page. When button is in locked stateit will appear faded</p>
        </div>
      </div>
      <div className='row border w-50 mt-3'>
        <div className='col-2 border-end text-center p-4' >
        <i class="fa-solid fa-bars fs-4"></i>
        </div>
        <div className='col-10'>
            <p>The Menu button shows all available chapter in the course</p>
        </div>
      </div>
      <div className='row border mt-3 w-50'>
        <div className='col-2 border text-center p-4'>
        <i class="fa-solid fa-house fs-4"></i>
        </div>
        <div className='col-10'>
            <p>The Home button will return you to the Menu selection page</p>
        </div>
      </div>
      <div className='row border mt-3 w-50'>
        <div className='col-2 border text-center p-4'>
        <i class="fa-solid fa-question fs-4"></i>
        </div>
        <div className='col-10'>
            <p>The Help button will display this Menu Overview</p>
        </div>
      </div>
      <div className='row border w-50 border-bottom-0 mt-3'>
        <div className='col-2 border text-center p-4 '>
        <i class="fa-solid fa-globe fs-4"></i>
        </div>
        <div className='col-6 '>
            <p>The Language Selection button will take you back to the language selection page.</p>
        </div>
      </div>
    </div>

    </>
  )
}

export default MenuOverview
