import Button from "./button";

export interface MarketEventCardProps {
    imageLink: string;
    name: string;
    address: string;
    date: Date;
    time: string;
    onCheckMenu?: () => void;
    className?: string;
}

const iconClass = "shrink-0";
const iconFill = "#C93533";

function MapPinIcon() {
    return (
        <svg
            className={iconClass}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 8.625C8.50272 8.625 8.02581 8.42746 7.67417 8.07583C7.32254 7.72419 7.125 7.24728 7.125 6.75C7.125 6.25272 7.32254 5.77581 7.67417 5.42417C8.02581 5.07254 8.50272 4.875 9 4.875C9.49728 4.875 9.97419 5.07254 10.3258 5.42417C10.6775 5.77581 10.875 6.25272 10.875 6.75C10.875 6.99623 10.8265 7.24005 10.7323 7.46753C10.638 7.69502 10.4999 7.90172 10.3258 8.07583C10.1517 8.24994 9.94502 8.38805 9.71753 8.48227C9.49005 8.5765 9.24623 8.625 9 8.625ZM9 1.5C7.60761 1.5 6.27226 2.05312 5.28769 3.03769C4.30312 4.02226 3.75 5.35761 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 5.35761 13.6969 4.02226 12.7123 3.03769C11.7277 2.05312 10.3924 1.5 9 1.5Z"
                fill={iconFill}
            />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg
            className={iconClass}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.5 1.5V3H2.25C1.83579 3 1.5 3.33579 1.5 3.75V15.75C1.5 16.1642 1.83579 16.5 2.25 16.5H15.75C16.1642 16.5 16.5 16.1642 16.5 15.75V3.75C16.5 3.33579 16.1642 3 15.75 3H13.5V1.5H12V3H6V1.5H4.5ZM3 6.75V5.25H15V6.75H3ZM3 8.25H15V15H3V8.25Z"
                fill={iconFill}
            />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg
            className={iconClass}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5ZM9 15C5.68629 15 3 12.3137 3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9C15 12.3137 12.3137 15 9 15ZM9.75 5.25H8.25V9.75L11.625 12.1287L12.3713 11.3713L9.75 9.3V5.25Z"
                fill={iconFill}
            />
        </svg>
    );
}

function MarketEventCard({
    imageLink,
    name,
    address,
    date,
    time,
    onCheckMenu = () => {},
    className = "",
}: MarketEventCardProps) {
    return (
        <div
            className={`flex flex-col rounded-xl border-2 border-brand-black p-[25px] gap-4 w-xs ${className}`.trim()}
        >
            {/* Logo / Image */}
            <div className="flex justify-center">
                <div className="aspect-square w-[80px] h-[80px] bg-brand-black flex items-center justify-center">
                    <img
                        src={imageLink}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            {/* Name */}
            <h3 className="font-heading font-bold text-xl text-brand-black text-center">
                {name}
            </h3>

            {/* Address, Date, Time */}
            <div className="flex flex-col gap-2 text-brand-black">
                <p className="flex items-start gap-2 text-sm">
                    <MapPinIcon />
                    <span>{address}</span>
                </p>
                <p className="flex items-start gap-2 text-sm">
                    <CalendarIcon />
                    <span>
                        {date.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                </p>
                <p className="flex items-start gap-2 text-sm">
                    <ClockIcon />
                    <span>{time}</span>
                </p>
            </div>

            {/* Button */}
            <div className="flex justify-center pt-1">
                <Button
                    type="primary"
                    text="Check the menu"
                    onTap={onCheckMenu}
                />
            </div>
        </div>
    );
}

export default MarketEventCard;
