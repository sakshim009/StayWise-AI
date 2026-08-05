import "./DashboardSection.css";

import { useState } from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

import {
  IndianRupee,
  CalendarCheck,
  Hotel,
  Users,
  ChevronDown,
} from "lucide-react";

import {
  revenueMonthData,
  revenueWeekData,
  roomData,
  bookingData,
} from "./dashboardData";

export default function DashboardSection() {
  const [timeFilter, setTimeFilter] = useState("This Month");
  const [showDropdown, setShowDropdown] = useState(false);
  const [chartData, setChartData] = useState(revenueMonthData);

  return (
    <section className="dashboardSection">

      {/* ================= HEADER ================= */}

      <div className="dashboardHeader">

        <span className="dashboardBadge">
          STAYWISE AI SYSTEM
        </span>

        <h2 className="dashboardTitle">
          One <span>Platform.</span>
          <br />
          Complete Management.
        </h2>

        <p className="dashboardSubtitle">
          Monitor hotels, users, bookings and platform performance
          from one centralized dashboard.
        </p>

      </div>

      {/* ================= DASHBOARD ================= */}

      <div className="dashboardContainer">

        {/* ================= KPI CARDS ================= */}

        <div className="dashboardKPIs">

          {/* Total Hotels */}

          <div className="kpiCard">
            <div className="kpiTop">
              <Hotel size={22} />
              <span>Total Hotels</span>
            </div>

            <h3>18</h3>
            <small>+2 Added This Month</small>
          </div>

          {/* Total Users */}

          <div className="kpiCard">
            <div className="kpiTop">
              <Users size={22} />
              <span>Total Users</span>
            </div>

            <h3>2,540</h3>
            <small>38 New Users</small>
          </div>

          {/* Total Bookings */}

          <div className="kpiCard">
            <div className="kpiTop">
              <CalendarCheck size={22} />
              <span>Total Bookings</span>
            </div>

            <h3>1,286</h3>
            <small>86 Today</small>
          </div>

          {/* Platform Revenue */}

          <div className="kpiCard">
            <div className="kpiTop">
              <IndianRupee size={22} />
              <span>Platform Revenue</span>
            </div>

            <h3>₹24.5L</h3>
            <small>▲ +12% this month</small>
          </div>

        </div>
                {/* ================= Platform Booking Trend ================= */}

        <div className="chartCard revenueCard">

          <div className="cardHeader">

            <div>
              <h4>Platform Booking Trend</h4>
              <p>Bookings Across All Hotels</p>
            </div>

            <div className="dropdownWrapper">

              <button
                className="filterButton"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {timeFilter}
                <ChevronDown size={16} />
              </button>

              {showDropdown && (

                <div className="dropdownMenu">

                  <div
                    className={`dropdownItem ${
                      timeFilter === "This Week" ? "active" : ""
                    }`}
                    onClick={() => {
                      setTimeFilter("This Week");
                      setChartData(revenueWeekData);
                      setShowDropdown(false);
                    }}
                  >
                    This Week
                  </div>

                  <div
                    className={`dropdownItem ${
                      timeFilter === "This Month" ? "active" : ""
                    }`}
                    onClick={() => {
                      setTimeFilter("This Month");
                      setChartData(revenueMonthData);
                      setShowDropdown(false);
                    }}
                  >
                    This Month
                  </div>

                </div>

              )}

            </div>

          </div>

          <div className="chartArea">

            <ResponsiveContainer width="100%" height={320}>

              <AreaChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 20,
                  left: -15,
                  bottom: 0,
                }}
              >

                <defs>

                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#D4AF37"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="95%"
                      stopColor="#D4AF37"
                      stopOpacity={0.03}
                    />

                  </linearGradient>

                </defs>

                <CartesianGrid
                  stroke="#ECECEC"
                  strokeDasharray="4 4"
                  vertical={false}
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  cursor={{
                    stroke: "#D4AF37",
                    strokeWidth: 1,
                    strokeDasharray: "4 4",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#D4AF37"
                  strokeWidth={3}
                  fill="url(#revenueGradient)"
                  isAnimationActive={false}
                  activeDot={{
                    r: 5,
                    fill: "#D4AF37",
                    stroke: "#fff",
                    strokeWidth: 2,
                  }}
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>
                {/* ================= Bottom Charts ================= */}

        <div className="chartGrid">

          {/* ===== Hotels by City ===== */}

          <div className="chartCard">

            <h4>Hotels by City</h4>

            <div className="roomChart">

              <div className="donutWrapper">

                <ResponsiveContainer width="100%" height={220}>

                  <PieChart>

                    <Pie
                      data={roomData}
                      innerRadius={55}
                      outerRadius={85}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      <Cell fill="#3B82F6" /> {/* Mumbai */}
                      <Cell fill="#22C55E" /> {/* Pune */}
                      <Cell fill="#F59E0B" /> {/* Goa */}
                      <Cell fill="#8B5CF6" /> {/* Delhi */}
                      <Cell fill="#EF4444" /> {/* Bangalore */}
                    </Pie>

                    <Tooltip />

                  </PieChart>

                </ResponsiveContainer>

              </div>

              <div className="roomLegend">

                <div className="legendItem">
                  <span className="greenDot"></span>
                  <div>
                    <strong>Mumbai</strong>
                    <p>5 Hotels</p>
                  </div>
                </div>

                <div className="legendItem">
                  <span className="yellowDot"></span>
                  <div>
                    <strong>Pune</strong>
                    <p>4 Hotels</p>
                  </div>
                </div>

                <div className="legendItem">
                  <span className="orangeDot"></span>
                  <div>
                    <strong>Goa</strong>
                    <p>3 Hotels</p>
                  </div>
                </div>

                <div className="legendItem">
                  <span className="purpleDot"></span>
                  <div>
                    <strong>Delhi</strong>
                    <p>3 Hotels</p>
                  </div>
                </div>

                <div className="legendItem">
                  <span className="blueDot"></span>
                  <div>
                    <strong>Bangalore</strong>
                    <p>3 Hotels</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* ===== Top Hotels ===== */}

          <div className="chartCard">

            <h4>Top Hotels</h4>

            <ResponsiveContainer width="100%" height={260}>

              <BarChart
                data={bookingData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -15,
                  bottom: 0,
                }}
              >

                <CartesianGrid
                  stroke="#ECECEC"
                  strokeDasharray="4 4"
                  vertical={false}
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Bar
                  dataKey="bookings"
                  fill="#D4AF37"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </section>
  );
}