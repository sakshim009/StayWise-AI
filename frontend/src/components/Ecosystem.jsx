import { useState } from "react";
import "./Ecosystem.css";
import {
  BedDouble,
  ConciergeBell,
  UtensilsCrossed,
  BrushCleaning,
  Package,
  BarChart3,
  BrainCircuit,
} from "lucide-react";

const ecosystemData = {
  booking: {
    tag: "BOOKING",
    title: "Today's Booking Overview",
    stats: [
      { value: "124", label: "Today's Check-ins" },
      { value: "38", label: "Available Rooms" },
      { value: "Active", label: "Dynamic Pricing" },
    ],
    aiTitle: "AI Recommendation",
    aiMessage:
      "High demand detected this weekend. Increase Deluxe Room pricing by 12% to maximize revenue.",
    metricLabel: "Revenue Opportunity",
    metricValue: "+12%",
  },

  reception: {
    tag: "RECEPTION",
    title: "Reception Overview",
    stats: [
      { value: "18", label: "Check-ins" },
      { value: "7", label: "Check-outs" },
      { value: "3 min", label: "Avg Response" },
    ],
    aiTitle: "Upcoming Arrivals",
    aiMessage:
      "Five guests are expected within the next 30 minutes. Prepare express check-in.",
    metricLabel: "Expected Waiting Time",
    metricValue: "3 min",
  },

  restaurant: {
    tag: "RESTAURANT",
    title: "Restaurant Operations",
    stats: [
      { value: "21", label: "Today's Orders" },
      { value: "5", label: "Pending Orders" },
      { value: "18 min", label: "Avg Preparation" },
    ],
    aiTitle: "Kitchen Insight",
    aiMessage:
      "Dinner rush expected between 7:00 PM and 9:00 PM. Assign one additional staff member.",
    metricLabel: "Expected Rush",
    metricValue: "High",
  },

  housekeeping: {
    tag: "HOUSEKEEPING",
    title: "Housekeeping Status",
    stats: [
      { value: "8", label: "Pending Rooms" },
      { value: "42", label: "Completed Today" },
      { value: "96%", label: "Efficiency" },
    ],
    aiTitle: "Priority Task",
    aiMessage:
      "Room 302 requires priority cleaning before a VIP guest arrives.",
    metricLabel: "Priority Rooms",
    metricValue: "8",
  },

  inventory: {
    tag: "INVENTORY",
    title: "Inventory Management",
    stats: [
      { value: "92%", label: "Stock Level" },
      { value: "6", label: "Low Stock Items" },
      { value: "24", label: "Deliveries" },
    ],
    aiTitle: "Low Stock Alert",
    aiMessage:
      "Coffee capsules and premium towels are below the reorder threshold.",
    metricLabel: "Items to Restock",
    metricValue: "6",
  },

  analytics: {
    tag: "ANALYTICS",
    title: "Business Analytics",
    stats: [
      { value: "₹2.4L", label: "Today's Revenue" },
      { value: "89%", label: "Occupancy" },
      { value: "4.8★", label: "Guest Rating" },
    ],
    aiTitle: "Business Insight",
    aiMessage:
      "Weekend occupancy is projected to reach 94%. Premium room pricing can be increased.",
    metricLabel: "Revenue Forecast",
    metricValue: "₹3.1L",
  },
};

export default function Ecosystem() {
  const [active, setActive] = useState("booking");

  const current = ecosystemData[active];

  return (
    <section className="ecosystem-section">
      <div className="ecosystem-container">

        {/* Heading */}

        <div className="section-heading">
          <span className="section-tag">
            CONNECTED ECOSYSTEM
          </span>

          <h2>
            One Platform.
            <br />
            <span className="highlight">
              Every Department
            </span>{" "}
            Connected.
          </h2>

          <p>
            From booking to housekeeping, StayWise AI
            intelligently synchronizes every hotel
            operation through one seamless platform.
          </p>
        </div>

        {/* Main Layout */}

        <div className="ecosystem-layout">

          {/* Left Side */}

          <div className="ecosystem-network">

            <div className="eco-grid">
                              {/* Booking */}
              <div
                className={`department booking ${
                  active === "booking" ? "active" : ""
                }`}
                onClick={() => setActive("booking")}
              >
                <BedDouble size={28} />
                <h4>Booking</h4>
                <span>AI Monitoring</span>
              </div>

              {/* Reception */}
              <div
                className={`department reception ${
                  active === "reception" ? "active" : ""
                }`}
                onClick={() => setActive("reception")}
              >
                <ConciergeBell size={28} />
                <h4>Reception</h4>
                <span>Smart Check-In</span>
              </div>

              {/* Restaurant */}
              <div
                className={`department restaurant ${
                  active === "restaurant" ? "active" : ""
                }`}
                onClick={() => setActive("restaurant")}
              >
                <UtensilsCrossed size={28} />
                <h4>Restaurant</h4>
                <span>AI Optimized</span>
              </div>

              {/* AI Core */}
              <div className="ai-core">
                <BrainCircuit size={42} />
                <h3>StayWise AI</h3>
                <p>Smart Hotel Ecosystem</p>
              </div>

              {/* Housekeeping */}
              <div
                className={`department housekeeping ${
                  active === "housekeeping" ? "active" : ""
                }`}
                onClick={() => setActive("housekeeping")}
              >
                <BrushCleaning size={28} />
                <h4>Housekeeping</h4>
                <span>Live Status</span>
              </div>

              {/* Inventory */}
              <div
                className={`department inventory ${
                  active === "inventory" ? "active" : ""
                }`}
                onClick={() => setActive("inventory")}
              >
                <Package size={28} />
                <h4>Inventory</h4>
                <span>Auto Tracking</span>
              </div>

              {/* Analytics */}
              <div
                className={`department analytics ${
                  active === "analytics" ? "active" : ""
                }`}
                onClick={() => setActive("analytics")}
              >
                <BarChart3 size={28} />
                <h4>Analytics</h4>
                <span>Real-Time</span>
              </div>

            </div>
          </div>

          {/* Right Panel */}

          <div className="info-panel">

            <span className="panel-tag">
              {current.tag}
            </span>

            <h3>{current.title}</h3>

            <div className="panel-stats">
              {current.stats.map((item, index) => (
                <div key={index}>
                  <h4>{item.value}</h4>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="ai-insight">

              <div className="ai-header">
                <BrainCircuit size={20} />
                <h4>{current.aiTitle}</h4>
              </div>

              <p>{current.aiMessage}</p>

              <div className="confidence">
                <span>{current.metricLabel}</span>
                <strong>{current.metricValue}</strong>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
        