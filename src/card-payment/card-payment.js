import Navbar from "../account/loginnav";
import {AuthContext1} from '../custom-order/custom-api'
import { useContext, useState } from "react";
import { AuthContext } from "../stores/context";
import { useHistory } from "react-router-dom";

export default function CardPayment() {
  const history = useHistory();
  const userData = useContext(AuthContext);
  const singleCar = useContext(AuthContext1);
  const [bool, setBool] = useState();
  const [cardname, setCardname] = useState();
  const [cardnumber, setCardnumber] = useState();
  const [cardmonth, setCardmonth] = useState();
  const [cardyear, setCardyear] = useState();
  const [cardcvv, setCardcvv] = useState();

  function patch(singleCar, id, user){
    fetch(`https://tesla-e3c24-default-rtdb.firebaseio.com/userDetails/${id}.json`, 
    {
      method: 'PATCH',
      headers: {'Content-type': 'application/json'}, 
      body: JSON.stringify({'history': [ singleCar, ...user.history]})
    }
  ).then(res=> {alert('Payment Successfully..'); setBool(false); history.push('/teslaaccount/order-history');});
  
  // console.log(user,id, 'sc')
  }

  

  function singhup(e){
    e.preventDefault();
    if(!cardname || !cardnumber || !cardmonth || !cardyear || !cardcvv){
      return alert('All Field Should Be Filled...')
    }
    alert("OTP ****" );
    setBool(true);
    // console.log(singleCar, 'scar')
    let userId = Object.keys(userData == null ? {} : userData);
    userId?.map((id)=>{
      fetch(`https://tesla-e3c24-default-rtdb.firebaseio.com/userDetails/${id}.json`
      ).then((res)=> res.json()).then(user => {
        if(user.login){
          patch(singleCar, id, user)
      }
        });
      
    });
  
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
          <form style={{ width: "80%" }} onSubmit={(e)=> {singhup(e)} }>
            <h1 style={{margin: '40px 44%', width: '150px'}}>Card</h1>
            <h2 style={{margin: '40px 35%', width: '150px'}}>{singleCar.model}</h2>
            <label>Name on Card</label>
            <input value={cardname} onChange={(e)=> setCardname(e.target.value)} type="text" minLength={3}/>
            <label>Card Number</label>
            <input value={cardnumber} onChange={(e)=> setCardnumber(e.target.value)} type="number"  min={1000000000000000} max={999999999999999999}/>
            <label>Expiration Month</label>
            <input value={cardmonth} onChange={(e)=> setCardmonth(e.target.value)} type="number" min={1} max={12}/>
            <label>Expiration Year</label>
            <input value={cardyear} onChange={(e)=> setCardyear(e.target.value)} type="number" min={1990} maxLength={9999}/>
            <label>CVV</label>
            <input value={cardcvv} onChange={(e)=> setCardcvv(e.target.value)} type="number" min={100} maxLength={999}/>
            {bool && (<><label>OTP: </label>
             <input value={Math.floor(Math.random()*10000)} type="text" minLength={3} maxLength={3}/></>)}
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
