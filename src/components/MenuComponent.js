import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

export const Menu = function ({dishes}) {
  let [selectedDish, setSelectedDish] = useState(null);
  const renderDish = (dish)=>{
    if(dish != null){
      return(
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
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
            <CardTitle>{dish.name}</CardTitle>            
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


