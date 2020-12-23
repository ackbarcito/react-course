import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";


export const Menu = function ({dishes, onClick}) {
    
  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={()=> onClick(dish.id)}>          
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
    </div>
  );
};


