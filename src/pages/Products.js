import React from 'react';
import pic from './iphone14.png';

const Products = () => {
return (
	<div  style={{backgroundColor:"lavender"}}>
 
  <header>
    <hgroup>
      <h1>Apple iPhone 14 - 64GB</h1>
      <h4>The most amazing iPhone yet.</h4>
    </hgroup>
  </header>
 
  <figure>
    <img src={pic} alt="iphone" style={{width:"30%"}}/>
  </figure>
 
  <section>
 
  <p>The faster dual-core A5 chip. The 8MP camera with all-new optics also shoots 1080p HD video. And introducing Siri. It's the most amazing iPhone yet.</p>
 
   <summary>Product Features</summary>
      <ul>
        <li>8 mega pixel camera with full 1080p video recording</li>
        <li>Siri voice assitant</li>
        <li>iCloud</li>
        <li>Air Print</li>
        <li>Retina display</li>
        <li>Photo and video geotagging</li>
      </ul>
 
  <button>Buy Now</button>
 
  </section>
</div>
);
};

export default Products;
