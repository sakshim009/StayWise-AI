/* ==========================================
   STAYWISE AI - MANAGER KNOWLEDGE BASE
   Hotel Operations & Analytics Data
========================================== */


export const managerKnowledge = {


/* ==========================================
   HOTEL PERFORMANCE
========================================== */

performance: {


    occupancy: {

        today: "82%",

        weeklyAverage: "86%",

        monthlyAverage: "84%"

    },


    bookings: {

        todayCheckIns: 18,

        todayCheckOuts: 9,

        pendingRequests: 6

    },


    revenue: {

        today: "₹2.4 lakh",

        monthly: "₹48 lakh",

        growth: "12% increase compared to last month"

    }


},



/* ==========================================
   ROOM ANALYTICS
========================================== */


rooms:{


    bestPerforming:

    {

        category:"Deluxe Room",

        occupancy:"94%",

        reason:
        "High demand from business and couple travellers."

    },


    roomDemand:[


        {

            room:"Deluxe Room",

            demand:"High"

        },


        {

            room:"Executive Room",

            demand:"Medium"

        },


        {

            room:"Luxury Suite",

            demand:"Premium Demand"

        }


    ]

},



/* ==========================================
   DYNAMIC PRICING
========================================== */


pricing:{


    suggestions:[


        {

            room:"Deluxe Room",

            action:
            "Increase price by 8%",


            reason:
            "High occupancy expected this weekend."

        },


        {

            room:"Luxury Suite",

            action:
            "Increase price by 5%",


            reason:
            "VIP bookings are increasing."

        }


    ]

},



/* ==========================================
   HOUSEKEEPING MANAGEMENT
========================================== */


housekeeping:{


    pendingRooms:6,


    staff:[


        {

            name:"Priya",

            pendingRooms:8

        },


        {

            name:"Rahul",

            pendingRooms:5

        },


        {

            name:"Anita",

            pendingRooms:3

        }


    ]


},



/* ==========================================
   INVENTORY MANAGEMENT
========================================== */


inventory:{


    lowStock:[

        "Towels",

        "Shampoo",

        "Coffee Sachets",

        "Room Slippers"

    ],


    recommendation:

    "Restock low inventory items before weekend occupancy increase."

},



/* ==========================================
   GUEST FEEDBACK ANALYSIS
========================================== */


feedback:{


    rating:"4.6/5",


    positive:[

        "Room cleanliness",

        "Staff behaviour",

        "Food quality"

    ],


    issues:[

        "Slow Wi-Fi",

        "Delayed room service",

        "Late housekeeping response"

    ]

},



/* ==========================================
   FUTURE PREDICTION
========================================== */


prediction:{


    nextWeekendOccupancy:

    "91%",


    expectedRevenue:

    "₹3.1 lakh",


    recommendation:

    "Increase room availability and optimize pricing."

}



};




export default managerKnowledge;