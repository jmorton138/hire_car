import { React } from "react";
import { useState } from "react";
import { CarInfo } from "./CarInfo";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [rental, setRental] = useState("1");
  const [state, setState] = useState({ name, phone, start, end, rental });
  const [id, setId] = useState({ id: 0 });
  return (
    <div>
      <form
        className="car-hire-form"
        onSubmit={(e) => props.handleSubmit(e, state)}
      >
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          required="true"
          name="name"
          onChange={(e) => {
            setState({ ...state, name: e.target.value });
          }}
        ></input>
        <label htmlFor="email-address">Email</label>
        <input
          type="email"
          required="true"
          name="email-address"
          onChange={(e) => {
            setState({ ...state, email: e.target.value });
          }}
        ></input>
        <label htmlFor="phone-num">Mobile:</label>
        <input
          type="tel"
          name="phone-num"
          onChange={(e) => {
            setState({ ...state, phone: e.target.value });
          }}
        ></input>
        <label htmlFor="start">Begin car hire</label>
        <input
          type="date"
          required="true"
          name="start"
          onChange={(e) => {
            setState({ ...state, start: e.target.value });
          }}
        ></input>
        <label htmlFor="end">End car hire</label>
        <input
          type="date"
          required="true"
          name="end"
          onChange={(e) => {
            setState({ ...state, end: e.target.value });
          }}
        ></input>
        <label htmlFor="cars">Choose a car:</label>
        <select
          defaultValue="1"
          onChange={(e) => {
            setState({ ...state, rental: e.target.value });
            setId({ id: parseInt(e.target.value) - 1 });
          }}
        >
          {props.cars.map((car) => {
            return (
              <option value={car.id}>
                {car.make} {car.model}
              </option>
            );
          })}
        </select>
        <div className="car-info">
          <CarInfo cars={props.cars} id={id} />
        </div>
        <input type="submit"></input>
      </form>
    </div>
  );
};
