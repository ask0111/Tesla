// import { useState } from "react";
import Button from "./buttonsr";
import Navbar from "../hadder/navbar";
import Model from "../Models/Model";
export default function SRhome() {
  let Float = {
    position: "fixed",
    width: "100%",
    padding: "0",
    margin: "0",
    color: "white"
  };

  return (
    <>
      <div style={Float}>
        <Navbar />
        <Model
          Name={{
            Name: "Solar Roof",
            dis: "Transform your roof and produce clean energy"
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
        style={{
          width: "100%",
          height: "100vh",
          margin: "-12px"
        }}
        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/cfcf3747-c7d7-488d-896d-7c9462e50ca5/bvlatuR/std/2880x1800/Solar-Roof-Hero-Desktop-Global?quality=auto-medium&format=auto"
        alt=""
      />
    </>
  );
}
