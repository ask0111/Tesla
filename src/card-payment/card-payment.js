import Navbar from "../account/loginnav";
import {AuthContext1} from '../custom-order/custom-api'
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../stores/context";
import { useHistory } from "react-router-dom";

export default function CardPayment() {
  const history = useHistory();
  const userData = useContext(AuthContext);
  const singleCar = useContext(AuthContext1);
  const [bool, setBool] = useState();
  console.log(singleCar, 'l');
  // localStorage.setItem('car', JSON.stringify(ata));

  // const cardetail = (data)=>{
  //   let userId = Object.keys(userData == null ? {} : userData);
  //   userId.map((id)=>{
  //     fetch(`https://tesla-e3c24-default-rtdb.firebaseio.com/userDetails/${id}.json`
  //   ).then((res)=> res.json()).then(user => {
  //     if(user.login){
  //       fetch(`https://tesla-e3c24-default-rtdb.firebaseio.com/userDetails/${id}.json`, 
  //         {
  //           method: 'PATCH',
  //           headers: {'Content-type': 'application/json'}, 
  //           body: JSON.stringify({history: [...user?.history, data]})
  //         }
  //       )
  //     }
  //       });
      
  //   });
    
  // }

  function patch(singleCar, id, user){
    fetch(`https://tesla-e3c24-default-rtdb.firebaseio.com/userDetails/${id}.json`, 
    {
      method: 'PATCH',
      headers: {'Content-type': 'application/json'}, 
      body: JSON.stringify({'history': [ singleCar, ...user.history]})
    }
  ).then(res=> {alert('Patchdata'); history('/teslaaccount/order-history')})
  console.log(user,id, 'sc')
  }

  

  function singhup(e){
    e.preventDefault();
    console.log(singleCar, 'scar')
    let userId = Object.keys(userData == null ? {} : userData);
    userId.map((id)=>{
      fetch(`https://tesla-e3c24-default-rtdb.firebaseio.com/userDetails/${id}.json`
      ).then((res)=> res.json()).then(user => {
        if(user.login){
          patch(singleCar, id, user)
      }
        });
      
    });
    // var t = JSON.parse(localStorage.getItem('car'));

  //   fetch('http://localhost:3000/posts/1', 
  //    {
  //      method: 'POST',
  //      headers: {'Content-type': 'application/json'}, 
  //      body: JSON.stringify(t)
  //    }
  //  ).then((res)=> { if(res.status){ alert('Car Buied successfully..')}});
   
 }

//  useEffect(()=>{
//    if(singleCar){
//      singhup();
//    }
//  },[singleCar])







  return (
    <>
      <Navbar />
      <div className="solar-roof-main">
        <div style={{ width: "100%" }} className="solar-roof-main1">
          {/* <img src="https://cdn.motor1.com/images/mgl/weMzo/s3/tesla-solar-roof.webp" /> */}
          <img src={singleCar?.image} />
        </div>
        <div style={{ width: "40%" }} className="solar-roof-main2">
          <form style={{ width: "80%" }} onSubmit={(e)=> {alert("OTP ****" ); setBool(true); singhup(e)} }>
            <h1 style={{margin: '40px 44%', width: '150px'}}>Card</h1>
            <h2 style={{margin: '40px 35%', width: '150px'}}>{singleCar.model}</h2>
            <label>Name on Card</label>
            <input type="text" minLength={3}/>
            <label>Card Number</label>
            <input type="number" minLength={16} maxLength={16}/>
            <label>Expiration Month</label>
            <input type="number" maxLength={2}/>
            <label>Expiration Year</label>
            <input type="number" minLength={4} maxLength={4}/>
            <label>CVV</label>
            <input type="number" minLength={3} maxLength={3}/>
            {bool && <input value={Math.floor(Math.random()*10000)} type="text" minLength={3} maxLength={3}/>}
            <w>Non-refundable Order Deposit.Non-transferable.</w>
            <input
              type="submit"
              value={singleCar.price}
              style={{ backgroundColor: "blue", color: "white" }}
              
            />

          </form>
        </div>
      </div>
    </>
  );
}
