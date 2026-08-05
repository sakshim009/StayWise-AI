import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./HotelSetup.css";

import {
  Building2,
  BedDouble,
  DollarSign,
  Image,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles
} from "lucide-react";



function HotelSetup() {


const navigate = useNavigate();


const [currentStep,setCurrentStep] = useState(1);



const steps = [

{
id:1,
title:"Basic Information",
icon:<Building2 size={22}/>
},

{
id:2,
title:"Add Rooms",
icon:<BedDouble size={22}/>
},

{
id:3,
title:"Pricing",
icon:<DollarSign size={22}/>
},

{
id:4,
title:"Upload Images",
icon:<Image size={22}/>
},

{
id:5,
title:"Complete",
icon:<CheckCircle size={22}/>
}

];





const nextStep=()=>{

if(currentStep < 5){

setCurrentStep(currentStep + 1);

}

};





const previousStep=()=>{

if(currentStep > 1){

setCurrentStep(currentStep - 1);

}

};






return (

<div className="hotel-setup-page">


<div className="setup-container">



{/* HEADER */}

<div className="setup-header">


<Sparkles size={32}/>


<h1>

Setup Your Hotel

</h1>


<p>

Complete your hotel profile to activate StayWise AI

</p>


</div>








{/* STEPS */}

<div className="setup-steps">


{

steps.map(step=>(

<div

key={step.id}

className={`setup-step ${
currentStep >= step.id ? "active" : ""
}`}

>


<div className="step-icon">

{step.icon}

</div>


<span>

{step.title}

</span>


</div>

))

}


</div>









{/* CONTENT */}

<div className="setup-card">



{

currentStep === 1 &&

<>

<h2>

Basic Information

</h2>


<input placeholder="Hotel Name"/>


<input placeholder="Owner Name"/>


<input placeholder="Hotel Location"/>


<input placeholder="Hotel Type"/>


<textarea

placeholder="Describe your hotel"

rows="4"

/>


</>


}









{

currentStep === 2 &&

<>

<h2>

Add Rooms

</h2>


<input placeholder="Room Type"/>


<input placeholder="Number of Rooms"/>


<input placeholder="Capacity"/>


<input placeholder="Amenities"/>


</>

}









{

currentStep === 3 &&

<>

<h2>

Pricing Setup

</h2>


<input placeholder="Base Price"/>


<input placeholder="Weekend Price"/>


<input placeholder="Seasonal Pricing"/>


</>

}









{

currentStep === 4 &&

<>

<h2>

Upload Hotel Images

</h2>



<div className="upload-box">


<Image size={40}/>


<p>

Upload hotel, room and facility images

</p>


<input

type="file"

multiple

/>


</div>


</>

}









{

currentStep === 5 &&

<>

<div className="complete-screen">


<CheckCircle size={55}/>



<h2>

Your Hotel Is Ready!

</h2>



<p>

Your StayWise AI hotel profile has been created successfully.

</p>





<ul>

<li>
✓ Hotel Information Added
</li>


<li>
✓ Rooms Configured
</li>


<li>
✓ Pricing Setup Completed
</li>


<li>
✓ Images Uploaded
</li>


</ul>







<button

className="dashboard-btn"

onClick={()=>navigate("/hotel-dashboard")}

>


Go To Dashboard


<ArrowRight size={18}/>


</button>




</div>


</>


}



</div>









{/* ACTION BUTTONS */}



<div className="setup-actions">





{

currentStep > 1 &&


<button

className="back-btn"

onClick={previousStep}

>


<ArrowLeft size={18}/>


Back


</button>


}








{

currentStep < 5 &&


<button

className="next-btn"

onClick={nextStep}

>


Next


<ArrowRight size={18}/>


</button>


}



</div>






</div>


</div>

);


}


export default HotelSetup;