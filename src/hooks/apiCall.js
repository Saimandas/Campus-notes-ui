import { useEffect, useState } from "react";

 function useGetData(api,methood="get"){
      const [data, setdata] = useState("");
      const [isLoading, setisLoading] = useState(false);
      const [error, seterror] = useState("");

      if (methood=="get") {
        useEffect(()=>{
            fetch(api).then((e)=>e.json()).then((e)=>setdata(e.count)).catch(seterror("something went wrong"))
          },[api])
      } else if(methood=="post"){
        useEffect(()=>{
            fetch(api,{method:"POST"}).then((e)=>e.json).then((e)=>setdata(e)).catch((e)=>seterror(e.json))
          },[api])
      }

      return [data,error,isLoading]
}
export {useGetData}