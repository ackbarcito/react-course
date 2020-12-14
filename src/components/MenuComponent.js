import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import {DishDetail} from './DishdetailComponent'

export const Menu = function ({dishes}) {
  let [selectedDish, setSelectedDish] = useState(null);
  const renderDish = (dish)=>{
    if(dish != null){      
      return(
        <DishDetail dish={dish}/>
      )
    }
    else{
      return(
        <div></div>
      );
    }
  }
  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={()=>setSelectedDish(dish)}>          
          <CardImg width="100%" src={dish.image} alt={dish.name}/>          
          <CardImgOverlay body className="ml-5">
            <CardTitle><strong>{dish.name}</strong></CardTitle>            
          </CardImgOverlay>
        </Card>
      </div>
    )
  });
  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
      <div className="row">
        {renderDish(selectedDish)}
      </div>
    </div>
  );
};


