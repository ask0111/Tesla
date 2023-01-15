import { useEffect } from "react";
import Button from "./button3";
import Navbar from "../hadder/navbar";
import Model from "../Models/Model";
import { useHistory } from "react-router-dom";

export default function Tcar(props) {
  let history = useHistory();
  const inventory = () => {
    history.push("/model3/inventory");
  };
  let Float = {
    position: "fixed",
    width: "100%",
    padding: "0",
    margin: "0",
    color: "white"
  };

  return (
    <>
      {/* <Context Value={false} /> */}
      <div style={Float}>
        <Navbar />
        <Model Name={{ Name: "Model 3", dis: "Schedule a Test Drive" }} />
        <Button
          onClick={inventory}
          style={{
            color: "black",
            position: "relative",
            Float: "left",
            bottom: "0px"
          }}
        />
      </div>
      <img
        style={{ width: "101%", height: "100vh", margin: "-12px" }}
        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD"
        alt=""
      />
    </>
  );
}
