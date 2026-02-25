export interface MenuItemCardProps {
    picture: string;
    name: string;
    description: string;
    pictureAlt?: string;
    className?: string;
}

function MenuItemCard({
    picture,
    name,
    description,
    pictureAlt,
    className = "",
}: MenuItemCardProps) {
    return (
        <div
            className={`flex flex-col items-center w-[250px] rounded-2xl ${className}`.trim()}
        >
            <div className="shrink-0 p-[20px] rounded-xl overflow-hidden bg-brand-tertiary/30">
                <img
                    src={picture}
                    alt={pictureAlt ?? name}
                    className="w-full"
                />
            </div>
            <div className="flex flex-col min-w-0 mt-[20px]">
                <h3 className="font-text font-bold text-brand-primary text-[16px] sm:text-[18px] leading-tight">
                    {name}
                </h3>
                <p className="font-text text-brand-black text-[14px] leading-relaxed mt-[5px]">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default MenuItemCard;
