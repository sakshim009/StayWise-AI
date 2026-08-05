import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./DemoModal.css";

import {
  X,
  Sparkles,
  Send,
  ChevronDown
} from "lucide-react";



function DemoModal({ closeDemo }) {


  const navigate = useNavigate();


  const [submitted, setSubmitted] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);



  const improvementOptions = [

    "Increase Bookings",

    "Automate Operations",

    "AI Guest Assistant",

    "Revenue Growth",

    "Guest Experience"

  ];





  const [formData,setFormData] = useState({

    name:"",

    hotelName:"",

    email:"",

    phone:"",

    location:"",

    rooms:"",

    features:[],

    message:""

  });








  useEffect(()=>{


    const handleOutsideClick=(event)=>{


      if(

        dropdownRef.current &&

        !dropdownRef.current.contains(event.target)

      ){

        setDropdownOpen(false);

      }


    };



    document.addEventListener(

      "mousedown",

      handleOutsideClick

    );



    return ()=>{


      document.removeEventListener(

        "mousedown",

        handleOutsideClick

      );


    };


  },[]);








  const handleChange=(e)=>{


    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });


  };









  const handleFeatureToggle=(item)=>{


    if(formData.features.includes(item)){


      setFormData({

        ...formData,


        features:

        formData.features.filter(

          feature=>feature!==item

        )


      });


    }

    else{


      setFormData({

        ...formData,


        features:[

          ...formData.features,

          item

        ]


      });


    }


  };









  const handleSubmit=(e)=>{


    e.preventDefault();


    console.log(

      "Demo Request:",

      formData

    );


    setSubmitted(true);


  };









return(


<div className="demo-overlay">



<div className="demo-modal">





<button

className="demo-close"

onClick={closeDemo}

>

<X size={20}/>

</button>








{

submitted ? (



<div className="demo-success">





<Sparkles size={42}/>






<h2>

🎉 You're All Set!

</h2>







<p>

Your StayWise AI demo request has been received.

<br/><br/>

We will prepare your personalized hotel experience.

Continue setup to start building your AI-powered hotel profile.

</p>








<div className="success-steps">


<p>
✓ Requirements review
</p>


<p>
✓ Personalized demo preparation
</p>


<p>
✓ AI-powered hotel management walkthrough
</p>



</div>









<button

className="success-btn"

onClick={()=>navigate("/register-hotel")}

>

Continue Setup

</button>






</div>




)

:

(



<>



<div className="demo-header">



<Sparkles size={28}/>




<h2>

Book Your StayWise AI Demo

</h2>






<p>

Discover how AI can improve your hotel's bookings, operations and guest experience.

</p>




</div>









<form

className="demo-form"

onSubmit={handleSubmit}

>








<input

type="text"

name="name"

placeholder="Full Name"

value={formData.name}

onChange={handleChange}

required

/>









<input

type="text"

name="hotelName"

placeholder="Hotel Name"

value={formData.hotelName}

onChange={handleChange}

required

/>









<input

type="email"

name="email"

placeholder="Business Email"

value={formData.email}

onChange={handleChange}

required

/>









<input

type="tel"

name="phone"

placeholder="Phone Number"

value={formData.phone}

onChange={handleChange}

required

/>









<input

type="text"

name="location"

placeholder="Hotel Location"

value={formData.location}

onChange={handleChange}

required

/>









<input

type="number"

name="rooms"

placeholder="Number of Rooms"

value={formData.rooms}

onChange={handleChange}

required

/>









<div

className="custom-dropdown"

ref={dropdownRef}

>




<div

className={`dropdown-header ${
dropdownOpen ? "active" : ""
}`}

onClick={()=>setDropdownOpen(!dropdownOpen)}

>




<span>


{

formData.features.length===0

?

"What do you want to improve?"

:

formData.features.join(", ")

}


</span>







<ChevronDown

size={18}

className={dropdownOpen ? "rotate":""}

/>






</div>









{

dropdownOpen &&



<div className="dropdown-menu">





{

improvementOptions.map(item=>(



<label

key={item}

className="dropdown-option"

>





<input

type="checkbox"

checked={

formData.features.includes(item)

}

onChange={()=>handleFeatureToggle(item)}

/>





<span>

{item}

</span>






</label>



))



}







</div>



}





</div>









<textarea

name="message"

placeholder="Tell us about your hotel goals..."

value={formData.message}

onChange={handleChange}

rows="3"

/>









<button

type="submit"

className="demo-submit"

>




<Send size={17}/>



Request My Demo



</button>








</form>




</>



)



}






</div>






</div>



);



}



export default DemoModal;