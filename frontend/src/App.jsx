import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AIAssistant from "./pages/AIAssistant";
import DashboardPage from "./pages/DashboardPage";
import About from "./pages/About";

import ScrollToHash from "./components/ScrollToHash";
import NotFound from "./pages/NotFound";

import ViewRoom from "./pages/ViewRoom";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import BookingPass from "./pages/BookingPass";


// Login Page
import Login from "./pages/Login";


// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";



// Hotel Owner Pages
import HotelRegister from "./pages/HotelRegister";
import HotelLogin from "./pages/HotelLogin";
import HotelSetup from "./pages/HotelSetup";
import HotelDashboard from "./pages/HotelDashboard";





function App() {


  return (


    <BrowserRouter>


      <ScrollToHash />



      <Routes>




        {/* =====================
              PUBLIC PAGES
        ===================== */}



        <Route

          path="/"

          element={<Home />}

        />





        <Route

          path="/login"

          element={<Login />}

        />






        {/* ABOUT PAGE */}

        <Route

          path="/about"

          element={<About />}

        />








        {/* =====================
              PROTECTED GUEST PAGES
        ===================== */}





        <Route

          path="/ai"

          element={

            <ProtectedRoute>

              <AIAssistant />

            </ProtectedRoute>

          }

        />







        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <DashboardPage />

            </ProtectedRoute>

          }

        />








        <Route

          path="/room/:id"

          element={

            <ProtectedRoute>

              <ViewRoom />

            </ProtectedRoute>

          }

        />








        <Route

          path="/booking"

          element={

            <ProtectedRoute>

              <Booking />

            </ProtectedRoute>

          }

        />








        <Route

          path="/booking-confirmation"

          element={

            <ProtectedRoute>

              <BookingConfirmation />

            </ProtectedRoute>

          }

        />








        <Route

          path="/booking-pass"

          element={

            <ProtectedRoute>

              <BookingPass />

            </ProtectedRoute>

          }

        />









        {/* =====================
              HOTEL OWNER FLOW
        ===================== */}





        <Route

          path="/register-hotel"

          element={<HotelRegister />}

        />







        <Route

          path="/hotel-login"

          element={<HotelLogin />}

        />







        <Route

          path="/hotel-setup"

          element={<HotelSetup />}

        />







        <Route

          path="/hotel-dashboard"

          element={

            <ProtectedRoute>

              <HotelDashboard />

            </ProtectedRoute>

          }

        />









        {/* 404 */}

        <Route

          path="*"

          element={<NotFound />}

        />




      </Routes>


    </BrowserRouter>


  );


}


export default App;