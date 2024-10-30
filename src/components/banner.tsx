import Image from "next/image";
import React from "react";

export default function BANNER() {
  return (
    <div id="banner-box1">
      <div id="banner-same-boxes" >
       <Image id="banner-img" src="/banner11.png" alt="product" width={1000} height={1000}/>
      </div>
      <div id="banner-same-boxes2" >
     <h1 className="banner-hdn1">Get 50% Off</h1>


     <h3 id="htnno2">for all new product pushases 
         <br />
         
     min. Purchases Rp 350.00</h3>


     <button className="banner-btn">Shop Now</button>
      </div>
      <div id="banner-same-boxes" >
        <Image id="banner-img"  src="/bannner2.png" alt="product" width={1000} height={1000}/>
      </div>
    </div>
  );
}
