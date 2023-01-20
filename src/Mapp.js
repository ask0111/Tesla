import "./styles.css";
import Navbar from "./hadder/navbar";
import Model from "./Models/Model";
import Buttons from "./Button/Button";
import Sbutton from "./Button/singlebt";
import Footer from "./footer/footer";
import { useEffect, useState } from "react";
import state from "./stores/Store";

export default function Mapp() {
  let Float = {
    position: "fixed",
    width: "100%",
    padding: "0",
    margin: "0"
  };

  let imgArr = state();
  const [val, setval] = useState({
    Name: imgArr[Math.floor(window.scrollY / 780)].model,
    dis: imgArr[Math.floor(window.scrollY / 780)].text,
    bool: true
  });

  useEffect(() => {
    const handleScroll = (event) => {
      if (Math.floor(window.scrollY / 780) >= imgArr.length - 1) {
        setval({ Name: imgArr[imgArr.length - 1].model, bool: false });
      } else {
        // console.log(Math.floor(window.scrollY / 780), "kkk");
        setval({
          Name: imgArr[Math.floor(window.scrollY / 780)].model,
          dis: imgArr[Math.floor(window.scrollY / 780)].text,
          bool: true,
          jump: imgArr[Math.floor(window.scrollY / 780)].model
            .toLowerCase()
            .split(" ")
            .join("")
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   removeEventListener("scroll", handleScroll);
    // };
  });
  // console.log(val.jump, "lplp");
  return (
    <>
      <div style={Float}>
        <Navbar />
        <Model Name={val} />
        {(val.bool && <Buttons Name={val.jump} />) || (
          <Sbutton Name={val.jump} />
        )}
      </div>
      <div style={{ margin: "-9px", padding: "0px" }}>
        {imgArr.map((ele) => {
          return (
            <div>
              <img class="imgB" src={ele.img} alt="" />
            </div>
          );
        })}
      </div>
      <div style={{ position: "relative", bottom: "40px" }}>
        <Footer />
      </div>
    </>
  );
}

// import "./styles.css";
// import Navbar from "./hadder/navbar";
// import Model from "./Models/Model";
// import Buttons from "./Button/Button";
// import Sbutton from "./Button/singlebt";
// import Footer from "./footer/footer";
// import { useCallback, useEffect, useState } from "react";
// import state from "./stores/Store";
// import { Route } from "react-router-dom";
// import Scar from "./details/sCar";
// import Xcar from "./details/xCar";
// import Ycar from "./details/yCar";
// import Tcar from "./details/3Car";
// import SRcar from "./details/SRhome";
// import SPcar from "./details/SPhome";

// export default function App() {
//   let Float = {
//     position: "fixed",
//     width: "100%",
//     padding: "0",
//     margin: "0"
//   };

//   let imgArr = state();
//   const [val, setval] = useState({
//     Name: imgArr[Math.floor(window.scrollY / 780)].model,
//     dis: imgArr[Math.floor(window.scrollY / 780)].text,
//     bool: true
//   });

//   useEffect(() => {
//     const handleScroll = (event) => {
//       if (Math.floor(window.scrollY / 780) >= imgArr.length) {
//         setval({ Name: imgArr[imgArr.length - 1].model, bool: false });
//       } else {
//         console.log(Math.floor(window.scrollY / 780), "kkk");
//         setval({
//           Name: imgArr[Math.floor(window.scrollY / 780)].model,
//           dis: imgArr[Math.floor(window.scrollY / 780)].text,
//           bool: true
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     // return () => {
//     //   removeEventListener("scroll", handleScroll);
//     // };
//   });
//   // window.addEventListener("scroll", useCallback);
//   console.log(val.bool);
//   return (
//     <switch>
//       <Route path="/models" exact>
//         <Scar />
//       </Route>
//       <Route path="/modelx" exact>
//         <Xcar />
//       </Route>
//       <Route path="/modely" exact>
//         <Ycar />
//       </Route>
//       <Route path="/model3" exact>
//         <Tcar />
//       </Route>
//       <Route path="/solarpanels" exact>
//         <SPcar />
//       </Route>
//       <Route path="/solarroof" exact>
//         <SRcar />
//       </Route>

//       <Route path="/" exact>
//         <div style={Float}>
//           <Navbar />
//           <Model Name={val} />
//           {(val.bool && <Buttons />) || <Sbutton />}
//         </div>
//         <div
//           style={{ margin: "-9px", padding: "0px", border: "1px solid red" }}
//         >
//           {imgArr.map((ele) => {
//             return (
//               <div>
//                 <img class="imgB" src={ele.img} alt="" />
//               </div>
//             );
//           })}
//         </div>
//         <div style={{ position: "relative", bottom: "40px" }}>
//           <Footer />
//         </div>
//       </Route>
//     </switch>
//   );
// }
