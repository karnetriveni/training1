// import logo from './logo.svg';
// // import './App.css';
// import Anurag from './Anurag';
// import CounterApp from './CounterApp';
// import "./Fairneft"
// import Fairneft from './Fairneft';
import Header from "./Header"
import{Route,Routes} from "react-router-dom";
import Home from "./assets/Home";
import AboutUs from "./assets/AboutUs";
import Products from "./assets/Products";
import Contact from "./assets/Contact";
import FAQ from "./assets/FAQ";
import CIBIL from "./assets/CIBIL";
import Loan from "./assets/Loan";
function App() {
  return (
    <div className="App">
      <Header/>
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about us' element={<AboutUs/>}/>
             <Route path='/products' element={<Products/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/faq' element={<FAQ/>}/>
             <Route path='/cibil score' element={<CIBIL Score/>}/>
             <Route path='/loan eligibility' element={<Loan Eligibility/>}/>
           </Routes>
      {/* <div><h1>Triveni</h1></div>
      <div className="App">
        <Anurag name="Anurag" city="Kodad"/>
        <Anurag name="Anurag" city="Kodad"/>
        <Anurag name="Anurag" city="Kodad"/>
      <h1>Auditorium</h1>   */}
      {/* <CounterApp/> */}
       {/* <Anurag/> */}
       {/* <FairNeft/> */}
    </div>
  );
}

export default App;     
    // </div>
    // App"
    //     <Anurag name="CBIT"<div>
    //   <div><h1>Triveni</h1></div>
    //   <div className=" city="Hyderabad"/>
    //     <Anurag nAame="SBIT" city="Kodad"/>
    //     <Anurag name="KITS" city="Warangal"/>
    //     <h1>Auditorium</h1>
    //     <CounterApp/>
    //   {/* <Anurag/> */}
    // <div><Fairneft/>
    // //   </div>
    //   </div>
//   )
// }
// export default App;
