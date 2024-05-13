import Header from "./components/Header/Header";
import Cleaning from "./components/Goods/Cleaning";
import ContentHome from "./components/ContentHome/ContentHome";
import HygieneCare from "./components/Goods/Hygiene_care";
import Recovery from "./components/Goods/Recovery";
import Texstil from "./components/Goods/Textil";
import Regulation from "./components/Goods/Regulation";
import Equipment from "./components/Goods/Equipment";
import Cosmetology from "./components/Goods/Cosmetology";
import CardDetails from "./components/Card/Card";
import Management from "./components/Managament/Managament";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Company from "./components/Company/Company";
import ContactMain from "./components/Contact/Contact-main";

function App() {  
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes><Route path='/home' element={<ContentHome/>} /></Routes>
        <div className="changeable_content">
          <Routes>
            <Route path='/product/:id' element={<CardDetails/>}/>
            <Route path='/cleaning' element={<Cleaning/>} />
            <Route path='/hygiene_care' element={<HygieneCare/>} />
            <Route path='/recovery' element={<Recovery/>} />
            <Route path='/texstil' element={<Texstil/>} />
            <Route path='/regulation' element={<Regulation/>} />
            <Route path='/equipment' element={<Equipment/>} />
            <Route path='/cosmetology' element={<Cosmetology/>} />
            <Route path='/management' element={<Management/>} />
            <Route path='/company' element={<Company/>} />
            <Route path="/contact" element={<ContactMain/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;