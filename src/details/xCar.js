// import { useState } from "react";
import Button from "./buttonx";
import Navbar from "../hadder/navbar";
import Model from "../Models/Model";
import { useHistory } from "react-router-dom";

export default function Scar() {
  let history = useHistory();
  const inventory = () => {
    history.push("/model3/inventory-x-series");
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
        <Model Name={{ Name: "Model X", dis: "Plaid" }} />
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
        style={{ width: "100%", height: "100vh", margin: "-12px" }}
        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8c26f779-11e5-4cfc-bd7c-dcd03b18ff88/bvlatuR/std/4096x2561/Model-X-Main-Hero-Desktop-LHD"
        alt=""
      />
    </>
  );
}
