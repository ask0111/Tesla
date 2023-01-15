import { Link } from "react-router-dom";
import "./login.css";
import Navacc from "./loginnav";
import Footer from "./foot";
import { useState } from "react";
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
    console.log(usersData, 'jjjjj')

    function singhup(){
        fetch('http://localhost:3000/posts', {method: 'POST', headers: { 'Content-type': 'application/json; charset=UTF-8'}, body: JSON.stringify(user)}).then((res)=> { if(res.status){alert('successfully added in server..')}}).catch((e)=> alert('e', e));
    }

    const submitUser = (e)=>{
        e.preventDefault();
        usersData.map((user)=>{
            if(user.email == email){
                return ;
            }
        })
        if(!name || !surname || !email || !passward || !cpassward){
            return alert("All field should be filled");
        }
        if(passward == cpassward){
            setUser({name: name, surname: surname, email: email, passward: passward});
            console.log(user, 'ppppp')
            singhup();
            setName(''); setEmail(''); setPassward(''); setSurname(''); setCpassward('')
        }
        else{
            return alert("Passward Not Matched...");
        }
        return alert("Successfully Submitted")
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
           
            <input type="submit" value="Create Account" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
