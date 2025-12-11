import type { CalendarEvent } from "../types/Event.type";

export const getAllEvents = async (): Promise<CalendarEvent[]> => {
    const events: CalendarEvent[] = [
        {
            name: "Holiday Night Market",
            address: "First Street Market, Cambridge, MA",
            date: new Date("12/05/2025"),
            startTime: "5PM",
            endTime: "10PM",
        },
        {
            name: "Holiday Makers Market",
            address: "McGlynn Elementary School, Medford, MA",
            date: new Date("12/10/2025"),
            startTime: "5:30PM",
            endTime: "8:30PM",
        },
        {
            name: "Holiday Night Market",
            address: "First Street Market, Cambridge, MA",
            date: new Date("12/12/2025"),
            startTime: "5:00 PM",
            endTime: "10:00 PM",
        },
        {
            name: "Farmers Market",
            address: "First Street Market, Cambridge, MA",
            date: new Date("12/13/2025"),
            startTime: "11AM",
            endTime: "4PM",
        },
        {
            name: "Haverhill Holiday Fair",
            address: "Haverhill Elks Club, Haverhill, MA",
            date: new Date("12/14/2025"),
            startTime: "11AM",
            endTime: "4PM",
        },
        {
            name: "Hingham Winter Farmers Market",
            address: "204 Union Street, Hingham MA",
            date: new Date("01/10/2026"),
            startTime: "10AM",
            endTime: "1PM",
        },
        {
            name: "Farmers Market",
            address: "First Street Market, Cambridge, MA",
            date: new Date("01/17/2026"),
            startTime: "11AM",
            endTime: "4PM",
        },
        {
            name: "Farmers Market",
            address: "First Street Market, Cambridge, MA",
            date: new Date("01/24/2026"),
            startTime: "11AM",
            endTime: "4PM",
        },
        {
            name: "Farmers Market",
            address: "First Street Market, Cambridge, MA",
            date: new Date("01/31/2026"),
            startTime: "11AM",
            endTime: "4PM",
        },
    ];

    return events;
};
