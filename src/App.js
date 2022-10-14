import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from "../src/components/Slider.js"
import { data } from "../src/data/data.js"
import Offers from "../src/components/Offers.js";
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js"


function App() {
  let {banner, offer, starProduct, hotAccessories, hotAccessoriesCover } = data;
  return (
  
      <Router>
          <PreNavbar />
          <Navbar />
          <Slider start={banner.start} />
          <Offers  offer={offer} />
          <Heading text="START PRODUCTS" />
          <StarProduct starProduct={ starProduct }/>
          <Heading text="HOT ACCESSORIES" />
          <HotAccessoriesMenu />

        <Routes>
{/*          
          <Route exact path="/music">
          <HotAccessories music={hotAccessories.music} musicCover={hotAccessoriesCover.music}  />

          </Route>
           */}

          {/* <Route exact path="/smartDevice">
          <HotAccessories smartDevice={hotAccessories.smartDevice} smartDeviceCover={hotAccessoriesCover.smartDevice}  />
          </Route>

          <Route exact path="/home">
          <HotAccessories home={hotAccessories.home} homeCover={hotAccessoriesCover.home}  />
          </Route>

          <Route exact path="/lifestyle">
          <HotAccessories lifeStyle={hotAccessories.lifeStyle} lifeStyleCover={hotAccessoriesCover.lifeStyle}  />
          </Route>


          <Route exact path="/mobileAccessories">
          <HotAccessories mobileAccessories={hotAccessories.mobileAccessories} mobileAccessoriesCover={hotAccessoriesCover.mobileAccessories}  />
          </Route> */}

          
          </Routes>
      </Router>

      
  );
}

export default App;
