import "./Login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Mail,
  Lock,
  Sparkles,
  ArrowRight
} from "lucide-react";



function Login() {


  const navigate = useNavigate();



  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");





  const handleLogin = (e)=>{


    e.preventDefault();



    if(email && password){



      localStorage.setItem(
        "isLoggedIn",
        "true"
      );



      navigate("/");



    }
    else{


      alert(
        "Please enter email and password"
      );


    }



  };






  return (



    <div className="login-page">





      <div className="login-card">







        {/* LOGO */}


        <div className="login-logo">


          <Sparkles size={38}/>


        </div>







        <h1>

          StayWise AI

        </h1>







        <h2>

          Welcome Back 👋

        </h2>







        <p className="login-desc">


          Login to continue your smart hotel experience.


        </p>









        <form onSubmit={handleLogin}>






          {/* EMAIL */}



          <div className="input-box">



            <Mail size={22}/>




            <input


              type="email"


              placeholder="Email Address"


              value={email}


              onChange={(e)=>
                setEmail(e.target.value)
              }


            />



          </div>











          {/* PASSWORD */}



          <div className="input-box">



            <Lock size={22}/>




            <input


              type="password"


              placeholder="Password"


              value={password}


              onChange={(e)=>
                setPassword(e.target.value)
              }


            />



          </div>









          <button


            className="login-btn"


            type="submit"


          >



            Login Now



            <ArrowRight size={20}/>



          </button>





        </form>






      </div>






    </div>



  );


}



export default Login;