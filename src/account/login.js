import { Link } from "react-router-dom";
import "./login.css";
import Navacc from "./loginnav";
import Footer from "./foot";
import { useHistory } from "react-router-dom";
export default function Login() {
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
          <form>
            <h3>Email</h3>
            <input type="email" />
            <input type="submit" value="Next" />
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
