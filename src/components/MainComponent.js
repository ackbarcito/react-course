import React, { useState } from "react";
import {Menu} from './MenuComponent'
import {DishDetail} from './DishdetailComponent'
import {Header} from './HeaderComponent'
import {Footer} from './FooterComponent'
import { DISHES } from '../shared/dishes'


function Main() {
  const dishes = DISHES;
  let [selectedDish, setSelectedDish] = useState(null);
  return (
    <div>
      <Header/>
      <Menu dishes={dishes} onClick={(dishId)=>setSelectedDish(dishId)}/>
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]}/>
      <Footer/>
    </div>
  );
}

export default Main;
