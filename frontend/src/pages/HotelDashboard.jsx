import "./HotelDashboard.css";

import { useState } from "react";

import DashboardAI from "../components/DashboardAI";

import {
  LayoutDashboard,
  BedDouble,
  CalendarCheck,
  DollarSign,
  Bot,
  BarChart3,
  Settings,
  Bell,
  Users,
  Sparkles,
  Star,
  TrendingUp,
  X,
  ClipboardList,
  IndianRupee,
  UserCheck,
  MessageSquare,
} from "lucide-react";


import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



function HotelDashboard() {


  const [activePage, setActivePage] = useState("overview");

  const [showNotifications, setShowNotifications] = useState(false);



  // ================================
  // AI NOTIFICATIONS DATA
  // ================================


  const notifications = [

    {
      title: "High Demand Alert",
      message:
        "AI predicts 96% occupancy this weekend. Increase Deluxe Room pricing by 10%.",
      time: "2 min ago",
      type: "revenue",
    },


    {
      title: "VIP Guest Arrival",
      message:
        "5 premium guests are arriving tomorrow. Prepare welcome packages.",
      time: "15 min ago",
      type: "guest",
    },


    {
      title: "Housekeeping Update",
      message:
        "6 rooms require cleaning before today's check-in schedule.",
      time: "30 min ago",
      type: "room",
    },


    {
      title: "Inventory Warning",
      message:
        "Towels and coffee supplies are running low.",
      time: "1 hour ago",
      type: "inventory",
    },


    {
      title: "Positive Reviews",
      message:
        "AI detected increasing guest satisfaction scores.",
      time: "2 hours ago",
      type: "review",
    },


  ];





  // ================================
  // CHART DATA
  // ================================



  const revenueData = [

    {
      month: "Jan",
      revenue: 120000,
    },

    {
      month: "Feb",
      revenue: 180000,
    },


    {
      month: "Mar",
      revenue: 240000,
    },


    {
      month: "Apr",
      revenue: 210000,
    },


    {
      month: "May",
      revenue: 300000,
    },

  ];





  const roomData = [

    {
      room: "Deluxe",
      revenue: 450000,
    },


    {
      room: "Suite",
      revenue: 700000,
    },


    {
      room: "Premium",
      revenue: 550000,
    },

  ];





  const bookingData = [

    {
      month: "Jan",
      bookings: 80,
    },


    {
      month: "Feb",
      bookings: 120,
    },


    {
      month: "Mar",
      bookings: 150,
    },


    {
      month: "Apr",
      bookings: 190,
    },


    {
      month: "May",
      bookings: 240,
    },

  ];





  // ================================
  // DASHBOARD START
  // ================================



  return (

    <div className="hotel-dashboard">



      {/* ================= SIDEBAR ================= */}



      <aside className="dashboard-sidebar">



        <div className="dashboard-logo">


          <Sparkles size={28}/>


          <h2>
            StayWise AI
          </h2>


        </div>





        <nav>



          <a
            className={
              activePage === "overview"
              ? "active"
              : ""
            }

            onClick={() =>
              setActivePage("overview")
            }
          >

            <LayoutDashboard size={18}/>

            Overview

          </a>





          <a
            className={
              activePage === "rooms"
              ? "active"
              : ""
            }

            onClick={() =>
              setActivePage("rooms")
            }
          >

            <BedDouble size={18}/>

            Rooms

          </a>





          <a
            className={
              activePage === "bookings"
              ? "active"
              : ""
            }

            onClick={() =>
              setActivePage("bookings")
            }
          >

            <CalendarCheck size={18}/>

            Bookings

          </a>

          <a
            className={
              activePage === "revenue"
              ? "active"
              : ""
            }

            onClick={() =>
              setActivePage("revenue")
            }
          >

            <DollarSign size={18}/>

            Revenue

          </a>





          <a
            className={
              activePage === "ai"
              ? "active"
              : ""
            }

            onClick={() =>
              setActivePage("ai")
            }
          >

            <Bot size={18}/>

            AI Assistant

          </a>





          <a
            className={
              activePage === "analytics"
              ? "active"
              : ""
            }

            onClick={() =>
              setActivePage("analytics")
            }
          >

            <BarChart3 size={18}/>

            Analytics

          </a>





          <a
            className={
              activePage === "reviews"
              ? "active"
              : ""
            }

            onClick={() =>
              setActivePage("reviews")
            }
          >

            <Star size={18}/>

            Reviews

          </a>





          <a
            className={
              activePage === "settings"
              ? "active"
              : ""
            }

            onClick={() =>
              setActivePage("settings")
            }
          >

            <Settings size={18}/>

            Settings

          </a>




        </nav>



      </aside>







      {/* ================= MAIN DASHBOARD ================= */}



      <main className="dashboard-main">





        {/* ================= HEADER ================= */}



        <header className="dashboard-header">



          <div>


            <h1>
              Good Morning, Hotel Owner 👋
            </h1>



            <p>
              Welcome back! Here's your hotel performance
              powered by StayWise AI.
            </p>



          </div>






          {/* ================= NOTIFICATION ================= */}



          <div className="notification-wrapper">



            <button

              className="notification-btn"

              onClick={() =>
                setShowNotifications(
                  !showNotifications
                )
              }

            >


              <Bell size={20}/>



              <span className="notification-count">

                {notifications.length}

              </span>


            </button>






            {
              showNotifications &&


              <div className="notification-panel">



                <div className="notification-header">



                  <h3>
                    Notifications
                  </h3>





                  <button

                    className="close-btn"

                    onClick={() =>
                      setShowNotifications(false)
                    }

                  >

                    <X size={18}/>


                  </button>




                </div>







                {
                  notifications.map(

                    (item,index)=>(


                      <div

                        key={index}

                        className="notification-item"

                      >



                        <div className="notification-icon">


                          {
                            item.type === "guest" &&
                            <UserCheck size={18}/>
                          }


                          {
                            item.type === "review" &&
                            <MessageSquare size={18}/>
                          }


                          {
                            item.type === "revenue" &&
                            <IndianRupee size={18}/>
                          }


                          {
                            item.type === "room" &&
                            <BedDouble size={18}/>
                          }


                          {
                            item.type === "inventory" &&
                            <ClipboardList size={18}/>
                          }


                        </div>





                        <div>


                          <h4>
                            {item.title}
                          </h4>



                          <p>
                            {item.message}
                          </p>



                          <span>
                            {item.time}
                          </span>



                        </div>



                      </div>



                    )

                  )
                }



              </div>


            }





          </div>




        </header>






        {/* ================= CONTENT AREA ================= */}

        {/* =====================================================
              OVERVIEW PAGE
        ====================================================== */}



        {
          activePage === "overview" &&


          <>



          {/* ================= DASHBOARD STATS ================= */}



          <section className="dashboard-stats">





            <div className="dashboard-card">


              <Users size={28}/>


              <h3>
                Occupancy Rate
              </h3>


              <strong>
                92%
              </strong>


              <p>
                ▲ 8% higher than last month
              </p>


            </div>







            <div className="dashboard-card">


              <CalendarCheck size={28}/>


              <h3>
                Total Bookings
              </h3>


              <strong>
                128
              </strong>


              <p>
                24 new bookings today
              </p>


            </div>







            <div className="dashboard-card">


              <DollarSign size={28}/>


              <h3>
                Revenue
              </h3>


              <strong>
                ₹18.4L
              </strong>


              <p>
                ▲ 12% monthly growth
              </p>


            </div>







            <div className="dashboard-card">


              <Star size={28}/>


              <h3>
                Guest Rating
              </h3>


              <strong>
                4.8 / 5
              </strong>


              <p>
                Based on 1,246 reviews
              </p>


            </div>





          </section>




          {/* ================= AI MANAGER ================= */}



          <section className="ai-manager-card">



            <div className="ai-manager-header">



              <Bot size={30}/>



              <div>


                <h2>
                  StayWise AI Manager
                </h2>



                <p>
                  AI continuously monitors your hotel
                  and suggests smart decisions.
                </p>


              </div>



            </div>








            <div className="ai-alerts-list">





              <div className="ai-alert success">


                <span>
                  📈
                </span>


                <p>

                  High demand expected this weekend.
                  Increase room prices by
                  
                  <strong>
                    10%
                  </strong>

                </p>


              </div>







              <div className="ai-alert warning">


                <span>
                  🛎️
                </span>


                <p>

                  5 VIP guests arriving tomorrow.
                  Prepare premium welcome kits.

                </p>


              </div>







              <div className="ai-alert info">


                <span>
                  🏨
                </span>


                <p>

                  Deluxe Rooms are almost full.
                  Open Premium Rooms for better revenue.

                </p>


              </div>







              <div className="ai-alert review">


                <span>
                  ⭐
                </span>


                <p>

                  AI generated replies are ready
                  for new guest reviews.

                </p>


              </div>





            </div>




          </section>






          </>

        }









        {/* =====================================================
              ROOMS PAGE
        ====================================================== */}





        {
          activePage === "rooms" &&


          <section className="dashboard-content-page">





            <h2>
              Room Management
            </h2>






            <div className="room-grid">





              <div className="room-management-card">


                <BedDouble size={26}/>


                <h3>
                  Room 201
                </h3>



                <p>
                  Deluxe Room
                </p>




                <p>

                  Status:

                  <span className="status checked">

                    Available

                  </span>


                </p>





                <h4>
                  ₹5200 / night
                </h4>





                <div className="ai-suggestion">

                  🤖 AI Suggestion:
                  Increase price by 8%

                </div>



              </div>








              <div className="room-management-card">


                <BedDouble size={26}/>


                <h3>
                  Room 305
                </h3>



                <p>
                  Premium Suite
                </p>





                <p>

                  Status:

                  <span className="status upcoming">

                    Occupied

                  </span>


                </p>





                <h4>
                  ₹6800 / night
                </h4>





                <div className="ai-suggestion">

                  🤖 AI Suggestion:
                  High demand expected tomorrow

                </div>



              </div>









              <div className="room-management-card">


                <BedDouble size={26}/>


                <h3>
                  Room 410
                </h3>



                <p>
                  Luxury Suite
                </p>





                <p>

                  Status:

                  <span className="status checked">

                    Cleaning

                  </span>


                </p>





                <h4>
                  ₹8500 / night
                </h4>





                <div className="ai-suggestion">

                  🤖 AI Suggestion:
                  Offer premium package

                </div>



              </div>





            </div>





          </section>


        }







        {/* =====================================================
              BOOKINGS PAGE
        ====================================================== */}



        {
          activePage === "bookings" &&


          <section className="dashboard-content-page">



            <h2>
              Booking Management
            </h2>





            <div className="dashboard-stats">



              <div className="dashboard-card">


                <CalendarCheck size={28}/>


                <h3>
                  Today's Check-ins
                </h3>



                <strong>
                  12
                </strong>


              </div>





              <div className="dashboard-card">


                <Users size={28}/>


                <h3>
                  Today's Check-outs
                </h3>



                <strong>
                  8
                </strong>


              </div>





              <div className="dashboard-card">


                <Bell size={28}/>


                <h3>
                  Pending Bookings
                </h3>



                <strong>
                  5
                </strong>


              </div>





            </div>






            {/* ================= RECENT BOOKINGS TABLE ================= */}





            <div className="recent-bookings">



              <h2>
                Recent Reservations
              </h2>





              <table>


                <thead>


                  <tr>


                    <th>
                      Guest
                    </th>


                    <th>
                      Room
                    </th>


                    <th>
                      Check-in
                    </th>


                    <th>
                      Status
                    </th>


                  </tr>


                </thead>






                <tbody>



                  <tr>


                    <td>
                      Amit Sharma
                    </td>


                    <td>
                      Deluxe Room
                    </td>


                    <td>
                      10 Aug 2026
                    </td>


                    <td className="status confirmed">

                      Confirmed

                    </td>


                  </tr>






                  <tr>


                    <td>
                      Priya Patil
                    </td>


                    <td>
                      Premium Suite
                    </td>


                    <td>
                      12 Aug 2026
                    </td>


                    <td className="status confirmed">

                      Confirmed

                    </td>


                  </tr>






                  <tr>


                    <td>
                      Rahul Mehta
                    </td>


                    <td>
                      Deluxe Room
                    </td>


                    <td>
                      14 Aug 2026
                    </td>


                    <td className="status pending">

                      Pending

                    </td>


                  </tr>



                </tbody>




              </table>




            </div>





          </section>



        }









        {/* =====================================================
              REVENUE PAGE
        ====================================================== */}






        {
          activePage === "revenue" &&




          <section className="dashboard-content-page">






            <h2>
              Revenue Analytics
            </h2>







            <div className="chart-box">



              <h3>
                Monthly Revenue
              </h3>






              <ResponsiveContainer
                width="100%"
                height={320}
              >



                <LineChart
                  data={revenueData}
                >



                  <CartesianGrid
                    strokeDasharray="3 3"
                  />



                  <XAxis
                    dataKey="month"
                  />



                  <YAxis />



                  <Tooltip />






                  <Line

                    type="monotone"

                    dataKey="revenue"

                    stroke="#D4AF37"

                    strokeWidth={3}

                  />




                </LineChart>



              </ResponsiveContainer>




            </div>









            <div className="chart-box">



              <h3>
                Revenue By Room Type
              </h3>







              <ResponsiveContainer
                width="100%"
                height={320}
              >



                <BarChart
                  data={roomData}
                >



                  <CartesianGrid
                    strokeDasharray="3 3"
                  />



                  <XAxis
                    dataKey="room"
                  />



                  <YAxis />



                  <Tooltip />






                  <Bar

                    dataKey="revenue"

                    fill="#D4AF37"

                  />




                </BarChart>



              </ResponsiveContainer>






            </div>







          </section>




        }








        {/* =====================================================
              AI ASSISTANT PAGE
        ====================================================== */}





        {
          activePage === "ai" &&



          <section className="dashboard-content-page">



            <h2>
              🤖 StayWise AI Assistant
            </h2>





            <DashboardAI />




          </section>



        }










        {/* =====================================================
              ANALYTICS PAGE
        ====================================================== */}




        {
          activePage === "analytics" &&




          <section className="dashboard-content-page">






            <h2>
              Advanced Analytics
            </h2>







            <div className="analytics-summary">





              <div className="analytics-card">



                <TrendingUp size={32}/>



                <h3>
                  AI Prediction
                </h3>




                <p>

                  Next week's occupancy:

                  <strong>
                    96%
                  </strong>

                </p>



              </div>







              <div className="analytics-card">



                <Users size={32}/>



                <h3>
                  Guest Growth
                </h3>




                <p>

                  Monthly increase:

                  <strong>
                    18%
                  </strong>

                </p>



              </div>







              <div className="analytics-card">



                <DollarSign size={32}/>



                <h3>
                  Revenue Forecast
                </h3>




                <p>

                  Expected:

                  <strong>
                    ₹22L
                  </strong>

                </p>



              </div>







            </div>









            <div className="chart-box">



              <h3>
                Booking Trend
              </h3>







              <ResponsiveContainer

                width="100%"

                height={320}

              >



                <LineChart

                  data={bookingData}

                >





                  <CartesianGrid

                    strokeDasharray="3 3"

                  />





                  <XAxis

                    dataKey="month"

                  />





                  <YAxis />





                  <Tooltip />








                  <Line


                    type="monotone"


                    dataKey="bookings"


                    stroke="#D4AF37"


                    strokeWidth={3}


                  />





                </LineChart>





              </ResponsiveContainer>






            </div>







          </section>




        }












        {/* =====================================================
              REVIEWS PAGE
        ====================================================== */}


      {
  activePage === "reviews" &&


  <section className="dashboard-content-page">



    <h2>
      Guest Reviews
    </h2>




    <div className="feedback-card">


      <div className="feedback-header">


        <div className="rating-box">


          <span>
            4.8
          </span>


          <span className="star">
            ★
          </span>


          <small>
            Guest Rating
          </small>


        </div>





        <div>


          <h2>
            AI Guest Feedback Summary
          </h2>



          <p>
            Analyzed from recent guest reviews
          </p>



        </div>



      </div>






      <div className="feedback-content">



        <div className="feedback-positive">



          <h3>
            😊 Guests Love
          </h3>




          <div className="feedback-item">

            ✓ Clean and comfortable rooms

          </div>




          <div className="feedback-item">

            ✓ Friendly hotel staff

          </div>




          <div className="feedback-item">

            ✓ Fast check-in experience

          </div>




        </div>







        <div className="feedback-negative">



          <h3>
            ⚠ Need Improvement
          </h3>





          <div className="issue-item">

            WiFi speed

          </div>




          <div className="issue-item">

            Breakfast timing

          </div>




          <div className="issue-item">

            Parking availability

          </div>




        </div>




      </div>








      <div className="ai-suggestion">


        🤖 <b>
          AI Suggestion:
        </b>



        Improve WiFi infrastructure to increase guest satisfaction.



      </div>





    </div>





  </section>



}



        {/* =====================================================
              SETTINGS PAGE
        ====================================================== */}






        {
          activePage === "settings" &&



          <section className="dashboard-content-page">





            <h2>
              Settings
            </h2>








            <div className="settings-card">







              <div className="settings-item">


                <Settings size={26}/>


                <div>


                  <h3>
                    Hotel Profile
                  </h3>



                  <p>
                    Manage hotel details,
                    rooms and preferences.
                  </p>



                </div>



              </div>









              <div className="settings-item">


                <Bot size={26}/>


                <div>


                  <h3>
                    AI Preferences
                  </h3>



                  <p>
                    Configure AI suggestions,
                    pricing and predictions.
                  </p>



                </div>



              </div>









              <div className="settings-item">


                <Bell size={26}/>


                <div>


                  <h3>
                    Notification Settings
                  </h3>



                  <p>
                    Manage alerts,
                    updates and reminders.
                  </p>



                </div>



              </div>








            </div>






          </section>





        }









        {/* =====================================================
              DEFAULT AI INSIGHT PANEL
        ====================================================== */}





        {
          activePage !== "overview" &&
          activePage !== "rooms" &&
          activePage !== "bookings" &&
          activePage !== "revenue" &&
          activePage !== "ai" &&
          activePage !== "analytics" &&
          activePage !== "reviews" &&
          activePage !== "settings" &&




          <section className="dashboard-content-page">



            <h2>
              StayWise AI Dashboard
            </h2>



            <p>
              Select a module from the sidebar.
            </p>



          </section>



        }







      </main>





    </div>



  );





}



export default HotelDashboard;