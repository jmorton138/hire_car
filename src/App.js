import "./App.css";
import { Form } from "./components/Form";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
  };
  return (
    <div className="App">
      <Form handleSubmit={handleSubmit}></Form>
    </div>
  );
}

export default App;
