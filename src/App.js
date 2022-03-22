import "./App.css";
import { Form } from "./components/Form";
import { useState } from "react";
import { Order } from "./components/Order";

function App() {
  const cars = [
    {
      id: 1,
      make: "Ford",
      model: "Fiesta",
      num_doors: 3,
      num_seats: 5,
      colour: "silver",
      price: 60,
    },
    {
      id: 2,
      make: "VW",
      model: "Gold",
      num_doors: 5,
      num_seats: 5,
      colour: "red",
      price: 80,
    },
    {
      id: 3,
      make: "Audi",
      model: "Q3",
      num_doors: 5,
      num_seats: 5,
      colour: "white",
      price: 80,
    },
  ];

  const [order, setOrder] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e, obj) => {
    e.preventDefault();
    setOrder(obj);
    setSubmitted({ submitted: true });
  };
  console.log(order);
  let content;
  const isSubmitted = submitted;
  console.log(isSubmitted);

  if (isSubmitted) {
    content = <Order order={order} cars={cars} />;
  } else {
    content = <Form handleSubmit={handleSubmit} cars={cars}></Form>;
  }

  return <div className="App">{content}</div>;
}

export default App;
