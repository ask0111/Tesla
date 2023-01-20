import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../stores/context";
import { useContext, useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const [isUser, setIsuser] = useState({is: false, name: 'None'});
  const user = useContext(AuthContext);
  const userl = Object.values(user == null ? {} : user);

  let deco = {
    color: "black",
    textDecorationLine: "none"
  };
  var locate = useLocation();
  // console.log(locate.pathname);

  if (locate.pathname === "/model3" || locate.pathname === "/solarroof") {
    deco.color = "white";
  }

  useEffect(()=>{
    
    userl?.map((data)=>{
      if(data.login){
        setIsuser({is: true, name: data.name[0] +" "+ data.surname[0]});
      }
    })
  },[])
  
  return (
    <div className="main-boxs">
      <div className="main-box">
        <Link to="/" style={deco}>
          <svg
            class=""
            style={{ width: "110px" }}
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="main-box">
        <div>
          <Link to="/models" style={deco}>
            <b>Model S</b>{" "}
          </Link>
        </div>
        <div>
          <Link to="/model3" style={deco}>
            <b>Model 3</b>
          </Link>
        </div>
        <div>
          <Link to="/modelx" style={deco}>
            <b>Model X</b>
          </Link>
        </div>
        <div>
          <Link to="/modely" style={deco}>
            <b>Model Y</b>
          </Link>
        </div>
        <div>
          <Link to="/solarroof" style={deco}>
            <b>Solar Roof</b>
          </Link>
        </div>
        <div>
          <Link to="/solarpanels" style={deco}>
            <b>Solar Panels</b>
          </Link>
        </div>
      </div>

      <div className="main-box">
        <div>
          <Link to="/shop" style={deco}>
            <b>Shop</b>
          </Link>
        </div>
        <div>
          <Link to="/signin" style={deco}>
            <b>Account</b>
          </Link>
        </div>
        <div>
          <Link to="/teslaaccount" style={deco}>
            {(isUser.is && <div style={{textAlign: 'center'}}> <b style={{width: '40px', height: '30px', borderRadius: '40%', border: '1px solid black', display: 'flex', backgroundColor: 'rgb(236, 206, 150)', justifyContent: 'center', alignItems: 'center', fontSize: '23px', color: 'black'}}>{isUser.name}</b></div>) || (<b>User</b>)}
            
          </Link>
        </div>
      </div>
    </div>
  );
}
// fontSize: '23px'