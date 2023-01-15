// import { useState } from "react";
import Button from "./buttony";
import Navbar from "../hadder/navbar";
import Model from "../Models/Model";
import { useHistory } from "react-router-dom";

export default function Ycar() {
  let history = useHistory();
  const inventory = () => {
    history.push("/model3/inventory-y-series");
  };
  let Float = {
    position: "fixed",
    width: "100%",
    padding: "0",
    margin: "0"
  };

  return (
    <>
      <div style={Float}>
        <Navbar />
        <Model Name={{ Name: "Model Y", dis: "Plaid" }} />
        <Button
          onClick={inventory}
          style={{
            color: "black",
            position: "relative",
            Float: "left",
            bottom: "20px"
          }}
        />
      </div>
      <img
        style={{ width: "101%", height: "100vh", margin: "-12px" }}
        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/91abd4c7-32a1-41cc-ade5-b64774dbea61/bvlatuR/std/2880x1800/Model-Y-Main-Hero-Desktop-Global?quality=auto-medium&amp;format=auto"
        alt=""
      />
    </>
  );
}
