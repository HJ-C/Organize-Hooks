import React from "react"
import { useMemo } from "react"

    const getNumber = (number) => {
        console.log('숫자가 변경되었습니다')
        return number
    }
    const getText = (text) => {
        console.log('숫자가 변경되었습니다')
        return text
    }

    const GetMemo = ({number, text} ) => {
        const showNumber = useMemo(()=>getNumber(number),[number])
        const showText = useMemo(()=>getText(text),[text])

        return (
            <div>
                {showNumber}
                {showText}
            </div>
        )
    }

export default GetMemo


// 메모이제이션(memoization) : 기존에 수행한 연산의 결과값을 어딘가에 저장해두고 동일한 입력이 들어오면 재활용하는 프로그래밍 기법

// useMemo : 메모이제이션된 '값'을 반환
// useCallback : 메모이제이션된 '함수'를 반환

// useMemo : useMemo( ()=> [deps] ) 에서 증가버튼을 누르면 전체 컴포넌트가 전부 재실행 되지만 [text]라는 값은 변하기 않았기 때문에 그대로이다.

