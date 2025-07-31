import React,{useState} from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Summary from "./components/Summary";



const App = ()=>{
  const coins = [
  { name: 'Gold', price: 6000 },
  { name: 'Silver', price: 750 },
  { name: 'Bronze', price: 100 },
  { name: 'Platinum', price: 5000 },
  { name: 'Titanium', price: 3000 }
];
  const[all,setAll] = useState([])
  return(
    <Routes>
      <Route path="/" element={<Home setAll={setAll}/>}></Route>
      <Route path="/summary" element={<Summary all={all} coins = {coins} />}></Route>
    </Routes>
  )
}

export default App