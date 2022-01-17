import { useState } from "react"
import GetMemo from "./GetUseMemo";


function Memo() {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");
  
    const increaseNumber = () => {
      setNumber((prevState) => prevState + 1);
    };
  
    const decreaseNumber = () => {
      setNumber((prevState) => prevState - 1);
    };
  
    const onChangeTextHandler=(e)=>{
      setText(e.target.value);
    }
  
    return (
      <div className="App">
        <div>
          <button onClick={increaseNumber}>+</button>
          <button onClick={decreaseNumber}>-</button>
          <input
            type="text"
            placeholder="Last Name"
            onChange={onChangeTextHandler}
          />
        </div>
        <GetMemo number={number} text={text} />
      </div>
    );
}

export default Memo