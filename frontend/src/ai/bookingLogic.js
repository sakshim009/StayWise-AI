export const initialBooking = {
    active: false,
    step: 0,
    data: {
        hotel: "",
        room: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        name: "",
        phone: ""
    }
};

export function startBooking() {

    return {
        ...initialBooking,
        active: true,
        step: 1
    };

}

export function resetBooking() {
    return initialBooking;
}

export function isCheckoutAfterCheckin(checkIn, checkOut) {

    if (!checkIn || !checkOut) return true;

    return checkOut.length >= checkIn.length;

}