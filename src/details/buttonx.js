import "../footer/footer.css";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../stores/context";
import { useContext } from "react";


export default function Button() {
  let history = useHistory();
  let userData = useContext(AuthContext);
  const Inventory = () => {
    var b=0;
    var userArr = Object.values(userData == null ? {} : userData);
    userArr.map((data)=>{
      if(data.login){
        b=1;
        history.push("/modelx/inventory-x-series");
      }
    })
    setTimeout(()=>{
      if(b==0){
      alert('Login..');
      history.push("/signin");
      }
    }, 3000)
  };
  
  
  return (
    <div
      class="mainDiv"
      style={{
        position: "relative",
        float: "left",
        bottom: "-250px",
        color: "white"
      }}
    >
      <div class="upperDiv">
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <h2>333 mi</h2>
          <p style={{ margin: "-15px" }}>Range (EPA est.)</p>
        </div>
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <h2>2.5 s</h2>
          <p style={{ margin: "-15px" }}>0-60 mph*</p>
        </div>
        <div class="lowerDiv" style={{ margin: "0 40px" }}>
          <h2>9.9 s</h2>
          <p style={{ margin: "-15px auto" }}>1/4 Mile</p>
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
