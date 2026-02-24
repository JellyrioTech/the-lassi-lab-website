import type { MarketEvent } from "../types/Event.type";
import { upcomingEvents as staticUpcomingEvents } from "../data/upcomingEvents";

/** Start of day (local) in ms for comparison. */
function getStartOfDayMs(d: Date): number {
    const copy = new Date(d);
    copy.setHours(0, 0, 0, 0);
    return copy.getTime();
}

export async function getUpcomingEvents(): Promise<MarketEvent[]> {
    // TODO: replace with API call, e.g.:
    // const res = await fetch("/api/upcoming-events");
    // const data = await res.json();
    // return data.map(mapApiEventToMarketEvent);
    const startOfTodayMs = getStartOfDayMs(new Date());

    const filtered = staticUpcomingEvents.filter((event) => getStartOfDayMs(event.date) >= startOfTodayMs);

    const sorted = [...filtered].sort((a, b) => getStartOfDayMs(a.date) - getStartOfDayMs(b.date));

    return Promise.resolve(sorted);
}
