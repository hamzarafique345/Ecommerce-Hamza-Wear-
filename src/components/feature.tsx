import React from "react";

export default function FEATURES() {
  return (
    <div >
      <h1 className="feature-hdn1">Our Feature Collections</h1>

      <div id="feature-parent">
        <div id="feauture-col1" className="same-feauture-child ">
          <div id="img-feauture1" className="col1-same ">
          <h2 className="children-heading-same">COLORFUL KNITWEAR SERIES</h2>
          </div>
          <div id="img-feauture2" className="col1-same">
        <h2 className="children-heading-same">TOP COLD SERIES</h2>
          </div>
        </div>
        <div id="feauture-col2" className="same-feauture-child">
         <h2 className="children-heading-same">JIWOO MADE SPECIAL SERIES</h2>
        </div>
        <div id="feauture-col3" className="same-feauture-child">
          <div id="img-feauture3" className="col1-same">
            <h2 className="children-heading-same">FRESHIDER TOP SERIES</h2>
          </div>
          <div id="img-feauture4" className="col1-same">
          <h2 className="children-heading-same">SWEET DRESSES SERIES</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
