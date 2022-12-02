import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import BobaItem from "./components/BobaItem";
import Cart from "./components/Cart";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import SortingNavBar from './components/SortingNavBar';

function App() {
  const bobaData = [
    { name: "taro milk tea", type: "milk tea", image: "images/taro.jpeg", price: "4.99", amount: "1", type2: "4-5",  favorited: "false"},
    { name: "milk tea", type: "milk tea", image: "images/milk tea.jpeg", price: "3.96", amount: "1", type2: "<4", favorited: "false" },
    { name: "thai milk tea", type: "milk tea", image: "images/thai milk tea.jpeg", price: "5.98", amount: "1", type2:">5", favorited: "false" },
    { name: "matcha milk tea", type: "milk tea", image: "images/matcha.png", price: "5.95", amount: "1", type2:">5", favorited: "false" },
    { name: "mango fruit tea", type: "fruit tea", image: "images/mango tea.png", price: "3.94", amount: "1", type2: "<4", favorited: "false" },
    { name: "passionfruit tea", type: "fruit tea", image: "images/passion fruit tea.png", price: "4.95", amount: "1",type2:"4-5", favorited: "false" },
    { name: "peach fruit tea", type: "fruit tea", image: "images/peach fruit tea.png", price: "3.98", amount: "1",type2:"<4", favorited: "false" },
    { name: "lychee fruit tea", type: "fruit tea", image: "images/lychee tea.png", price: "5.99", amount: "1",type2:">5", favorited: "false" },
    { name: "mango slush", type: "slush", image: "images/mango slush.jpeg", price: "5.99", amount: "1",type2:">5", favorited:"false" },
    { name: "lychee slush", type: "slush", image: "images/lychee slush.png", price: "5.97", amount: "1",type2:">5", favorited:"false" },
    { name: "taro slush", type: "slush", image: "images/taro slush.png", price: "4.98", amount: "1",type2:"4-5", favorited:"false" },
    { name: "strawberry slush", type: "slush", image: "images/strawberry slush.jpg", price: "5.99", amount: "1",type2:">5", favorited:"false" },
  ];

  const [type, setType] = useState("All");
  const [type2, setType2] = useState("All");
  const [sorted, setSorted] = useState(false);
  const [favoritedList, setFavoritedList]  = useState([])
  const [favoritedNamesList, setFavoritedNamesList] = useState([])

  const handleClick = (item) => {
      if(favoritedNamesList.indexOf(item.name) ==-1 ){
        const newFavoritedList = [...favoritedList, item] 
        const newFavoritedNamesList = [...favoritedNamesList, item.name] 
        setFavoritedList(newFavoritedList);
        setFavoritedNamesList(newFavoritedNamesList);
      }

    
  };


  const selectFilter1Type = eventKey => {
    setType(eventKey);
  };

  const selectFilter2Type = eventKey => {
    setType2(eventKey);
  };


  const matchesDrinkTypeFilter = item => {
    // all items should be shown when no filter is selected
    if(type === "All") { 
      return true
    } else if (type === item.type) {
      return true
    } else {
      return false
    }
  }

  const matchesPriceFilter = item => {
    if(type2 === "All") { 
      return true
    } else if (type2 === "<4") {
      return item.price < 4
    } else if (type2 === "4-5") {
      return item.price >= 4 && item.price < 5
    } else if (type2 === ">5") {
      return item.price >=5
    } else {
      return false
    }
  }
  


  const filteredData = bobaData.filter(matchesDrinkTypeFilter).filter(matchesPriceFilter)

  const sortedArray = filteredData.sort((boba1, boba2) => {
      if(sorted) {
        return boba1.price - boba2.price;
      }
      return -1
  })

  const selectIfSorted = () => {
      console.log("sorted", sorted)
      setSorted(!sorted);
    };
    
  return (
    <div className="App">
      <h1>My Boba Shop</h1> {/* TODO: personalize your bakery (if you want) */}
      <section>
 
          {filteredData.map((item, index) => ( 
          <BobaItem key = {item.index} item = {item} handleClick = {handleClick}></BobaItem>))}


      </section>
      <div class = "nav">
        <SortingNavBar selectFilter1Type = {selectFilter1Type} selectFilter2Type = {selectFilter2Type} selectIfSorted = {selectIfSorted}></SortingNavBar>
      </div>
      <div>
        <h2>Favorites</h2>
        <Cart cart={favoritedList} setCart={setFavoritedList}  favoritedNamesList = {favoritedNamesList} setFavoritedNamesList = {setFavoritedNamesList}></Cart>
      </div>
    </div>
  );
}

export default App;
