import type { MarketEvent } from "../types/Event.type";
import backGarden from "../assets/organizers/backGarden.webp";
import dedhamFarmersMarket from "../assets/organizers/dedhamFarmersMarket.jpg";
import FSM from "../assets/organizers/FSM.webp";
import nebaf from "../assets/organizers/nebaf.jpg";
import sofarSounds from "../assets/organizers/sofarSounds.jpg";
import wickedNewEngland from "../assets/organizers/wickedNewEngland.avif";

export const upcomingEvents: MarketEvent[] = [
    {
        id: "1",
        imageLink: backGarden,
        name: "Back Garden Art Night Market",
        address: "59 First Street, Cambridge, MA 02141",
        date: new Date("2026-03-07"),
        time: "5PM - 9PM",
    },
    {
        id: "2",
        imageLink: sofarSounds,
        name: "Sofar Sounds St. Patty's Concert",
        address: "59 First Street, Cambridge, MA 02141",
        date: new Date("2026-03-13"),
        time: "7PM - 10PM",
    },
    {
        id: "3",
        imageLink: nebaf,
        name: "Ramadan Iftaar Market",
        address: "6 Lexington Street, Burlington, MA 01803",
        date: new Date("2026-03-14"),
        time: "3PM - 9PM",
    },
    {
        id: "5",
        imageLink: dedhamFarmersMarket,
        name: "Farmers Market",
        address: "670 High St, Dedham, MA 02026",
        date: new Date("2026-03-21"),
        time: "10AM - 1PM",
    },
    {
        id: "6",
        imageLink: FSM,
        name: "Farmers Market",
        address: "59 First Street, Cambridge, MA 02141",
        date: new Date("2026-03-28"),
        time: "11AM - 4PM",
    },
    {
        id: "7",
        imageLink: dedhamFarmersMarket,
        name: "Farmers Market",
        address: "670 High St, Dedham, MA 02026",
        date: new Date("2026-04-11"),
        time: "10AM - 1PM",
    },
    {
        id: "8",
        imageLink: dedhamFarmersMarket,
        name: "Farmers Market",
        address: "670 High St, Dedham, MA 02026",
        date: new Date("2026-04-18"),
        time: "10AM - 1PM",
    },
    {
        id: "9",
        imageLink: wickedNewEngland,
        name: "Wicked New England Halfway to Halloween Festival",
        address: "32 Derby Square, Salem, MA 01970",
        date: new Date("2026-04-19"),
        time: "12PM - 7PM",
    },
    {
        id: "10",
        imageLink: sofarSounds,
        name: "Sofar Sounds Cinco de Mayo Concert",
        address: "59 First Street, Cambridge, MA 02141",
        date: new Date("2026-05-05"),
        time: "7PM - 10PM",
    },
    {
        id: "11",
        imageLink: dedhamFarmersMarket,
        name: "Farmers Market",
        address: "670 High St, Dedham, MA 02026",
        date: new Date("2026-05-16"),
        time: "10AM - 1PM",
    },
];
