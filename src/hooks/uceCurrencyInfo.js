import { useState , useEffect } from "react";

const useCurrencyInfo=(currency)=>{
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=>response.json()).then((j)=>setData(j[currency]))
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;