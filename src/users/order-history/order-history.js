import Navbar from "../../hadder/navbar";
import "../dashboard/dashboard";
import { Link } from "react-router-dom";
import Foot from "../../account/foot";
import Userboard from "../dashboard/userbord";
import { useState } from "react";

export default function Orderhistory() {
  const [car, setCar] = useState([]);

  fetch('http://localhost:3000/user', 
     {
       method: 'GET',
       headers: {'Content-type': 'application/json'}, 
     }
   ).then((res)=> res.json()).then((data)=>{setCar(data)});
   
 

  return (
    <>
      <Navbar />
      <div className="dasmain">
        <Userboard />
        <div className="dassubmain">
          <h1 style={{ margin: "15px" }}>Order History</h1>
          <div className="dassubmain2">
            <div className="dasimgparts">
              <div className="dasimgpart">
                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2051e51c-9fe1-4713-b0e4-e7a5e982b6b3/xuauwe/std/500x500/mens_plaid_tee_transparent" />
              </div>
              <div>
                <p>View all shop transactions</p>
                <Link>View</Link>
              </div>
            </div>
            {car.map((data)=> <div className="dasimgparts">
              <div className="dasimgpart">
                <img src={data.image} />
              </div>
              <div>
                <h2>{data.model}</h2>
                <h4>{data.content}</h4>
                <Link><h3>{data.price}</h3></Link>
              </div>
            </div>)}
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}
