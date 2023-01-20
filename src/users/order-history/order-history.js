import Navbar from "../../hadder/navbar";
import "../dashboard/dashboard";
import { Link } from "react-router-dom";
import Foot from "../../account/foot";
import Userboard from "../dashboard/userbord";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../stores/context";

export default function Orderhistory() {
  const userData = useContext(AuthContext);
  const [car, setCar] = useState([]);

  function Userhistory(){
    // console.log(car, 'check')
    let userId = Object.keys(userData == null ? {} : userData);
    userId.map((id)=>{
      fetch(`https://tesla-e3c24-default-rtdb.firebaseio.com/userDetails/${id}.json`
    ).then((res)=> res.json()).then(user => {
      if(user.login){
  setTimeout(()=>{

        setCar(user.history);
      }, 2000)
      }
    });
    
  });
}
useEffect(()=>{
  Userhistory();

    // console.log(car, 'check1')
  
}, [])

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
            {  
            car.map((data, i)=> <div key={i} className="dasimgparts">
                <p style={{textAlign: 'center', color: 'gray'}}>{"Ordered No. " + (i+1)}</p>
              <div className="dasimgpart">
                <img src={data.image} />
              </div>
              <div>
                <h2>{data.model}</h2>
                <h4>{data.content}</h4>
                <Link><h3 style={{marginTop: '-20px'}}>{data.price}</h3></Link>
              </div>
            </div>)

            }
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}
