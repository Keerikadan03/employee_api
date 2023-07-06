import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((result) => setData(result.data.memes));
  }, []);

  const info = data
    .filter((employee) =>
      employee.name.toLowerCase().includes(input.toLowerCase())
    )
    .map((employee, index) => (
      <div key={index}>{input != data.find ? employee.height : ""}</div>
    ));

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <form>
        {" "}
        Enter your Search:
        <input type="text" onChange={handleChange}></input>
      </form>
      <div className="suggestions-div">{info}</div>
    </div>
  );
}
