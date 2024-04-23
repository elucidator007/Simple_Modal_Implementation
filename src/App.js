import { useState } from "react";
import "./styles.css";
import { Button } from "../components/button";
import { Modal } from "../components/modal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div className="App">
      <h1>Basic Modal Code</h1>
      <h3>Enter some data below...</h3>
      <input type="text" onChange={handleInputChange} />
      <Button
        onOpen={() => {
          console.log();
          setIsOpen(true);
        }}
      />
      <Modal
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        modalData={inputData}
      />
    </div>
  );
}
