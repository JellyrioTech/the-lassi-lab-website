import type { CalendarEvent } from "../types/Event.type";

export const getAllEvents = async (): Promise<CalendarEvent[]> => {
    const events: CalendarEvent[] = [
        {
            name: "Holiday Night Market",
            address: "First Street Market, Cambridge, MA",
            date: new Date("12/05/2025"),
            startTime: "5:00 PM",
            endTime: "10:00 PM",
        },
        {
            name: "Holiday Makers Market",
            address: "McGlynn Elementary School, Medford, MA",
            date: new Date("12/10/2025"),
            startTime: "5:30 PM",
            endTime: "8:30 PM",
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
            startTime: "11:00 AM",
            endTime: "4:00 PM",
        },
        {
            name: "Haverhill Holiday Fair",
            address: "Haverhill Elks Club, Haverhill, MA",
            date: new Date("12/14/2025"),
            startTime: "11:00 AM",
            endTime: "4:00 PM",
        },
    ];

    return events;
};
