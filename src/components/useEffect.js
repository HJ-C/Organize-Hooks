import { useState, useEffect } from "react";

function  Example(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    const handleCountUp = ()=> setCount(count+1)
    const handleChangeName = (e) => setName(e.target.vaule)

    useEffect( ()=> { 
        console.log('랜더링')
        console.log({count, name})
    },[name])

    return(
        <div>
            <p>카운트 : {count}</p>
            <button onClick={handleCountUp}> 카운트업</button>
            <p>이름 입력</p>
            <input type ={"text"} value={name} onChange={handleChangeName}></input>
        </div>
    )
}

export default Example