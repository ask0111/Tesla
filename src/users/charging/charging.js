import Navbar from "../../hadder/navbar";
import "../dashboard/dashboard";
import { Link } from "react-router-dom";
import Foot from "../../account/foot";
import Userboard from "../dashboard/userbord";

export default function Charging() {
  return (
    <>
      <Navbar />
      <div className="dasmain">
        <Userboard />
        <div className="dassubmain">
          <h1 style={{ margin: " 15px 15px 0 15px" }}>Charging</h1>
          <Link style={{ margin: "0px 15px", color: "black" }}>
            Manage Payment
          </Link>

          <p style={{ textAlign: "left", margin: " 15px", color: "red" }}>
            * Charging sessions will appear here once they are available.
          </p>
        </div>
      </div>
      <Foot />
    </>
  );
}
