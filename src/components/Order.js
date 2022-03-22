import React from "react";

export const Order = (props) => {
  console.log(props);
  const id = props.order.rental - 1;
  return (
    <div className="completed-order">
      <h1>Order completed</h1>
      <h2>Your info:</h2>
      <div>Name: {props.order.name}</div>
      <div>Email: {props.order.email}</div>
      <div>Mobile: {props.order.prhone}</div>
      <h2>Hire care dates</h2>
      <div>Start: {props.order.start}</div>
      <div>End: {props.order.end}</div>
      <h2>Car Info:</h2>
      <div>Make: {props.cars[id].make}</div>
      <div>Model: {props.cars[id].model}</div>
      <div>Number of doors: {props.cars[id].num_doors}</div>
      <div>Number of seats: {props.cars[id].num_seats}</div>
      <div>Colour: {props.cars[id].colour}</div>
      <div>Price: {props.cars[id].price} per day</div>
    </div>
  );
};
