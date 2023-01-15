import "../footer/footer.css";
import { useHistory } from "react-router-dom";

export default function Button() {
  let history = useHistory();
  const Inventory = () => {
    history.push("/modelsp/inventory-solarpanel-series");
  };
  return (
    <div
      class="mainDiv"
      style={{
        position: "relative",
        float: "left",
        bottom: "-250px",
        color: "white",
        fontSize: "18px"
      }}
    >
      <div class="upperDiv">
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <h2 style={{ margin: "18px 40%" }}>💥</h2>
          <p style={{ margin: "-15px" }}>Convert Sunlight</p>
          <p style={{ margin: "15px auto" }}>to Energy</p>
        </div>
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <h2 style={{ margin: "18px 40%" }}>$</h2>
          <p style={{ margin: "-15px" }}>Guaranteed Lowest</p>
          <p style={{ margin: "15px auto" }}>Price for Solar</p>
        </div>
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <h2>24/7</h2>
          <p style={{ margin: "-15px" }}>Energy Monitoring</p>
        </div>
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <button
            onClick={Inventory}
            style={{
              width: "200px",
              padding: "12px",
              margin: "20px",
              backgroundColor: "rgba(175, 175, 175, 0.1)",
              border: "4px solid white",
              color: "white",
              fontSize: "large"
            }}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
