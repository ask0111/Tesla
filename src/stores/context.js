import { createContext, useCallback, useEffect, useState } from "react";
const AuthContext = createContext();

export default function Context(props) {
    const [usersDatas, setUsersdata] = useState();
    function DataTransfer(){
        fetch('http://localhost:3000/posts').then((res)=> res.json()).then((data)=> setUsersdata(data));
    }
    useEffect(()=>{
        DataTransfer();
    },[])
  return (
    <>
      <AuthContext.Provider value={usersDatas}>{props.children}</AuthContext.Provider>
    </>
  );
}

export { AuthContext };
