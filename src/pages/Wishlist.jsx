import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Row,Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlist } from '../REDUX/Slices/wishlistSlice'
import { addToCart } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Wishlist() {

  const cart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const wishlist = useSelector(state=>state.wishlistReducer)

  const handleCard = (product)=>{
    const exisitingProduct = cart?.find(item=>item.id==product.id)
    if(exisitingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishlist(product.id))
     toast.success('products added to your cart!!')
    }else{
      dispatch(addToCart(product))
      dispatch(removeWishlist(product.id))

      
    }
    }
  return (
    <>
    <Header/>
    <div className='container' style={{marginTop:'100px'}}>
    
    </div>
    { wishlist?.length>0?
      <Row>
        {
          wishlist?.map(product=>(
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded mt-5 ms-5' style={{ width: '18rem' }}>
            <Card.Img style={{height:'180px'}} variant="top" src={product?.thumbnail} />
            <Card.Body>
              <Card.Title>{product?.title.slice(0,15)}...</Card.Title>
              <div className='d-flex justift-content-between'>
                <button onClick={()=>dispatch(removeWishlist(product?.id))} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
                <button onClick={()=>handleCard(product)} className='btn'><i className='fa-solid fa-cart-shopping text-success'></i></button>
              </div>
             
            </Card.Body>
          </Card>
            </Col>
          ))
     
}
    </Row>
    :
    <div style={{height:'78vh'}} className='w-100 d-flex justify-content-center align-items-center flex-column'>
    <img width={'480px'} className='img-fluid' src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" />
    <h3 className='text-center'>Your Wishlist is Empty!!!</h3>

  </div>

    }
        <ToastContainer position='top-center' theme='colored' autoClose={3000}/>

    </>
  )
}

export default Wishlist