import { Link, useHistory } from "react-router-dom";
import "./login.css";
import Navacc from "./loginnav";
import Footer from "./foot";
import { useEffect, useState } from "react";
import { useContext } from "react";
import {AuthContext} from '../stores/context'

export default function Login() {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    const [passward, setPassward] = useState();
    const [cpassward, setCpassward] = useState();
    const [user, setUser] = useState();

    const usersData = useContext(AuthContext)
    console.log(usersData)
    var history = useHistory();
  
    function singhup(){
         fetch('http://localhost:3000/posts', 
          {
            method: 'POST',
            headers: {'Content-type': 'application/json'}, 
            body: JSON.stringify(user)
          }
        ).then((res)=> { if(res.status){ alert('Account Created successfully..')}});
        
      }

      useEffect(()=>{
        if(user){
          singhup();
        }
      },[user])
      
      const submitUser =  (e)=>{
        e.preventDefault();
        let bool = 1;
        usersData.map((user)=>{
            if(user.email == email){
                bool = 0;
            }
        })
        if(!bool){
          return alert('This User Already Exist..')
        }

        if(!name || !surname || !email || !passward || !cpassward){
          return alert("All field should be filled");
        }
        if(passward == cpassward){
          setUser({name: name, surname: surname, email: email, passward: passward})
          setName(''); setEmail(''); setPassward(''); setSurname(''); setCpassward('') 
          history.push("/teslaaccount/profile-settings");
          window.location.reload();
          }
        
        else{
            return alert("Passward Not Matched...");
        }
    }

  return (
    <>
      <Navacc />
      <div className="main">
        <div className="submain">
          <h1>Create Account</h1>
          <form onSubmit={submitUser}>
            <label>First Name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" />
            <label>Last Name</label>
            <input value={surname} onChange={(e)=> setSurname(e.target.value)} type="text" />
            <label>Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" />
            <label>Passward</label>
            <input value={passward} onChange={(e)=> setPassward(e.target.value)} type="password"/>
            <label>Confirm Passward</label>
            <input value={cpassward} onChange={(e)=> setCpassward(e.target.value)} type="password" />
            <p style={{ textAlign: "left" }}>
              By Continuing, I understand and agree to Tesla's Privacy and
              Notice <Link path="/signup">Terms of Use</Link> for Create a tesla
              account
            </p>
           
            <input style={{width: '99%', backgroundColor: 'rgb(104, 104, 214)'}} type="submit" value="Create Account" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
