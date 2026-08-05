import { startBooking } from "./bookingLogic";

export function aiRouter(message) {

    const text = message.toLowerCase().trim();

    // Booking

    if (
        /(book|booking|reserve|reservation|room)/i.test(text)
    ) {

        return {

            type: "booking",

            data: startBooking(),

            reply:
`I'd be happy to help you book a room.

First, could you tell me which hotel you'd like to stay at?`

        };

    }

    return {
        type: "general"
    };

}