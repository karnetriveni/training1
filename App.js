// import logo from './logo.svg';
// import './App.css';
import Anurag from './Anurag';
import CounterApp from './CounterApp';
function App() {
  return(
    <div>
      <div><h1>Triveni</h1></div>
      <div className="App">
        <Anurag name="Anurag" city="Hyderabad"/>
        <Anurag name="CBIT" city="Kodad"/>
        <Anurag name="SBIT" city="Vijayawada"/>
        <Anurag name="KITS" city="Warangal"/>
      <h1>Auditorium C1</h1> 
      <CounterApp/>
    </div>
   </div>
  );
}

export default App;
