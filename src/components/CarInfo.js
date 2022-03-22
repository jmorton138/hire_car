import React from "react";

export const CarInfo = (props) => {
  console.log(props.id.id);
  return (
    <div>
      <div>Make: {props.cars[props.id.id].make}</div>
      <div>Model: {props.cars[props.id.id].model}</div>
      <div>Number of doors: {props.cars[props.id.id].num_doors}</div>
      <div>Number of seats: {props.cars[props.id.id].num_seats}</div>
      <div>Colour: {props.cars[props.id.id].colour}</div>
      <div>Price: {props.cars[props.id.id].price} per day</div>
    </div>
  );
};
