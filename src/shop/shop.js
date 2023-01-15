import Navbar from "../account/loginnav";
// import "./dashboard.css";
import { Link } from "react-router-dom";
// import Foot from "../../account/foot";
// import Userboard from "./userbord";

export default function Dashboard() {
  const Reload = () => {
    window.location.reload();
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100%",
          marginTop: "15%",
          textAlign: "center",
          color: "red",
          alignItems: "center"
        }}
      >
        <h1>Data Lose.....</h1>
        <button onClick={Reload}>Reload</button>
      </div>
    </>
  );
}
