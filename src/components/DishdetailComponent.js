import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export const DishDetail = ({ dish }) => {
  if (dish != null) {
    var displayComments = dish.comments.map((comment) => {
      return (
        <li>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </p>
        </li>
      );
    });
  } else return <div></div>;
  return (
    <div className="container">
      <div className="row">
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
      </div>
    </div>
  );
};
