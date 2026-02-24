export type CalendarEvent = {
    name: string;
    address: string;
    date: Date;
    startTime: string;
    endTime: string;
};

/** Event shape used for MarketEventCard (view-ready: date/time as display strings) */
export type MarketEvent = {
    id: string;
    imageLink: string;
    name: string;
    address: string;
    date: string;
    time: string;
};
