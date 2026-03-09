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
            className={`flex flex-col items-center w-full min-w-0 max-w-full overflow-hidden ${className}`.trim()}
        >
            <div className="shrink-0 w-[250px] h-[250px] overflow-hidden rounded-xl bg-white flex items-center justify-center">
                <img
                    src={picture}
                    alt={pictureAlt ?? name}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex flex-col min-w-0 w-full mt-[20px]">
                <h3 className="font-subheading font-bold text-brand-primary text-md sm:text-xl text-center">
                    {name}
                </h3>
                <p className="font-text text-brand-black text-[14px] text-center mt-[5px] break-words">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default MenuItemCard;
