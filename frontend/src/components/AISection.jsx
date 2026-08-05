import "./AISection.css";

import {
    useState,
    useRef,
    useEffect
} from "react";


import {

    FaRobot,
    FaPaperPlane,
    FaCheckCircle,
    FaStar,
    FaBed,
    FaConciergeBell,
    FaUtensils,
    FaMapMarkedAlt,
    FaChartLine,
    FaArrowRight

} from "react-icons/fa";



import {

    initialBooking,
    startBooking,
    isCheckoutAfterCheckin

} from "../ai/bookingLogic";



import {

    aiRouter

} from "../ai/aiRouter";






const features = [


    {

        id:"room",

        icon:<FaBed />,

        title:"Room Booking",

        subtitle:"Hotels & Reservations"

    },


    {

        id:"service",

        icon:<FaConciergeBell />,

        title:"Hotel Services",

        subtitle:"Guest Assistance"

    },


    {

        id:"food",

        icon:<FaUtensils />,

        title:"Dining",

        subtitle:"Menus & Restaurants"

    },


    {

        id:"nearby",

        icon:<FaMapMarkedAlt />,

        title:"Nearby Places",

        subtitle:"Travel Assistance"

    },


    {

        id:"manager",

        icon:<FaChartLine />,

        title:"Manager AI",

        subtitle:"Hotel Analytics"

    }


];





function AISection(){



const [selected,setSelected] =
useState(features[0]);



const [input,setInput] =
useState("");



const [messages,setMessages] =
useState([

{

sender:"ai",

text:

`👋 Welcome to StayWise AI.

I am your Smart Hotel Ecosystem Assistant.

I help hotels manage operations and help guests with hotel services, booking requests, and information.

How may I assist you today?`

}

]);




const [history,setHistory] =
useState([]);



const [typing,setTyping] =
useState(false);



const [bookingFlow,setBookingFlow] =
useState(initialBooking);



const chatBodyRef =
useRef(null);





useEffect(()=>{


if(chatBodyRef.current){


chatBodyRef.current.scrollTop =
chatBodyRef.current.scrollHeight;


}


},[messages,typing]);






const addAIMessage=(text)=>{


setMessages((prev)=>[

...prev,

{

sender:"ai",

text

}

]);


};





const addUserMessage=(text)=>{


setMessages((prev)=>[

...prev,

{

sender:"user",

text

}

]);


};
const handleSend = async()=>{


if(!input.trim()) return;



const userMessage =
input.trim();



addUserMessage(userMessage);



setInput("");





/*
=================================
BOOKING FLOW
=================================
*/


/*
=================================
BOOKING FLOW
=================================
*/

if (bookingFlow.active) {

    const text = userMessage.toLowerCase().trim();

    // Cancel booking
    if (["cancel", "stop", "exit", "quit", "restart"].includes(text)) {

        setBookingFlow(initialBooking);

        addAIMessage(`❌ Booking cancelled.

How else can I help you today?`);

        return;
    }

    // Switch assistant
    if (text.includes("service")) {
        setBookingFlow(initialBooking);
        addAIMessage("🛎 Service Assistant Activated.\n\nAsk about hotel services.");
        return;
    }

    if (text.includes("food") || text.includes("restaurant") || text.includes("menu")) {
        setBookingFlow(initialBooking);
        addAIMessage("🍽 Dining Assistant Activated.\n\nAsk about restaurant and menus.");
        return;
    }

    if (text.includes("travel") || text.includes("nearby") || text.includes("place") || text.includes("beach")) {
        setBookingFlow(initialBooking);
        addAIMessage("📍 Travel Assistant Activated.\n\nAsk about nearby attractions.");
        return;
    }

    if (text.includes("manager") || text.includes("price") || text.includes("pricing") || text.includes("revenue")) {
        setBookingFlow(initialBooking);
        addAIMessage("📊 Manager AI Activated.\n\nAsk about occupancy, revenue, pricing and inventory.");
        return;
    }

    // Normal conversation
    const casualWords = [
        "hi",
        "hello",
        "hey",
        "how are you",
        "joke",
        "funny",
        "thanks",
        "thank you",
        "who are you"
    ];

    if (casualWords.some(word => text.includes(word))) {

        setTyping(true);

        try {

            const response = await fetch(
                "http://localhost:5000/api/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message: userMessage,
                        history
                    })
                }
            );

            const data = await response.json();

            addAIMessage(
`${data.reply}

🏨 Your booking is still active.

Please continue with the current booking step or type "cancel".`
            );

        } catch {

            addAIMessage(
`I'm here to help.

🏨 Your booking is still active.

Please continue with the current booking step or type "cancel".`
            );

        }

        setTyping(false);

        return;
    }

    let reply = "";

    switch (bookingFlow.step) {

        case 1:

            if (userMessage.length < 3) {

                addAIMessage(
`❌ Please enter a valid hotel name.

Example:
Grand Palace Hotel`
                );

                return;

            }

            setBookingFlow({
                ...bookingFlow,
                step: 2,
                data: {
                    ...bookingFlow.data,
                    hotel: userMessage
                }
            });

            reply =
`🏨 Hotel selected: ${userMessage}

Now choose your room:

• Deluxe Room
• Executive Room
• Luxury Suite`;

            break;

        case 2:

            const room = userMessage.toLowerCase();

            if (
                !room.includes("deluxe") &&
                !room.includes("executive") &&
                !room.includes("luxury")
            ) {

                addAIMessage(
`❌ Please choose a valid room.

• Deluxe Room
• Executive Room
• Luxury Suite`
                );

                return;

            }

            setBookingFlow({
                ...bookingFlow,
                step: 3,
                data: {
                    ...bookingFlow.data,
                    room: userMessage
                }
            });

            reply =
`📅 Room selected: ${userMessage}

Please enter check-in date.

Example:
24 July`;

            break;

        case 3:

            setBookingFlow({
                ...bookingFlow,
                step: 4,
                data: {
                    ...bookingFlow.data,
                    checkIn: userMessage
                }
            });

            reply =
`📅 Check-in saved.

Please enter check-out date.

Example:
28 July`;

            break;

        case 4:

            if (
                !isCheckoutAfterCheckin(
                    bookingFlow.data.checkIn,
                    userMessage
                )
            ) {

                addAIMessage(
`❌ Check-out must be after check-in.

Example:
28 July

Or type "cancel".`
                );

                return;

            }

            setBookingFlow({
                ...bookingFlow,
                step: 5,
                data: {
                    ...bookingFlow.data,
                    checkOut: userMessage
                }
            });

            reply = "👥 How many guests will stay?";

            break;

        default:

            // Keep your remaining cases (5,6,7,8,9)
            // exactly as they are now.

            break;

    }

    addAIMessage(reply);

    return;

}



/*
=================================
AI ROUTER
=================================
*/



const route =
aiRouter(userMessage);





if(route.type==="booking"){



setBookingFlow(route.data);



addAIMessage(route.reply);



return;


}






if(route.reply){


addAIMessage(route.reply);


return;


}







/*
=================================
GROQ FALLBACK
=================================
*/


setTyping(true);



try{


const response =
await fetch(
"http://localhost:5000/api/chat",
{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:JSON.stringify({

message:userMessage,

history

})

}
);



const data =
await response.json();



setHistory((prev)=>[

...prev,

{

role:"user",

content:userMessage

},

{

role:"assistant",

content:data.reply

}

]);



addAIMessage(data.reply);



}

catch(error){


console.log(error);


addAIMessage(
"⚠️ StayWise AI is unavailable."
);


}



setTyping(false);



};
return (

<section className="ai-section">


<div className="ai-container">



<div className="heading-grid">


<div className="badge">

<FaStar />

AI Concierge

</div>



<h2>

Meet <span>StayWise AI</span>

</h2>



<p>

Your Smart Hotel Ecosystem Assistant.

Helping guests and hotel managers with intelligent AI support.

</p>



</div>






<div className="assistant-card">



{/* LEFT PANEL */}


<div className="assistant-left">



<div className="robot-wrapper">

<div className="robot-glow"></div>


<div className="robot">


<div className="robot-head">

<div className="robot-face">

<span className="eye"></span>

<span className="eye"></span>

</div>

</div>


<div className="robot-body"></div>


<div className="robot-shadow"></div>


</div>


</div>







<div className="assistant-profile">


<span className="profile-status">

● Online

</span>



<h3>

StayWise AI

</h3>



<p className="robot-desc">

AI platform helping hotels manage operations and guests.

</p>


</div>






<div className="ai-feature-grid">


{

features.map((feature)=>(


<div

key={feature.id}

className={
`ai-feature-card ${
selected.id===feature.id
?
"active"
:
""
}`
}


onClick={()=>{


setSelected(feature);



let msg="";



switch(feature.id){



case "room":

setBookingFlow(startBooking());


msg=
`
🏨 Booking Assistant Activated.

Please select hotel name.
`;

break;




case "manager":

msg=
`
📊 Manager AI Activated.

Ask me:

• Occupancy
• Revenue
• Pricing
• Inventory
• Housekeeping

`;

break;




case "food":

msg=
`
🍽 Dining Assistant Activated.

Ask about restaurant and menus.
`;

break;




case "service":

msg=
`
🛎 Service Assistant Activated.

Ask about hotel services.
`;

break;




case "nearby":

msg=
`
📍 Travel Assistant Activated.

Ask about nearby attractions.
`;

break;



}


addAIMessage(msg);


}}

>


<div className="ai-feature-icon">

{feature.icon}

</div>



<div className="ai-feature-info">


<h4>

{feature.title}

</h4>



<span>

{feature.subtitle}

</span>


</div>



<FaArrowRight className="ai-feature-arrow"/>


</div>


))


}


</div>



</div>








{/* RIGHT CHAT PANEL */}



<div className="assistant-right">



<div className="chat-header">


<div className="chat-title">


<FaRobot />

<div>


<h3>

StayWise AI

</h3>



<span>

Smart Hotel Ecosystem AI

</span>


</div>


</div>



<div className="online-dot"></div>


</div>








<div

className="chat-body"

ref={chatBodyRef}

>


{

messages.map((msg,index)=>(


<div

key={index}

className={
msg.sender==="ai"
?
"ai-chat-message"
:
"user-chat-message"
}

>


{

msg.sender==="ai" &&

<div className="ai-avatar">

🤖

</div>

}




<div

className={
msg.sender==="ai"
?
"ai-message-content"
:
"user-message-content"
}

>


{msg.text}


</div>



</div>


))


}







{

typing &&

<div className="ai-chat-message">


<div className="ai-avatar">

🤖

</div>



<div className="ai-message-content typing">

StayWise AI is typing...

</div>


</div>


}



</div>








<div className="ai-chat-input">


<input


type="text"


placeholder="Ask StayWise AI anything..."


value={input}



onChange={(e)=>setInput(e.target.value)}



onKeyDown={(e)=>{

if(e.key==="Enter"){

handleSend();

}

}}


/>



<button

className="ai-send-btn"

onClick={handleSend}

>

<FaPaperPlane/>

</button>


</div>








<div className="chat-footer">


<FaCheckCircle/>


<span>

Smart Hotel Ecosystem AI • Available 24/7

</span>


</div>




</div>







</div>



</div>


</section>

);


}



export default AISection;