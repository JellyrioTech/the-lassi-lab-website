import { useEffect, useState } from "react";
import * as eventService from "../services/events.services";
import type { CalendarEvent } from "../types/Event.type";

function EventsList() {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            try {
                setEvents(await eventService.getAllEvents());
            } catch (error) {
                setError("Server Error occurred fetching events");
            } finally {
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            {isLoading && (
                <div className="flex justify-center">
                    <div
                        className="w-12 h-12 border-4 border-brand-tertiary
                        border-t-transparent rounded-full 
                        animate-spin"
                    ></div>
                </div>
            )}
            {!isLoading && (
                <div className="">
                    <h2 className="font-bold font-text text-brand-white text-2xl">
                        Our Event Calendar
                    </h2>
                    {error && (
                        <p className="text-brand-primary-dark mt-3">{error}</p>
                    )}
                    {!error && (
                        <div className="h-40 overflow-y-scroll mt-3 flex gap-10 flex-col scrollbar-always">
                            {events.map((event) => (
                                <p>{event.name}</p>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default EventsList;
