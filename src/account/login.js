import { Link, useHistory} from "react-router-dom";
import "./login.css";
import Navacc from "./loginnav";
import Footer from "./foot";
// import { useHistory } from "react-router-dom";
import {AuthContext} from '../stores/context'
import { useState, useContext } from "react";


export default function Login() {
  const usersData = useContext(AuthContext);
  var history = useHistory();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [user, setuser] = useState();

  const LoginHandler= (e)=>{
    // e.preventDefault();
    let bool = 0;
    usersData.map((data)=>{
      console.log(data.email, email, data.passward, password)
      if(data.email == email && data.passward == password){
        bool = 1;
      }
    })
    setuser({email: email, password: password});
    if(!email && !password){
      return alert('Fill All Fields..')
    }else if(bool){
      localStorage.setItem('user', JSON.stringify({email: email, password: password, user: true}));
      history.push('/teslaaccount')
     
    }else{
      return alert('Email or Password Invalid..')
    }
    return alert('Login Successfully..')
  }

  var history = useHistory();
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
