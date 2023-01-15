// import { useState } from "react";
import Button from "./buttonsp";
import Navbar from "../hadder/navbar";
import Model from "../Models/Model";

export default function SRhome() {
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
        <Model
          Name={{
            Name: "Solar for Existing Roofs",
            dis: "Lowest Cost Solar Panels in America—Money-back guarantee"
          }}
        />
        <Button
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
        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/45992f1c-a33a-4a04-b1f0-338aff182f8e/bvlatuR/std/2880x1800/_25-Hero-D"
        alt=""
      />
    </>
  );
}
