interface Props {
    bg?: String;
    sectionClassName?: String;
    children?: React.ReactNode;
}

function SectionContainer({
    bg = "bg-brand-white",
    sectionClassName = "",
    children,
}: Props) {
    return (
        <section
            className={`${sectionClassName} w-full ${bg} py-[45px] px-1 md:py-[80px] md:px-0`}
        >
            <div className="container mx-auto">
                <div className="flex flex-col mx-3 sm:mx-0">{children}</div>
            </div>
        </section>
    );
}

export default SectionContainer;
