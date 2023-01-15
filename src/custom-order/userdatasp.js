import Navbar from "../account/loginnav";
import { Link, useHistory } from "react-router-dom";

import "./customapi.css";
export default function UserDataSR() {
  let history = useHistory();
  const Submit = (event) => {
    event.preventDefault();
    history.push("/card-payment");
  };
  return (
    <>
      <Navbar />
      <div className="solar-roof-main">
        <div className="solar-roof-main1">
          <img src="https://cdn.motor1.com/images/mgl/weMzo/s3/tesla-solar-roof.webp" />
        </div>
        <div className="solar-roof-main2">
          <p>
            <h2> Clean Power, Outage Protection</h2>
          </p>
          <form style={{ width: "80%" }} onSubmit={Submit}>
            <label>Home Address</label>
            <input type="text" />
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
