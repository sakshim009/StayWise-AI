import jsPDF from "jspdf";


function generatePDF(data) {

  const doc = new jsPDF();

  const {
    bookingId,
    hotel,
    room,
    name,
    email,
    phone,
    guests,
    payment,
    checkIn,
    checkOut,
    nights,
    subtotal,
    tax,
    serviceFee,
    total
  } = data;


  // Header

  doc.setFontSize(24);
  doc.setTextColor(212,175,55);
  doc.text(
    "StayWise AI",
    20,
    25
  );


  doc.setFontSize(12);
  doc.setTextColor(80);
  doc.text(
    "Smart Hotel Ecosystem",
    20,
    34
  );


  // Title

  doc.setFontSize(20);
  doc.setTextColor(0);
  doc.text(
    "Booking Confirmation",
    20,
    55
  );


  let y = 75;


  function addRow(label,value){

    doc.setFontSize(12);

    doc.setTextColor(100);
    doc.text(
      label,
      20,
      y
    );

    doc.setTextColor(0);
    doc.text(
      String(value),
      80,
      y
    );

    y += 10;

  }


  addRow(
    "Booking ID",
    bookingId
  );


  addRow(
    "Guest Name",
    name
  );


  addRow(
    "Email",
    email
  );


  addRow(
    "Phone",
    phone
  );


  addRow(
    "Hotel",
    hotel.name
  );


  addRow(
    "Room",
    room.name
  );


  addRow(
    "Check In",
    checkIn
  );


  addRow(
    "Check Out",
    checkOut
  );


  addRow(
    "Nights",
    nights
  );


  addRow(
    "Guests",
    guests
  );


  addRow(
    "Payment",
    payment
  );


  y += 10;


  doc.setFontSize(16);

  doc.text(
    "Payment Details",
    20,
    y
  );


  y += 15;


  addRow(
    "Room Charges",
  `INR ${subtotal.toLocaleString()}`
  );


  addRow(
    "Taxes",
   `INR ${tax.toLocaleString()}`
  );


  addRow(
    "Service Fee",
   `INR ${serviceFee.toLocaleString()}`
  );


  addRow(
    "Total Amount",
    `INR ${total.toLocaleString()}`
  );


  y += 15;


  doc.setFontSize(13);

  doc.text(
    "Thank you for choosing StayWise AI.",
    20,
    y
  );


  doc.text(
    "Have a wonderful stay!",
    20,
    y + 10
  );


  doc.save(
    `StayWise_Booking_${bookingId}.pdf`
  );

}


export default generatePDF;