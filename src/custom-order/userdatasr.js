import Navbar from "../account/loginnav";
import { Link, useHistory } from "react-router-dom";
import "./customapi.css";
import { useState } from "react";



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
            <input onChange={(e)=> setHome({model: e.target.value, image: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/45992f1c-a33a-4a04-b1f0-338aff182f8e/bvlatuR/std/2880x1800/_25-Hero-D', price: '$ 49,34,001'})} type="text" />
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
