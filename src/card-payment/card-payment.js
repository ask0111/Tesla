import Navbar from "../account/loginnav";
import {AuthContext1} from '../custom-order/custom-api'
import { useContext, useState } from "react";

export default function CardPayment() {
  const ata = useContext(AuthContext1);
  const [bool, setBool] = useState();
  console.log(ata, 'l');
  // localStorage.setItem('car', JSON.stringify(ata));



  

  function singhup(e){
    
    var t = JSON.parse(localStorage.getItem('car'));

    fetch('http://localhost:3000/posts/1', 
     {
       method: 'POST',
       headers: {'Content-type': 'application/json'}, 
       body: JSON.stringify(t)
     }
   ).then((res)=> { if(res.status){ alert('Car Buied successfully..')}});
   
 }

//  useEffect(()=>{
//    if(ata){
//      singhup();
//    }
//  },[ata])







  return (
    <>
      <Navbar />
      <div className="solar-roof-main">
        <div style={{ width: "100%" }} className="solar-roof-main1">
          {/* <img src="https://cdn.motor1.com/images/mgl/weMzo/s3/tesla-solar-roof.webp" /> */}
          <img src={ata?.image} />
        </div>
        <div style={{ width: "40%" }} className="solar-roof-main2">
          <form style={{ width: "80%" }} onSubmit={()=> {alert("OTP ****" ); setBool(true); singhup()} }>
            <h1 style={{margin: '40px 44%', width: '150px'}}>Card</h1>
            <h2 style={{margin: '40px 35%', width: '150px'}}>{ata.model}</h2>
            <label>Name on Card</label>
            <input type="text" minLength={3}/>
            <label>Card Number</label>
            <input type="number" min={16} max={16}/>
            <label>Expiration Month</label>
            <input type="number" max={2}/>
            <label>Expiration Year</label>
            <input type="number" min={4} max={4}/>
            <label>CVV</label>
            <input type="number" min={3} max={3}/>
            {bool && <input value={Math.floor(Math.random()*10000)} type="text" min={3} max={3}/>}
            <w>Non-refundable Order Deposit.Non-transferable.</w>
            <input
              type="submit"
              value={ata.price}
              style={{ backgroundColor: "blue", color: "white" }}
              
            />

          </form>
        </div>
      </div>
    </>
  );
}
