import Navbar from "../../hadder/navbar";
import "./dashboard.css";
import { Link } from "react-router-dom";
import Foot from "../../account/foot";
import Userboard from "./userbord";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dasmain">
        <Userboard />
        <div className="dassubmain">
          <h1 style={{ margin: "15px" }}>Dashboard</h1>
          <div className="dassubmain2">
            <div className="dasimgparts">
              <div className="dasimgpart">
                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f7ede95a-84bc-436f-952a-8317732c0fdf/s24cey/std/636x300/solar-marketing_636x300" />
              </div>
              <div>
                <h3>Order Tesla Solar</h3>
                <p>Produce energy to power your Tesla life</p>
                <Link>View Solar</Link>
              </div>
            </div>
            <div className="dasimgparts">
              <div className="dasimgpart">
                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/19cd4858-858c-4e41-adcb-a7399da113a8/aaovse/std/636x300/dscf6059-4" />
              </div>
              <div>
                <h3>Reserve a Car</h3>
                <p>Browse our models</p>
                <Link>Shop Now</Link>
              </div>
            </div>
            <div className="dasimgparts">
              <div className="dasimgpart">
                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/73bbc04a-67ec-47f6-9e07-86183688bd46/jzqmrw/std/636x300/third-party-car_636x300" />
              </div>
              <div>
                <p>Purchased a car from a third party?</p>
                <Link>Add</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}
