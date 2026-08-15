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
    FaConciergeBell,
    FaUtensils,
    FaMapMarkedAlt,
    FaArrowRight
} from "react-icons/fa";

import {
    aiRouter
} from "../ai/aiRouter";


const features = [

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

I help hotels manage operations and help guests with hotel services and information.

How may I assist you today?`

        }

    ]);


    const [history,setHistory] =
    useState([]);


    const [typing,setTyping] =
    useState(false);


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
        AI ROUTER
        =================================
        */

        const route =
        aiRouter(userMessage);


        /*
        =================================
        IGNORE BOOKING ROUTES
        =================================
        */

        if(
            route.type !== "booking" &&
            route.reply
        ){

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
                "https://staywise-ai-backend-6vue.onrender.com/api/chat",
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


            addAIMessage(
                data.reply
            );


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


                                                case "food":

                                                    msg =
`
🍽 Dining Assistant Activated.

Ask about restaurant and menus.
`;

                                                    break;



                                                case "service":

                                                    msg =
`
🛎 Service Assistant Activated.

Ask about hotel services.
`;

                                                    break;



                                                case "nearby":

                                                    msg =
`
📍 Travel Assistant Activated.

Ask about nearby attractions.
`;

                                                    break;


                                                default:

                                                    msg =
`
How can I help you today?
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


                                onChange={(e)=>
                                    setInput(e.target.value)
                                }


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