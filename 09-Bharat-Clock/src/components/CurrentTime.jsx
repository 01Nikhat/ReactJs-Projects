import { useEffect, useState } from "react";

let CurrentTime = ()=>{
 const [ time, setTime] = useState(new Date());

 useEffect(()=>{
  //console.log(" interval setup ");
  const intervalId = setInterval(()=>{
    setTime(new Date());
   },1000);
   return () =>{
    clearInterval(intervalId);
    //console.log("cancel the interval");
    
   }
 },[])

  //let time = new Date();
  return (
  <p>This is the Current time:{time.toLocaleDateString()}-
  {""}{time.toLocaleTimeString()}</p>);
};
export default CurrentTime;