import { useState } from "react";
import axios from 'axios';
import "./register.css";
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const history = useNavigate();

  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]:value
    });
  };

  const register = (e) => {
    e.preventDefault();
    console.log(user);
    const { name, email, password, password2 } = user
    if( name && email && password && (password === password2)){
      axios.post("http://localhost:9002/register", user)
      .then( res => {
          alert(res.data.message);
          history.push("/login")
      })
    } else {
        alert("invalid input");
        console.log("error");

    }
  }
  return (
    <div className="register">
      <div className="top">
        <h1 className="text font-poppins flex  text-bold text-4xl  font-semibold items-center text-white py-6 justify-center">E-XCHANGE</h1>
      </div>
      <div className="container">
        <h1 className="h1">Register Now and let's save it together</h1>
        <h2>Cancel anytime.</h2>
        <form>
          <input className="input" type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} />
          <input className="input" type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange} />
          <input className="input" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
          <input className="input" type="password" name="password2" value={user.password2} placeholder="Confirm Password" onChange={handleChange}/>
          <input type="address" name="address" value={user.address} placeholder="address" className="input address" onChange={handleChange}/>
          <button className="py-3 mt-3 px-12 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none" onClick={register}> Register
          </button>
          <span className="span">or</span>
          <button className="py-3 mt-3 px-12 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none" onClick={() => history("/login")}> Log In
          </button>
        </form>
       
      </div>
      
    </div>
  );
}