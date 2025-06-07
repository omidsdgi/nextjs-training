import {useEffect} from "react";

interface Props {
    onClick: ()=>void;
    isOverflowHidden?: boolean;
}

export function useOverlay({onClick,isOverflowHidden=false}:Props) {
    useEffect(() => {
        const clickHandler=()=> {
          onClick()
        }
        document.addEventListener('click',(clickHandler))
        return ()=>{
            document.removeEventListener('click',(clickHandler))
        }
    }, []);

useEffect(()=>{
    if(isOverflowHidden) {
        document.body.style.overflowY = "hidden";
    }else {
        document.body.style.overflowY = "auto";
    }
    return ()=>{
        document.body.style.overflowY = "auto";
    }
},[isOverflowHidden])
}