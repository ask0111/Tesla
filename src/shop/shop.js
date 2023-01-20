
import { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../hadder/navbar";
import "../custom-order/custom-api";
import { AuthContext } from "../stores/context";

const AuthContext1 = createContext();

function Context1(props) {    
    var car = JSON.parse(localStorage.getItem('car'));
    // console.log(car,'local storage get')
  return (
    <>
      <AuthContext1.Provider value={car}>{props.children}</AuthContext1.Provider>
    </>
  );
}


export { AuthContext1 };
export { Context1 };


export default function Shop(a) {
  let history = useHistory();
  let userData = useContext(AuthContext);
  const [carData, setCarData] = useState("ascending");
  const [useris, setIs] = useState(false);
  // console.log(a.a, a.b, a.c, a.d)
  let api = [...a.a, ...a.b, ...a.c, ...a.d];
 

  const sortMethods = {
    ascending: { method: (a, b) => (b.p > a.p ? -1 : 1) },
    descending: { method: (a, b) => (a.p > b.p ? -1 : 1) }
  };
  let selectChange = (event) => {
    setCarData(event.target.value);
  };


  const cardetail = (data)=>{
    var b=0;
    var userArr = Object.values(userData == null ? {} : userData);
    userArr?.map((data)=>{
      if(data.login){
        setIs(true);
        history.push("/card-payment");
      }else{
        b++;
      }
    })
    
      if(b && b == userArr.length){
        alert('Login..');
        history.push("/signin");
      }
    localStorage.setItem('car', JSON.stringify(data))
    
  }


  // console.log(carData);
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
          {api.sort(sortMethods[carData].method).map((data, i) => {
            return (
              <div key={i} className="carbox">
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
                    cardetail(data);
                    window.location.reload();
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


























// import Navbar from "../account/loginnav";
// // import "./dashboard.css";
// import { Link } from "react-router-dom";
// // import Foot from "../../account/foot";
// // import Userboard from "./userbord";

// export default function Dashboard() {
//   const Reload = () => {
//     window.location.reload();
//   };
//   return (
//     <>
//       <Navbar />
//       <div
//         style={{
//           width: "100%",
//           marginTop: "15%",
//           textAlign: "center",
//           color: "red",
//           alignItems: "center"
//         }}
//       >
//         <h1>Data Lose.....</h1>
//         <button onClick={Reload}>Reload</button>
//       </div>
//     </>
//   );
// }
