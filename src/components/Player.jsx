import { useState, useRef } from "react";

export default function Player() {
  const inputRef = useRef();
  const [name, setName] = useState();

  const handleSetName = () => {
    setName(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : 'unknown entity'},</h2>
      <p>
        <input type="text" ref={inputRef} value={name}/>
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
