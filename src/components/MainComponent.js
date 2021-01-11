import React from "react";
import { Home } from './HomeComponent'
import { Menu } from './MenuComponent'
import Contact from './ContactComponent'
import Header from './HeaderComponent'
import { Footer } from './FooterComponent'
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DishDetail } from "./DishdetailComponent";
import About from './AboutUsComponent'

function Main() {
  const dishes = DISHES;
  const comments = COMMENTS;
  const leaders = LEADERS;
  const promotions = PROMOTIONS;
  const HomePage = () => {
    return (
      <Home dish={dishes.filter((dish) => dish.featured)[0]}
        promotion={promotions.filter((promo) => promo.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]}
      />
    )
  }

  const DishWithId = ({ match }) => {
    return (
      <DishDetail dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
      />
    )
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId}></Route>
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/aboutus" component={() => <About leaders={LEADERS}/>} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
