import type { MarketEvent } from "../types/Event.type";
import { upcomingEvents as staticUpcomingEvents } from "../data/upcomingEvents";

/**
 * Fetches upcoming events for display (e.g. on the home page).
 * For now returns static data; replace with API call when ready.
 */
export async function getUpcomingEvents(): Promise<MarketEvent[]> {
    // TODO: replace with API call, e.g.:
    // const res = await fetch("/api/upcoming-events");
    // const data = await res.json();
    // return data.map(mapApiEventToMarketEvent);
    return Promise.resolve(staticUpcomingEvents);
}
