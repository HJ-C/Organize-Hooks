// useReduce 사용
import {useReducer, useState} from 'react'

// function Counter(){ 
//     const [number, setNumber] = useState(0)
//     const onIncrease = ()=>{
//         setNumber(pre => pre+1)
//     }
//     const onDecrease = ()=> {
//         setNumber(pre => pre-1)
//     }

//     return(
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>증가</button>
//             <button onClick={onDecrease}>감소</button>
//         </div>
//     )
// }

function Reducer(state, action) {
    switch(action.type) {
        case '증가' :
            return state+1;
        case '감소' : 
            return state-1;
        default : 
        return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(Reducer, 2)

    const onIncrease =  ()=> { 
        dispatch({type : '증가'})
    }

    const onDecrease =  ()=> { 
        dispatch({type : '감소'})
    }

    return (
        <div>
            <p>{number}</p>
            <button onClick={onIncrease}> 증가</button>
            <button onClick={onDecrease}> 감소 </button>
        </div>
    )
}


export default Counter

// useReduce는 다양한 컴포넌트 상황에 따라 다양한 상태를, 다른 값으로 업데이트해주고 싶을때 사용
// useState업그레이드 버전이라 생각하자
// reduce는 기본저긍로 현재상태와 액션(업데이트를 위해 필요한 정보를 담은것) 객체를 파라미터로 받아오고
// 새로운 파라미터를 리턴해주는 함수이다.