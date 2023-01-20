import { Link, useHistory} from "react-router-dom";
import "./login.css";
import Navacc from "./loginnav";
import Footer from "./foot";
import {AuthContext} from '../stores/context'
import { useState, useContext } from "react";
import { useEffect } from "react";


export default function Login() {
  const usersData = useContext(AuthContext);
  var history = useHistory();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [check, setCheck] = useState(false);

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
    var c=0;
      usersdata1?.map((id)=> {fetch(`https://tesla-e3c24-default-rtdb.firebaseio.com/userDetails/${id}.json`).then((res)=> res.json())
         .then(data=> {
          console.log(data.email === email, data.passward === password, id)
           if(data.email == email && data.passward == password){
             Happy(id, true);
             setCheck(true);
             c=0;
           }else{
             Happy(id, false);
             // bool = false;
             c++;
           }
         });
       });
       if(c === usersdata1.length){
        return alert('Email or Password Invalid');
       }
       return (alert('Login Successfully..'))
      }
      if(check){
         setTimeout(()=>{
           window.location.reload();
          }, 500)
          history.push('/teslaaccount/profile-settings')
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
