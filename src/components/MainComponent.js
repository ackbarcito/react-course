import React, { useState } from "react";
import {Navbar, NavbarBrand} from 'reactstrap'
import {Menu} from './MenuComponent'
import {DishDetail} from './DishdetailComponent'
import { DISHES } from '../shared/dishes'


function Main() {
  const dishes = DISHES;
  let [selectedDish, setSelectedDish] = useState(null);
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} onClick={(dishId)=>setSelectedDish(dishId)}/>
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]}/>
    </div>
  );
}

export default Main;
