import { React } from "react";
import { useState } from "react";

export const Form = (props) => {
  return (
    <div>
      <form className="car-hire-form" onSubmit={props.handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name"></input>
        <label htmlFor="email-address">Email</label>
        <input type="email" name="email-address"></input>
        <label htmlFor="phone-num">Mobile:</label>
        <input type="tel" name="phone-num"></input>
        <label htmlFor="start">Begin car hire</label>
        <input type="date" name="start"></input>
        <label htmlFor="end">End car hire</label>
        <input type="date" name="end"></input>
        <label htmlFor="cars">Choose a car:</label>
        <select name="cars">
          <option value="audi">Audi</option>
        </select>
        <input type="submit"></input>
      </form>
    </div>
  );
};
