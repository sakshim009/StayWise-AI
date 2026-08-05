export function detectIntent(message = "") {

    const text = message.toLowerCase().trim();

    // =========================
    // MANAGER
    // =========================

    if (
        /(occupancy|revenue|profit|pricing|price|inventory|stock|analytics|dashboard|housekeeping|performance|sales|manager|hotel performance)/i.test(text)
    ) {
        return "manager";
    }

    // =========================
    // BOOKING
    // =========================

    if (
        /(book|booking|reserve|reservation|room|hotel stay|check in|check out|suite|deluxe|executive)/i.test(text)
    ) {
        return "booking";
    }

    return "general";
}