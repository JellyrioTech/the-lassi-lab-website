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
        <section className={`${sectionClassName} w-full ${bg} py-[60px]`}>
            <div className="container mx-auto">
                <div className="flex flex-col mx-3 sm:mx-0">{children}</div>
            </div>
        </section>
    );
}

export default SectionContainer;
