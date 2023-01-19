import { Link, useHistory} from "react-router-dom";
import "./login.css";
import Navacc from "./loginnav";
import Footer from "./foot";
import {AuthContext} from '../stores/context'
import { useState, useContext } from "react";


export default function Login() {
  const usersData = useContext(AuthContext);
  var history = useHistory();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();


  var usersdata1 = Object.keys(usersData == null ? {} : usersData);
  console.log(usersdata1, 'ids')
  
  
  const LoginHandler= async (e)=>{
    e.preventDefault();

    function Happy(id, b){
      console.log(id, b)
      fetch(`https://tesla-e3c24-default-rtdb.firebaseio.com/userDetails/${id}.json`, 
        {
          method: 'PATCH',
          headers: {'Content-type': 'application/json'}, 
          body: JSON.stringify({"login": b})
        }
      ).then(res=> console.log(res)).catch((err)=> console.log(err))
    }

    if(!email || !password){
      return alert('Fill All Fields..')
    }

    let bool = false, jump = 0;
     usersdata1?.map((id)=> {fetch(`https://tesla-e3c24-default-rtdb.firebaseio.com/userDetails/${id}.json`).then((res)=> res.json())
        .then(data=> {
          if(data.email === email && data.passward === password){
            console.log('Yes')
            bool = true;
            jump = 1;
          }else{
            bool = false;
          }
          Happy(id, bool);
        });
      });
      setTimeout(()=>{
        // if(jump){ 
        //   history.push('/teslaaccount')
        // }else{
        //    alert('Email or Password Invalid..')
        // }
        window.location.reload();
      }, 10000)
      
      return alert('Login Successfully..')
  }

  const AccHandler = () => {
    history.push("/signup");
  };


  return (
    <>
      <Navacc />
      <div className="main">
        <div className="submain">
          <h1>Sign In</h1>
          <form onSubmit={LoginHandler}>
            <h3>Email</h3>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" />
            <input value={password} onChange={(e)=> setpassword(e.target.value)} type="password" />
            <input style={{width: '99%', backgroundColor: 'rgb(104, 104, 214)'}} type="submit" value="Next" />
          </form>
          <Link to="https://www.tesla.com/support/account-support?redirect=no">
            <p>Trouble Signing In?</p>
          </Link>
          <div className="kk">
            <hr /> Or <hr />
          </div>
          <button onClick={AccHandler}>Create Account</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
