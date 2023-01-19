import Navbar from "../account/loginnav";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import "./customapi.css";
export default function UserDataSR() {
  const [home, setHome] = useState({name: ' ', image: ' '});
  let history = useHistory();

  const Submit = (event) => {
    
    event.preventDefault();
    localStorage.setItem('car', JSON.stringify(home))
    history.push("/card-payment");
    window.location.reload()
  };

  return (
    <>
      <Navbar />
      <div className="solar-roof-main">
        <div className="solar-roof-main1">
          <img src="https://cdn.motor1.com/images/mgl/weMzo/s3/tesla-solar-roof.webp" />
        </div>
        <div style={{width: '30%'}} className="solar-roof-main2">
          <p>
            <h2> Clean Power, Outage Protection</h2>
          </p>
          <form style={{ width: "80%" }} onSubmit={Submit}>
            <label>Home Address</label>
            <input onChange={(e)=> setHome({model: e.target.value, image: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/cfcf3747-c7d7-488d-896d-7c9462e50ca5/bvlatuR/std/2880x1800/Solar-Roof-Hero-Desktop-Global?quality=auto-medium&format=auto', price: '$ 63,32,760'})} type="text" />
            
            {/* <input  type="text" /> */}
            <p>
              <Link>My home is new or being built</Link>
            </p>
            <input
              type="submit"
              value="Next"
              style={{ backgroundColor: "blue", color: "white" }}
            />
          </form>
          <p>We won't spam you in any way</p>
        </div>
      </div>
    </>
  );
}
