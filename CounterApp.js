import './CounterApp.css'; 
import { useState} from "react";

const CounterApp=() => {
    const [count,setCount]=useState(0);
    // const [backgroundColor,setBackgroundColor]=useState(true);
    // const bgColor=backgroundColor
//     setCount(count+1)
// 
    const onIncrement=()=>{
        setCount(count+1)
    }
    const onDecrement=()=>{
        setCount(count-1)
    }
    const onReset=()=>{
        setCount(0)
    }
    if (count<0){
        console.log(count);
        setCount(0);
    }
    let bg="";
    if(count===5){
       bg="bg";
    }
    let bg1="";
    if(count===5){
        bg1="bg1";
}
    //lis
    //ternary operator:condition? 1:2;
    //bg1 = count >=5 ? "bg1": "";

    //ampersand operator (&&)   only for single condition->we can use
    //bg1=count >=5 &&"bg1";
    //bg1=count <5 && "bg2";
return(
    <div className={bg1}>
        <h1 className={bg}>
            {count}
        </h1>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onReset}>Reset</button>
    </div>
)
}
export default CounterApp;