import Navbar from "../../hadder/navbar";
import "../dashboard/dashboard";
import { Link, useHistory } from "react-router-dom";
import Foot from "../../account/foot";
import Userboard from "../dashboard/userbord";

export default function Paymentmethord() {
  let history = useHistory();
  return (
    <>
      <Navbar />
      <div className="dasmain">
        <Userboard />
        <div className="dassubmain">
          <h1 style={{ margin: "15px" }}>Payment Methord</h1>
          <div className="dassubmain2">
            <div className="dasimgparts">
              <div className="dasimgpart">
                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/bb0d2e9a-ada7-401f-bd47-daeff3fd033d/o0vzns/std/0x0/charging-supercharger" />
              </div>
              <div>
                <h3>Get Started</h3>
                <p>Set up simple and convenient charging</p>
                <button
                  onClick={() => history.push("/card-payment")}
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  Add Card
                </button>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "left" }}>
            Use Wallet in your Tesla app to add, remove and set a preferred
            payment method as default. Learn More Requires new app version 4.3.0
            and up.
          </p>
        </div>
      </div>
      <Foot />
    </>
  );
}
