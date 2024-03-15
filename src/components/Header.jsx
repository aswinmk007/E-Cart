import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../REDUX/Slices/productSlice';



function Header({insideHome}) {
  const dispatch = useDispatch()
  const cartCount = useSelector(state=>state.cartReducer).length
  const wishlistCount = useSelector(state=>state.wishlistReducer).length

  return (
    <>
        <Navbar style={{zIndex:'10'}}  expand="lg" className="bg-primary position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand ><Link to={'/'}><i style={{color:'white'}} class="fa-solid fa-truck-fast"></i><span style={{color:'white'}} className='ms-2'>E-Cart</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            { insideHome && 
              <Nav.Link>
              <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} className='shadow rounded' style={{width:'480px',height:'40px'}} type="text" placeholder='Search products' />
            </Nav.Link>
            }
            <Nav.Link>
              <Link to={'/wishlist'} className=''><i className='fa-solid fa-heart text-danger'><span style={{color:'white'}} className='ms-2'>Wishlist</span></i><Badge bg="light" className='ms-1'>{wishlistCount}</Badge></Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/cart'} className=''><i className='fa-solid fa-cart-shopping text-success'><span style={{color:'white'}} className='ms-2'>Cart</span></i><Badge bg="light" className='ms-1'>{cartCount}</Badge></Link>
            </Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
         

    </>
  )
}

export default Header

