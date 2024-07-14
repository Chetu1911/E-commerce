import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './Home.css'
import ProductList from '../../components/ProductCard/ProductCard';
import ImageSlider from "../imageslider/imageslider"
import Review from './Review/Review';
import Footer from '../../components/Footer/Footer';



function Home() {
  return (
    <div>

      <Navbar/>
       <div className='imageslideshow'>
       <ImageSlider/>
       </div>
       
      <div className='poster-section'>
        <h2> Your Amazing Tshirt Printing Business can Buld Here!!</h2>
        <button>Let's Upgrade!</button>
      </div>
    

    <div className="cards-container">
      <div className="card C1">
        <p>25% off T-shirt offer</p>
        <button>Let's Get It!!</button>
      </div>
      <div className="card C2">
        <p>Package box</p>
        <button>Explore!</button>
      </div>
    </div>
    <div className='Categories'>
     <h2>Our Products</h2>
     <ProductList/>
     <ProductList/>
    </div>
   
   <Review/>
 <Footer/>
  
   </div>
  )
}

export default Home
