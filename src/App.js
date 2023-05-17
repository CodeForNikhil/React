import logo from './logo.svg';
import './App.css';
import Item from './Components/Item.js';
import Factorial from './Components/Factorial';
import Case from './Components/UpperLowerTitle';

function App() {
  return ( 
  <div>
    <Item name = "Nikhil"> hi my name is :</Item>
    <Case></Case>
    <Factorial num1={4}></Factorial>
    <Factorial num1={9}></Factorial>
    <div className="App">
     Hello Nikhil
    </div>
    </div>
  );
}

export default App;
