import {useState} from "react";

export  function useDebounce(func:Function,delay:number) {
    const [timer, setTimer] = useState<number>()

    return function(){
        clearTimeout(timer)
        let timerTimeOut=setTimeout(func,1000)
        setTimer(timerTimeOut)
    }
}