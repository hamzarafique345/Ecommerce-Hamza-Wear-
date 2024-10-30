import Image from "next/image";
export default function HOME() {
  return (
    <div id="home-box1">
      <div id="home-w-1" className="home-div-same">
        <Image src="/model1.png" alt="img" className="img" width={1000} height={1000}/>
        <Image src="/model2.png" alt="img" className="img" width={1000} height={1000}/>
      </div>

      <div id="home-w-2" className="home-div-same">
       <h1 className="home-hdn-1">Refresh your style with our unique collection.</h1>
       <button id="home-btn" >Order Now</button>
      </div>

      <div id="home-w-3" className="home-div-same">
        
      <Image src="/model3.png" alt="img" className="img" width={1000} height={1000}/>
      <Image src="/model4.png" alt="img" className="img" width={1000} height={1000}/>

      </div>
    </div>
  );
}
