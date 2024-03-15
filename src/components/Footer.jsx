import React from 'react'



function Footer() {
  return (
    <>
    <div  style={{height:'300px'}} className='mt-5 w-100 bg-primary'>
      <div className='d-flex justify-content-around mt-5 pt-5'>
        <div className="e-cart">
          <h4  style={{width:'260px'}}><i style={{color:'white'}} class="fa-solid fa-truck-fast"></i><span style={{color:'white'}} className='ms-2'>E-Cart</span></h4>
          <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Deserunt obcaecati consequuntur eius voluptates? <br /> officiis deserunt iste inventore ex, velit doloribus <br /> consectetur quae reprehenderit corrupti expedita!</p>
        </div>

        <div className='links d-flex flex-column'>
          <h4 style={{color:'white'}}>Links</h4>
          <h5 style={{color:'white'}}>Landing Page</h5>
          <h5 style={{color:'white'}}>Home Page</h5>
          <h5 style={{color:'white'}}>Wishlist</h5>
          <h5 style={{color:'white'}}>Cart</h5>
        </div>

        <div className='guides d-flex flex-column'>
          <h4 style={{color:'white'}}>Guides</h4>
          <h5 style={{color:'white'}}>React JS</h5>
          <h5 style={{color:'white'}}>React Routing</h5>
          <h5 style={{color:'white'}}>React Bootstarp</h5>
          <h5 style={{color:'white'}}>Redux</h5>
        </div>

        <div className='contact d-flex flex-column'>
          <h3 style={{color:'white'}}>Contact Us</h3>
          <div className='d-flex'>
            <input type="email" className='shadow rounded' placeholder='Email please' />
            <button className='btn btn-info ms-1 rounded'><i style={{color:'white'}} className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div  className='d-flex justify-content-between'>
            <a href=""><i style={{color:'white'}} class="fa-solid fa-envelope fa-1x"></i></a>
            <a href=""><i style={{color:'white'}} class="fa-brands fa-x-twitter fa-1x"></i></a>
            <a href=""><i style={{color:'white'}} class="fa-brands fa-square-instagram fa-1x"></i></a>
            <a href=""><i style={{color:'white'}} class="fa-brands fa-facebook fa-1x"></i></a>
            <a href=""><i style={{color:'white'}} class="fa-solid fa-phone fa-1x"></i></a>
          </div>
          </div>

      </div>
      <p className='text-center mt-5' style={{color:'white'}}>Copyright@Copy:2024 E-Cart</p>
    </div>
 
    </>
  )
}

export default Footer