import { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../hadder/navbar";
import "./customapi.css";

export default function Customapi(props) {
  const [carData, setCarData] = useState("ascending");
  let api = props.props;
  let history = useHistory();

  const sortMethods = {
    ascending: { method: (a, b) => (b.p > a.p ? -1 : 1) },
    descending: { method: (a, b) => (a.p > b.p ? -1 : 1) }
  };
  let selectChange = (event) => {
    setCarData(event.target.value);
  };
  console.log(carData);
  return (
    <>
      <Navbar />
      <div className="hadder-inventory">
        <div className="inventory-part">
          <div>
            <h1>inventory</h1>
            <select onChange={selectChange}>
              <option value="ascending">Price: Low to High</option>
              <option value="descending">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="inventory-part1">
          {api.sort(sortMethods[carData].method).map((data) => {
            return (
              <div className="carbox">
                <div className="uppermodel">
                  <div className="modelbox">
                    <h2>{data.model}</h2>
                    <h3>{data.submodel}</h3>
                    <w>{data.content}</w>
                  </div>
                  <div className="ratebox">
                    <h2>{data.price}</h2>
                    <h3>{data.rate}</h3>
                  </div>
                </div>
                <div className="middelmodel">
                  <img src={data.image} />
                </div>
                <div className="lowermodel">
                  <div className="cardetail">
                    <h2>{data.detail[0][0]}</h2>
                    <w>{data.detail[0][1]}</w>
                  </div>
                  <div className="cardetail">
                    <h2>{data.detail[1][0]}</h2>
                    <w>{data.detail[1][1]}</w>
                  </div>
                  <div className="cardetail">
                    {" "}
                    <h2>{data.detail[2][0]}</h2>
                    <w>{data.detail[2][1]}</w>
                  </div>
                </div>
                <button
                  onClick={() => {
                    console.log(data);
                    history.push("/card-payment");
                  }}
                >
                  Add Card
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
