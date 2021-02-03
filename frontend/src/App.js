
import './App.css';
import Header from './component/Header'
import Item from './component/Item.js'
import ModelS from '../src/assets/Desktop-ModelS.jpeg'
import ModelX from '../src/assets/Desktop-ModelX.jpeg'
import ModelY from '../src/assets/Desktop-ModelY.jpeg'
import SolarPanel from '../src/assets/Desktop-SolarPanels.jpeg'
import SolarRoof from '../src/assets/Desktop-SolarRoof.jpeg'
function App() {
  return (
    <div className="App">

    <Header/>
   <div className="app__itemscontainer">
   
   <div className="home__cont">
   <Item title="Model X" imgsrc={ModelX} desc=" Order Online for Touchless Delivery"
      descLink=""
    leftBtnTxt="ORDER NOW" 
    leftBtnLink="" 
    rightBtnTxt="LEARN MORE"
    rightBtnLink="" 
    twoButtons='true' 
    first
   />
   <Item title="Model Y"imgsrc={ModelY} 
    descLink=""
    leftBtnTxt="ORDER NOW" 
    leftBtnLink="" 
    rightBtnTxt="LEARN MORE"
    rightBtnLink="" 
    twoButtons='true' 
    
    />
   <Item title="Model S"imgsrc={ModelS}
     descLink=""
    leftBtnTxt="ORDER NOW" 
    leftBtnLink="" 
    rightBtnTxt="LEARN MORE"
    rightBtnLink="" 
    twoButtons='true'
   />
   <Item title="SOLAR PANEL"imgsrc={SolarPanel}
     descLink=""
    leftBtnTxt="ORDER NOW" 
    leftBtnLink="" 
    rightBtnTxt="LEARN MORE"
    rightBtnLink="" 
    twoButtons='true'
   />

   </div>
   <div className="home__footer"></div>

   </div>
    </div>
  );
}

export default App;
