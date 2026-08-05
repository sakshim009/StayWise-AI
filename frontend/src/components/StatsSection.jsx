import "./StatsSection.css";
import {
  Hotel,
  CalendarCheck,
  ClipboardCheck,
  Utensils,
  AlertTriangle,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    icon: <Hotel size={30} />,
    value: "128",
    label: "Bookings",
    description: "Today's reservations",
  },
  {
    icon: <CalendarCheck size={30} />,
    value: "92%",
    label: "Occupancy",
    description: "Current room usage",
  },
  {
    icon: <ClipboardCheck size={30} />,
    value: "18",
    label: "Tasks",
    description: "Housekeeping activities",
  },
  {
    icon: <Utensils size={30} />,
    value: "34",
    label: "Orders",
    description: "Restaurant operations",
  },
  {
    icon: <AlertTriangle size={30} />,
    value: "5",
    label: "Alerts",
    description: "Inventory monitoring",
  },
  {
    icon: <IndianRupee size={30} />,
    value: "₹2.8L",
    label: "Revenue",
    description: "Today's earnings",
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section">

      <div className="stats-container">

        <div className="stats-heading">

          <span className="section-tag">
            REAL-TIME INSIGHTS
          </span>

          <h2>
            LIVE HOTEL <span>OVERVIEW</span>
          </h2>

          <p>
            Monitor your hotel in real time with AI.
          </p>

        </div>


        <div className="stats-grid">

          {stats.map((item, index) => (

            <div className="stat-card" key={index}>

              <span className="ai-status">
                AI
              </span>


              <div className="stat-icon">
                {item.icon}
              </div>


              <div className="stat-content">

                <h3>
                  {item.value}
                </h3>

                <span>
                  {item.label}
                </span>

                <small>
                  {item.description}
                </small>

              </div>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}