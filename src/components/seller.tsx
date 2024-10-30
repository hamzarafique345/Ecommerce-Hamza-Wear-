import Image from "next/image";
import React from "react";

export default function SELLER() {
  return (
    <div id="div-sell-prnt">
      <h1 id="h1-sell">Our Best Seller</h1>

      <div id="sell-box1">
        <div className="boxes">
          <Image
            className="sell-img"
            src="/sell1.png"
            alt="seller 1"
            width={1000}
            height={1000}
          />
          <h3>Euphoria CropBlouse</h3>
          <h4>Rp.125.00</h4>
        </div>
        <div className="boxes">
          <Image
            className="sell-img"
            src="/sell2.png"
            alt="seller 1"
            width={1000}
            height={1000}
          />
          <h3>Euphoria CropBlouse</h3>
          <h4>Rp.125.00</h4>
        </div>
        <div id="sell-boxes3" className="boxes">
          <Image
            className="sell-img"
            src="/sell3.png"
            alt="seller 1"
            width={2000}
            height={2000}
          />
          <h3>Euphoria CropBlouse</h3>
          <h4>Rp.125.00</h4>
        </div>
      </div>
    </div>
  );
}
