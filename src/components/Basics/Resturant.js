import React, {useState} from 'react';
import './style.css';
import Menu from '../menuApi';
import MenuCard from './MenuCard';
import Navbar from '../Navbar';
  

//spread operator
const uniqeList = [
  ...new Set(
    Menu.map((curElem) => {
    return curElem.category;
  })
  ),
  "All",
];
console.log(uniqeList);

const Resturant = (category) => {

const [menuData, setMenuData] = useState(Menu);
const [menuList, setMenuList] = useState(uniqeList);

const filterItem = (category) => {

if(category === "All") {
  setMenuData(Menu);
  return;
}


const updatedList = Menu.filter((curElem) => {
  return curElem.category === category;
});

setMenuData(updatedList);
}

  return (
 <>
 {/* passing props */}
<Navbar filterItem ={filterItem} menuList ={menuList} />
<MenuCard menuData={menuData} />

 </>
  )
}

export default Resturant;