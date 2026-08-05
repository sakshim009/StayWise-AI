import "./HotelLogin.css";

import {
  Mail,
  Lock,
  Sparkles,
  Hotel,
  ArrowRight
} from "lucide-react";


function HotelLogin(){


return(


<div className="hotel-login-page">



<div className="login-container">



{/* LOGIN CARD */}



<div className="login-card">



<div className="login-header">


<Sparkles size={30}/>


<h1>

Welcome Back

</h1>



<p>

Login to your StayWise AI hotel account

</p>



</div>







<form className="login-form">





<div className="login-input">


<Mail size={18}/>


<input

type="email"

placeholder="Business Email"

/>


</div>








<div className="login-input">


<Lock size={18}/>


<input

type="password"

placeholder="Password"

/>


</div>







<div className="forgot-password">

Forgot Password?

</div>








<button className="login-btn">


Login


<ArrowRight size={18}/>


</button>





</form>





</div>








{/* BRAND SIDE */}



<div className="login-brand">



<div className="brand-icon">

<Hotel size={40}/>

</div>




<h2>

StayWise AI

</h2>



<p>

Smart Hotels.
<br/>

Smarter Management.

</p>






<div className="login-benefits">


<div>
✓ AI Automation
</div>


<div>
✓ Revenue Analytics
</div>


<div>
✓ Guest Management
</div>


<div>
✓ Real-time Insights
</div>



</div>





</div>





</div>



</div>


);


}


export default HotelLogin;