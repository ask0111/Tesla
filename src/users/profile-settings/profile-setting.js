import Navbar from "../../hadder/navbar";
import "../dashboard/dashboard";
import { Link } from "react-router-dom";
import Foot from "../../account/foot";
import Userboard from "../dashboard/userbord";
import { AuthContext } from "../../stores/context";
import { useContext, useRef } from "react";

export default function Dashboard() {
  var usersDat = useContext(AuthContext);
  var pdata = useRef();
  pdata = {name: 'None', surname: '', email: 'None', passward: ''};
  var userdata = JSON.parse(localStorage.getItem('user'));
  
  if(usersDat){
    usersDat.map((data)=>{
      //  console.log(userdata, data, 'llll');
      if(userdata?.email == data.email){
        console.log(data)
        // setProfileuser(data);
        pdata = data;
      }
    })
  }
  
  
  return (
    <>
      <Navbar />
      <div className="dasmain">
        <Userboard />
        <div className="dassubmain">
          <h1 style={{ margin: "80px 15px 15px 0px" }}>Profile Setting</h1>
          <div className="dassubmain2">{ pdata &&
            <form style={{marginTop: '40px', height: '300px'}}>
              <label >User Full Name</label>
              <input value={pdata?.name +" "+ pdata?.surname} disabled/>
              <label >User Email ID</label>
              <input value={pdata?.email} disabled/>
              <label >User Password</label>
              <input value={pdata?.passward} type='password' disabled/>
            </form>}
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}
