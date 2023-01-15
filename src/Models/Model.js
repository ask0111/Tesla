import Styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function Model(val) {
  var locate = useLocation();
  let a = locate.pathname === "/model3" || locate.pathname === "/solarroof";
  let Model = Styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 80px auto;
  `;

  let ModelBox = Styled.div`
      display: block;
      text-align: center;
      margin: auto;
      line-height: 8px;
      font-size: 26px;
      color: "white";
  `;

  var sty = {
    color: a ? "white" : "black",
    textDecoration: "underline"
  };

  return (
    <Model>
      <ModelBox>
        <h1>{val.Name.Name}</h1>
        <a href="/" style={sty}>
          {val.Name.dis}
        </a>
      </ModelBox>
    </Model>
  );
}
