import BANNER from "@/components/banner";
import CONTACT from "@/components/contact";
import FEATURES from "@/components/feature";
import Footer from "@/components/footer";
import HOME from "@/components/home";
import NAV from "@/components/nav";
import NEW_PRODUCT from "@/components/newproduct";
import SELLER from "@/components/seller";


export default function Home() {
  return (
  <div>
   <title>Hamza Wear</title>
    <NAV/>
    <HOME/>
    <NEW_PRODUCT/>
    <SELLER/>
    <BANNER/>
    <FEATURES/>
    <CONTACT/>
    <br />
    <Footer/>
  </div>
  );
}
