import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Cards";

function App() {
  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  //onchange handler
  const onChageHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "roll") {
      setRoll(value);
    } else if (name == "name") {
      setName(value);
    }
  };

  // submit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();

    setData([...data, { rollValue: roll, nameValue: name }]);
    setRoll("");
    setName("");
  };

  const deleteHandler = (index) => {
    const filteredData = data.filter((el, i) => i !== index);
    setData(filteredData);
  };

  console.log("before return", data);
  return (
    <>
      <div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <label htmlFor="roll">Roll no :</label>
        <input
          type="number"
          name="roll"
          onChange={onChageHandler}
          value={roll}
      
          required
        />
       
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={onChageHandler}
          value={name}
         
          required
        />
       
        <button className="submitBtn" type="submit">Add</button>
      </form>
      <div className="d-flex">
        {data.map((el, i) => (
          <Cards
            key={i + 1}
            el={el}
            deleteHandler={deleteHandler}
            index={i}
            data={data}
          />
        ))}
      </div>
      </div>
    </>
  );
}

export default App;
