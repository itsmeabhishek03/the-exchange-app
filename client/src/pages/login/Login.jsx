import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const history = useNavigate();

  const [user, setUser] = useState({
    email:'',
    password:'',
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  };

  const login = () => {
     axios.post("http://localhost:9002/login", user)
     .then(res => alert(res.data.message))
     history('/product')
  }

  return (
    <div className="login bg-primary w-full overflow-hidden">
      <div className="top2">
        <h1 className="title1 font-poppins flex  text-bold   font-semibold items-center text-white justify-center">E-XCHANGE</h1>
        
       </div>
       
      <div className="container2">
        <form>
          {console.log(user)}
          <h1 className="sign  flex  text-bold text-3xl  font-semibold" >Sign In</h1>
          <input className="input2" type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}/>
          <input className="input2" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
          <button type="button" className="buttone py-3 px-5 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none" onClick={login}> Log In</button>
         <span className="or flex ml-[200px]">or</span>
         <button type="button" className="buttone py-3 px-5 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none" onClick={() => history("/register")}> Register
         </button>
        
          <span className="sp">
            New to E-XCHANGE? <b>Sign up now.</b>
          </span>
          <small className="sm">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
         
        </form>
        
      </div>
      <div type="button" className="buttons1 font-poppins font-medium text-[13px]" onClick={() => history("/")}> Go To HomePage</div>
    </div>
  );
}