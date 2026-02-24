import type { MarketEvent } from "../types/Event.type";
import Chicken22Image from "../assets/chicken22.png";

export const upcomingEvents: MarketEvent[] = [
    {
        id: "1",
        imageLink: Chicken22Image,
        name: "Mughlai King Popcorn Chicken",
        address: "123 Main St, Anytown, USA",
        date: new Date("2026-03-01"),
        time: "10:00 AM - 12:00 PM",
    },
    {
        id: "2",
        imageLink: Chicken22Image,
        name: "First Street Market",
        address: "57 First Street, Cambridge, MA",
        date: new Date(2026, 11, 9),
        time: "11:00 AM - 4:00 PM",
    },
    {
        id: "3",
        imageLink: Chicken22Image,
        name: "Holiday Makers Market",
        address: "McGlynn Elementary School, Medford, MA",
        date: new Date(2026, 11, 10),
        time: "5:30 PM - 8:30 PM",
    },
    {
        id: "4",
        imageLink: Chicken22Image,
        name: "Farmers Market",
        address: "First Street Market, Cambridge, MA",
        date: new Date(2027, 0, 17),
        time: "11:00 AM - 4:00 PM",
    },
    {
        id: "5",
        imageLink: Chicken22Image,
        name: "Hingham Winter Farmers Market",
        address: "204 Union Street, Hingham, MA",
        date: new Date(2027, 0, 10),
        time: "10:00 AM - 1:00 PM",
    },
    {
        id: "6",
        imageLink: Chicken22Image,
        name: "This should be hidden",
        address: "123 Main St, Anytown, USA",
        date: new Date("2025-03-01"),
        time: "10:00 AM - 12:00 PM",
    },
];
