import Navbar from "../../hadder/navbar";
import "../dashboard/dashboard";
import { Link } from "react-router-dom";
import Foot from "../../account/foot";
import Userboard from "../dashboard/userbord";

export default function Lootbox() {
  return (
    <>
      <Navbar />
      <div className="dasmain">
        <Userboard />
        <div className="dassubmain">
          <h1 style={{ margin: "15px" }}>Loot Box</h1>
          <p style={{ textAlign: "left" }}>
            When friends and family order through your referral link, you will
            each earn Credits that can be redeemed for Tesla awards. View
            eligible products, track referrals, and redeem your Credits in the
            Loot Box section of the Tesla app.
          </p>
          <p style={{ textAlign: "left" }}>
            Your referral link will be available upon delivery of your car or
            installation of your solar system. <Link>Learn More</Link>
          </p>
        </div>
      </div>
      <Foot />
    </>
  );
}
