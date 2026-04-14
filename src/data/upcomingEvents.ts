import type { MarketEvent } from "../types/Event.type";
import backGarden from "../assets/organizers/backGarden.webp";
import fourGoodBVibes from "../assets/organizers/4goodbvibes.avif";
import beInclusiveHoliFestival from "../assets/organizers/beinclusiveholifestival.webp";
import beverlyMainStreet from "../assets/organizers/beverlymainstreet.png";
import bostonLocalFoodFestival from "../assets/organizers/boston local food festival.webp";
import brightonBazaar from "../assets/organizers/brighton bazaar.jpg";
import compassionFest from "../assets/organizers/compassionfest.jpg";
import dedhamFarmersMarket from "../assets/organizers/dedhamFarmersMarket.jpg";
import FSM from "../assets/organizers/FSM.webp";
import harvardSquare from "../assets/organizers/harvardsquare.webp";
import marbleheadFarmersMarket from "../assets/organizers/marblehead farmers market.jpg";
import nebaf from "../assets/organizers/nebaf.jpg";
import rabbitCoven from "../assets/organizers/rabbitcoven.webp";
import sofarSounds from "../assets/organizers/sofarSounds.jpg";
import wickedNewEngland from "../assets/organizers/wickedNewEngland.avif";
import walpoleHoliFestival from "../assets/organizers/beinclusiveholifestival.webp";

/** Local calendar day. `new Date("YYYY-MM-DD")` is parsed as UTC and shows one day early in US time zones. */
const localDay = (year: number, month: number, day: number) =>
    new Date(year, month - 1, day);

const upcomingEventsBase: Omit<MarketEvent, "id">[] = [
    {
        imageLink: backGarden,
        name: "Back Garden Art Night Market",
        address: "59 First Street, Cambridge, MA 02141",
        date: localDay(2026, 3, 7),
        time: "5PM - 9PM",
    },
    {
        imageLink: sofarSounds,
        name: "Sofar Sounds St. Patty's Concert",
        address: "59 First Street, Cambridge, MA 02141",
        date: localDay(2026, 3, 13),
        time: "7PM - 10PM",
    },
    {
        imageLink: nebaf,
        name: "Ramadan Iftaar Market",
        address: "6 Lexington Street, Burlington, MA 01803",
        date: localDay(2026, 3, 14),
        time: "3PM - 9PM",
    },
    {
        imageLink: dedhamFarmersMarket,
        name: "Farmers Market",
        address: "670 High St, Dedham, MA 02026",
        date: localDay(2026, 3, 21),
        time: "10AM - 1PM",
    },
    {
        imageLink: FSM,
        name: "Farmers Market",
        address: "59 First Street, Cambridge, MA 02141",
        date: localDay(2026, 3, 28),
        time: "11AM - 4PM",
    },
    {
        imageLink: dedhamFarmersMarket,
        name: "Farmers Market",
        address: "670 High St, Dedham, MA 02026",
        date: localDay(2026, 4, 11),
        time: "10AM - 1PM",
    },
    {
        imageLink: dedhamFarmersMarket,
        name: "Dedham Farmers Market",
        address: "670 High St, Dedham, MA 02026",
        date: localDay(2026, 4, 18),
        time: "10AM - 1PM",
    },
    {
        imageLink: wickedNewEngland,
        name: "Wicked New England Halfway to Halloween Festival",
        address: "32 Derby Square, Salem, MA 01970",
        date: localDay(2026, 4, 19),
        time: "12PM - 7PM",
    },
    {
        imageLink: sofarSounds,
        name: "Sofar Sounds Cinco de Mayo Concert",
        address: "59 First Street, Cambridge, MA 02141",
        date: localDay(2026, 5, 5),
        time: "7PM - 10PM",
    },
    {
        imageLink: dedhamFarmersMarket,
        name: "Dedham Farmers Market",
        address: "670 High St, Dedham, MA 02026",
        date: localDay(2026, 5, 16),
        time: "10AM - 1PM",
    },

    {
        imageLink: walpoleHoliFestival,
        name: "Walpole Holi Festival",
        address: "135 Polley Lane, Walpole, MA 02032",
        date: localDay(2026, 4, 12),
        time: "11AM - 2PM",
    },
    {
        imageLink: dedhamFarmersMarket,
        name: "Dedham Farmers Market",
        address: "670 High St, Dedham, MA 02026",
        date: localDay(2026, 6, 6),
        time: "10AM - 1PM",
    },
    {
        imageLink: compassionFest,
        name: "Compassionfest",
        address: "Moore Field House, New Haven, CT",
        date: localDay(2026, 10, 4),
        time: "10AM - 5PM",
    },
    {
        imageLink: rabbitCoven,
        name: "Western Mass Vegan Food Festival",
        address: "Abandoned Building Brewry, Easthampton, MA",
        date: localDay(2026, 6, 7),
        time: "10AM - 5PM",
    },
    {
        imageLink: bostonLocalFoodFestival,
        name: "Boston Local Food Festival",
        address: "Rose Kennedy Greenway, Boston, MA",
        date: localDay(2026, 9, 20),
        time: "11am - 5PM",
    },
    {
        imageLink: bostonLocalFoodFestival,
        name: "Spring Music Festival",
        address: "The Charles River Speedway, Brighton, MA",
        date: localDay(2026, 5, 23),
        time: "12pm - 6pm",
    },
    {
        imageLink: beverlyMainStreet,
        name: "Beverly Fall Festival",
        address: "Odell Park, Beverly, MA",
        date: localDay(2026, 9, 19),
        time: "3pm - 7pm",
    },
    {
        imageLink: beverlyMainStreet,
        name: "Beverly Fall Festival",
        address: "Odell Park, Beverly, MA",
        date: localDay(2026, 9, 19),
        time: "3pm - 7pm",
    },
    {
        imageLink: harvardSquare,
        name: "Hardvard Square Annual Mayfair",
        address: "Harvard Square, Cambridge, MA",
        date: localDay(2026, 5, 31),
        time: "11am - 6pm",
    },
    {
        imageLink: marbleheadFarmersMarket,
        name: "Marblehead Farmers Market",
        address: "217 Pleasant Street, Marblehead, MA",
        date: localDay(2026, 5, 30),
        time: "9am - 12pm",
    },
];

export const upcomingEvents: MarketEvent[] = upcomingEventsBase.map(
    (event, index) => ({
        ...event,
        id: String(index + 1),
    }),
);
