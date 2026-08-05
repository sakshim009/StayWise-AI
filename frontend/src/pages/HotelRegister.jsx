import "./HotelRegister.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Building2,
  User,
  Mail,
  Lock,
  MapPin,
  BedDouble,
  Hotel,
  Sparkles,
  ArrowRight
} from "lucide-react";



function HotelRegister(){


const navigate = useNavigate();



const [formData,setFormData] = useState({

  hotelName:"",
  ownerName:"",
  email:"",
  password:"",
  location:"",
  rooms:"",
  hotelType:""

});





const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};






const handleSubmit=(e)=>{


e.preventDefault();


console.log(
"Hotel Registration:",
formData
);


// move to setup page

navigate("/hotel-setup");


};








return (

<div className="hotel-register-page">



<div className="register-container">





{/* LEFT FORM */}



<div className="register-card">



<div className="register-header">


<Sparkles size={30}/>


<h1>

Create Your Hotel Account

</h1>


<p>

Start managing your hotel with StayWise AI

</p>


</div>







<form

className="register-form"

onSubmit={handleSubmit}

>





<div className="input-group">

<Building2 size={18}/>

<input

type="text"

name="hotelName"

placeholder="Hotel Name"

value={formData.hotelName}

onChange={handleChange}

required

/>

</div>









<div className="input-group">

<User size={18}/>

<input

type="text"

name="ownerName"

placeholder="Owner Name"

value={formData.ownerName}

onChange={handleChange}

required

/>

</div>








<div className="input-group">

<Mail size={18}/>

<input

type="email"

name="email"

placeholder="Business Email"

value={formData.email}

onChange={handleChange}

required

/>

</div>









<div className="input-group">

<Lock size={18}/>

<input

type="password"

name="password"

placeholder="Password"

value={formData.password}

onChange={handleChange}

required

/>

</div>









<div className="input-row">





<div className="input-group">

<MapPin size={18}/>

<input

type="text"

name="location"

placeholder="Hotel Location"

value={formData.location}

onChange={handleChange}

required

/>

</div>








<div className="input-group">

<BedDouble size={18}/>

<input

type="number"

name="rooms"

placeholder="Rooms"

value={formData.rooms}

onChange={handleChange}

required

/>

</div>





</div>









<select

className="hotel-type"

name="hotelType"

value={formData.hotelType}

onChange={handleChange}

required

>


<option value="">

Select Hotel Type

</option>


<option>

Luxury Hotel

</option>


<option>

Resort

</option>


<option>

Boutique Hotel

</option>


<option>

Business Hotel

</option>


<option>

Budget Hotel

</option>



</select>









<button

type="submit"

className="register-btn"

>


Create Account


<ArrowRight size={18}/>


</button>






</form>






</div>









{/* RIGHT BENEFITS */}



<div className="register-benefits">



<div className="benefit-icon">

<Hotel size={38}/>

</div>





<h2>

Why Choose StayWise AI?

</h2>





<p>

Everything you need to run a smarter hotel.

</p>







<div className="benefit-list">


<div>
✓ AI Guest Assistant
</div>


<div>
✓ Smart Revenue Analytics
</div>


<div>
✓ Automated Operations
</div>


<div>
✓ Better Guest Experience
</div>



</div>






</div>






</div>




</div>


);


}



export default HotelRegister;