import "./Navbar.css";
import logoIcon from "../assets/logo/logo-icon.png";

import { useNavigate, useLocation } from "react-router-dom";


function Navbar() {


  const navigate = useNavigate();

  const location = useLocation();





  // CHECK LOGIN STATUS

  const isUserLoggedIn = () => {

    return localStorage.getItem(
      "isLoggedIn"
    ) === "true";

  };







  // PROTECTED SECTION NAVIGATION

  const protectedSection = (sectionId) => {


    if(!isUserLoggedIn()){


      navigate("/login");

      return;

    }



    goToSection(sectionId);


  };









  // PROTECTED PAGE NAVIGATION

  const protectedNavigate = (path) => {


    if(!isUserLoggedIn()){


      navigate("/login");

      return;

    }



    navigate(path);


  };









  // SCROLL SECTIONS

  const goToSection = (sectionId) => {


    if(location.pathname === "/"){


      document
      .getElementById(sectionId)
      ?.scrollIntoView({

        behavior:"smooth"

      });



    }
    else{


      navigate("/#" + sectionId);


    }


  };









return (

<header className="navbar">







{/* LOGO */}



<div

className="logo"

onClick={() => navigate("/")}

style={{cursor:"pointer"}}

>


<img

src={logoIcon}

alt="StayWise AI Logo"

className="logo-icon"

/>




<div className="logo-text">


<h1>
StayWise AI
</h1>


<p>
SMART HOTEL ECOSYSTEM
</p>


</div>


</div>









{/* NAVIGATION */}



<nav className="nav-links">






<button

className={
location.pathname === "/"
? "active-nav"
: ""
}

onClick={() => navigate("/")}

>

Home

</button>









<button

onClick={() => protectedSection("rooms")}

>

Rooms

</button>









<button

onClick={() => protectedSection("features")}

>

Services

</button>









<button

className={
location.pathname === "/ai"
? "active-nav"
: ""
}

onClick={() => protectedNavigate("/ai")}

>

AI Assistant

</button>









<button

className={
location.pathname === "/dashboard"
? "active-nav"
: ""
}

onClick={() => protectedNavigate("/dashboard")}

>

Analytics

</button>









<button

className={
location.pathname === "/about"
? "active-nav"
: ""
}

onClick={() => navigate("/about")}

>

About

</button>








</nav>









{/* BUTTONS */}



<div className="buttons">






<button

className="login"

onClick={() => navigate("/login")}

>

Login

</button>









<button

className="signup"

onClick={() => protectedSection("journey")}

>

Get Started

</button>







</div>







</header>

);


}


export default Navbar;