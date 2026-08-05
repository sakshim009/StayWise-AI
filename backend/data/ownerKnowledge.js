/* ======================================================
   DYNAMIC HOTEL DATA
====================================================== */

const totalRooms = 220;

const occupancy = Math.floor(Math.random() * 16) + 80; // 80-95%

const occupiedRooms = Math.floor((occupancy / 100) * totalRooms);

const availableRooms = totalRooms - occupiedRooms;

const todayBookings = Math.floor(Math.random() * 18) + 20;

const pendingBookings = Math.floor(Math.random() * 6) + 2;

const todayCheckIns = Math.floor(Math.random() * 8) + 8;

const todayCheckOuts = Math.floor(Math.random() * 6) + 5;

const todayRevenue = (Math.random() * 2 + 2).toFixed(1);

const monthlyRevenue = (Math.random() * 6 + 16).toFixed(1);

const guestRating = (Math.random() * 0.4 + 4.6).toFixed(1);

/* ======================================================
   OWNER KNOWLEDGE
====================================================== */

const ownerKnowledge = {

  hotel: {

    name: "Sunshine Beach Resort",

    city: "Mumbai",

    category: "5 Star Luxury Hotel",

    totalRooms,

    availableRooms,

    occupiedRooms,

    owner: "Hotel Owner"

  },



  dashboard: {

    occupancy: `${occupancy}%`,

    totalRooms,

    occupiedRooms,

    availableRooms,

    todayBookings,

    pendingBookings,

    todayCheckIns,

    todayCheckOuts,

    todayRevenue: `₹${todayRevenue} Lakhs`,

    monthlyRevenue: `₹${monthlyRevenue} Lakhs`,

    guestRating: `${guestRating} / 5`

  },
    /* ======================================================
     ROOMS
  ====================================================== */

  rooms: [

    {
      roomNo: 201,
      type: "Deluxe Room",
      status: "Available",
      price: "₹5200/night",
      floor: 2,
      aiSuggestion: "Increase price by 8% due to high demand."
    },

    {
      roomNo: 305,
      type: "Executive Room",
      status: "Occupied",
      price: "₹6800/night",
      floor: 3,
      aiSuggestion: "Guest checkout expected tomorrow."
    },

    {
      roomNo: 401,
      type: "Luxury Suite",
      status: "Reserved",
      price: "₹9800/night",
      floor: 4,
      aiSuggestion: "VIP guest arriving today."
    },

    {
      roomNo: 502,
      type: "Premium Room",
      status: "Available",
      price: "₹7500/night",
      floor: 5,
      aiSuggestion: "Recommended for family bookings."
    }

  ],



  /* ======================================================
     BOOKINGS
  ====================================================== */

  bookings: {

    today: todayBookings,

    confirmed: todayBookings - pendingBookings,

    pending: pendingBookings,

    cancelled: Math.floor(Math.random() * 3),

    upcoming: todayBookings + Math.floor(Math.random() * 15) + 10,

    latestGuests: [

      "Amit Sharma",

      "Priya Patel",

      "Rahul Verma",

      "Sneha Kulkarni",

      "Rohan Mehta"

    ]

  },



  /* ======================================================
     REVENUE
  ====================================================== */

  revenue: {

    today: `₹${todayRevenue} Lakhs`,

    weekly: `₹${(todayRevenue * 6).toFixed(1)} Lakhs`,

    monthly: `₹${monthlyRevenue} Lakhs`,

    highestRevenueRoom: "Luxury Suite",

    growth: `${Math.floor(Math.random() * 10) + 8}% higher than last month`

  },



  /* ======================================================
     VIP GUESTS
  ====================================================== */

  vipGuests: [

    {
      name: "Mr. Amit Sharma",
      room: "Luxury Suite 401",
      arrival: "Today",
      membership: "Platinum"
    },

    {
      name: "Ms. Priya Patel",
      room: "Executive Room 305",
      arrival: "Tomorrow",
      membership: "Gold"
    },

    {
      name: "Mr. Rohan Kapoor",
      room: "Premium Room 502",
      arrival: "Today",
      membership: "Diamond"
    }

  ],
    /* ======================================================
     STAFF
  ====================================================== */

  staff: {

    totalEmployees: 45,

    departments: {

      reception: 8,

      housekeeping: 18,

      restaurant: 10,

      security: 5,

      maintenance: 4

    },

    attendanceToday: 42,

    absentToday: 3,

    monthlySalaryExpense: "₹3.2 Lakhs",

    nextSalaryDate: "31 August"

  },



  /* ======================================================
     HOUSEKEEPING
  ====================================================== */

  housekeeping: {

    completedRooms: Math.floor(Math.random() * 15) + 30,

    pendingRooms: Math.floor(Math.random() * 8) + 3,

    roomsUnderCleaning: [

      "Room 102",

      "Room 215",

      "Room 307"

    ],

    aiRecommendation:
      "Assign one additional housekeeping staff during peak check-in hours."

  },



  /* ======================================================
     MAINTENANCE
  ====================================================== */

  maintenance: {

    pending: [

      "Room 305 - Air Conditioner Service",

      "Room 118 - Bathroom Tap Repair",

      "Swimming Pool Filter Cleaning"

    ],

    completedToday: [

      "Lobby Lighting Fixed",

      "Lift Inspection Completed"

    ]

  },



  /* ======================================================
     INVENTORY
  ====================================================== */

  inventory: {

    lowStock: [

      "Bath Towels",

      "Coffee Sachets",

      "Shampoo Bottles",

      "Mineral Water"

    ],

    sufficientStock: [

      "Bedsheets",

      "Toiletries",

      "Pillows",

      "Blankets"

    ],

    aiRecommendation:
      "Restock towels and coffee sachets before the weekend."

  },



  /* ======================================================
     REVIEWS
  ====================================================== */

  reviews: {

    overallRating: guestRating,

    totalReviews: 1246,

    positive: [

      "Clean rooms",

      "Friendly staff",

      "Excellent location",

      "Fast check-in",

      "Comfortable beds"

    ],

    improvements: [

      "WiFi speed",

      "Breakfast timing",

      "Parking space"

    ],

    aiSummary:
      "Overall guest satisfaction is excellent. Improving WiFi performance could further increase ratings."

  },
    /* ======================================================
     AI INSIGHTS
  ====================================================== */

  aiInsights: [

    `Occupancy is currently ${occupancy}%. Demand is healthy.`,

    "Weekend demand is expected to increase by 18%.",

    "Increase Deluxe Room prices by around 8% for maximum revenue.",

    `${pendingBookings} bookings are still pending confirmation.`,

    `${availableRooms} rooms are currently available.`,

    "Replying to pending guest reviews may improve the hotel rating.",

    "Luxury Suites are generating the highest revenue.",

    "Housekeeping should prioritize VIP guest rooms."

  ],



  /* ======================================================
     HOTEL POLICIES
  ====================================================== */

  policies: {

    checkIn: "2:00 PM",

    checkOut: "11:00 AM",

    cancellation:
      "Free cancellation up to 24 hours before check-in.",

    breakfast:
      "Complimentary breakfast is included for Premium and Suite rooms.",

    pets:
      "Pets are not allowed."

  },



  /* ======================================================
     FAQ
  ====================================================== */

  faq: {

    wifi:
      "High-speed WiFi is available throughout the hotel.",

    parking:
      "Free parking is available for all guests.",

    airportPickup:
      "Airport pickup is available on request.",

    restaurant:
      "The in-house restaurant is open from 7:00 AM to 11:00 PM.",

    pool:
      "Swimming pool timings are 7:00 AM to 9:00 PM."

  }

};

export default ownerKnowledge;