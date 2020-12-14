import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import moment from "moment";

export const DishDetail = ({ dish }) => {
  const displayComments = dish.comments.map((comentario) => {
   
    return (
      <li>
        <p>{comentario.comment}</p>
        <p>
          -- {comentario.author}, {moment(comentario.date).format("MMM Do YY")}
        </p>
      </li>
    );
  });
  return (
    <>
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul class="list-unstyled">{displayComments}</ul>
      </div>
    </>
  );
};
