import React from "react";
import {Home} from './HomeComponent'
import {Menu} from './MenuComponent'
import {DishDetail} from './DishdetailComponent'
import Header from './HeaderComponent'
import {Footer} from './FooterComponent'
import { DISHES } from '../shared/dishes'
import {Switch, Route, Redirect} from 'react-router-dom'

function Main() {
  const dishes = DISHES;  
  const HomePage = ()=>{
    return(
      <Home/>
    )
  }
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={()=><Menu dishes={dishes}/>}/>
        <Redirect to="/home"/>
      </Switch>      
      <Footer/>
    </div>
  );
}

export default Main;
