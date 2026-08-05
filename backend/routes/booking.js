/* ==========================================
   STAYWISE AI - BOOKING ROUTES
========================================== */


import express from "express";

import {
    searchHotels
} from "../controllers/bookingController.js";


const router = express.Router();



/*
    Search hotels by location

    POST:
    /api/search/search

    Body:
    {
        "location": "Mumbai"
    }
*/

router.post(
    "/search",
    searchHotels
);



export default router;