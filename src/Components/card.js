import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
//   console.log(props.cardTitle);
//   console.log(props.cardText1);
//   console.log(props.cardText2);
//   console.log(props.image);
  return (
    <div className="card w-100">
      <img src={props.image} className="card-img-top" alt="..." width={300} height={250} />

      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText1}
        </p>
        <p className="card-text">
          <small className="text-muted">{props.cardText2}</small>
        </p>
      </div>
    </div>
  );
};
Card.defaultProps = {
  cardTitle: "Super Lig Takimi",
  cardText1:"Anadolu takımı",
};

Card.propTypes = {
  cardText1: PropTypes.string.isRequired,
};

