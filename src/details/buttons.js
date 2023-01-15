import "../footer/footer.css";
import { useHistory } from "react-router-dom";
export default function Button() {
  let history = useHistory();
  const Inventory = () => {
    history.push("/models/inventory-s-series");
  };
  return (
    <div
      class="mainDiv"
      style={{
        position: "relative",
        float: "left",
        bottom: "-280px",
        color: "white"
      }}
    >
      <div class="upperDiv">
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <h2>396 mi</h2>
          <p style={{ margin: "-15px" }}>Range (EPA est.)</p>
        </div>
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <h2>199s</h2>
          <p style={{ margin: "-15px" }}>0-60 mph*</p>
        </div>
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <h2>200 mph</h2>
          <p style={{ margin: "-15px auto" }}>Top Speed†</p>
        </div>
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <h2>1,020 hp</h2>
          <p style={{ margin: "-15px auto" }}>Peak Power</p>
        </div>
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <button
            onClick={Inventory}
            style={{
              width: "200px",
              padding: "12px",
              margin: "20px",
              // color: "white",
              backgroundColor: "rgba(175, 175, 175, 0.1)",
              border: "4px solid white",
              color: "white",
              fontSize: "large"
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
