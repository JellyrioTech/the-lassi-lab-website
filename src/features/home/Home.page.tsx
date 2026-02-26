import { useEffect, useRef, useState } from "react";
import Button from "../../components/button";
import HeaderHeroImage from "../../assets/Header_Hero_Image.png";
import { easeInOut, motion } from "motion/react";
import SectionContainer from "../../components/section-container";
import MapleLassi from "../../assets/Maple Lassi.png";
import MangoLassi from "../../assets/MangoLassi.png";
import FreshLassiBG from "../../assets/FreshLasiImage.png";
import Chicken22Image from "../../assets/chicken22.png";
import { PageLayout } from "../../components/PageLayout";
import MarketEventCard from "../../components/market-event-card";
import OwnerImage from "../../assets/Owner Image.png";
import type { MarketEvent } from "../../types/Event.type";
import { getUpcomingEvents } from "../../services/upcomingEvents.service";
import MenuItemCard from "../../components/menu-item-card";

const HomePage = () => {
    const eventsScrollRef = useRef<HTMLDivElement>(null);
    const [upcomingEvents, setUpcomingEvents] = useState<MarketEvent[]>([]);

    useEffect(() => {
        getUpcomingEvents().then(setUpcomingEvents);
    }, []);

    useEffect(() => {
        const el = eventsScrollRef.current;
        if (!el) return;
        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    }, [upcomingEvents]);

    const nextEvent = upcomingEvents[0];

    return (
        <PageLayout>
            <SectionContainer bg={"bg-brand-secondary"}>
                <div className="flex flex-col justify-between items-center md:flex-row">
                    <div className="flex flex-col">
                        <motion.h1
                            className="font-display font-bold text-brand-black text-3xl lg:text-4xl"
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                                type: "spring",
                            }}
                        >
                            Creamy Lassi & Sizzling Eats
                        </motion.h1>
                        <motion.p
                            className="font-text text-brand-black text-[16px] mt-[15px]"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                                type: "spring",
                            }}
                        >
                            From Mango fusion to spicy hot bites, we bring the
                            best of global street food straight to your
                            neighborhood.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                                type: "spring",
                            }}
                        >
                            <Button
                                className="w-fit mt-[25px]"
                                icon={"instagram"}
                                text={"See Upcoming Events"}
                                type={"primary"}
                                onTap={() => {}}
                            />
                        </motion.div>
                    </div>
                    <motion.img
                        src={HeaderHeroImage}
                        className="w-[80%] mt-[30px] sm:w-[400px] md:w-[250px] lg:w-[400px]"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ y: [0, -20, 0], x: 0, opacity: 1 }}
                        transition={{
                            opacity: { duration: 0.5, ease: "easeOut" },
                            x: { duration: 0.5, ease: "easeOut" },
                            y: {
                                delay: 0.5,
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    />
                </div>
            </SectionContainer>
            <div className="w-[200%] overflow-hidden">
                <motion.div
                    className="w-full flex"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 5,
                    }}
                >
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        // h-[50px] controls the height of the wave
                        className="relative block w-[calc(100%+1.3px)] h-[60px] "
                    >
                        {/* This path draws the wave. fill-white matches the section BELOW */}
                        <path
                            d="M0,0 L1200,0 L1200,50 Q1050,100 900,50 T600,50 T300,50 T0,50 Z"
                            className="fill-brand-secondary"
                        />
                    </svg>
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        // h-[50px] controls the height of the wave
                        className="relative block w-[calc(100%+1.3px)] h-[60px] "
                    >
                        {/* This path draws the wave. fill-white matches the section BELOW */}
                        <path
                            d="M0,0 L1200,0 L1200,50 Q1050,100 900,50 T600,50 T300,50 T0,50 Z"
                            className="fill-brand-secondary"
                        />
                    </svg>
                </motion.div>
            </div>
            <SectionContainer>
                <h2 className="font-display text-3xl lg:text-4xl text-brand-primary text-center">
                    Order Online Available Now
                </h2>
                <div className="flex justify-center pt-[45px] gap-[20px] flex-wrap">
                    <img
                        src={
                            "https://wp.logos-download.com/wp-content/uploads/2023/02/Uber_Eats_Logo.png?dl"
                        }
                        alt="Order Online"
                        className="w-[150px] h-[150px]"
                    />
                    <img
                        src={
                            "https://typetype.org/wp-content/uploads/Doordash_1.png"
                        }
                        alt="Order Online"
                        className="w-[150px] h-[150px]"
                    />
                </div>
            </SectionContainer>
            {nextEvent && (
                <SectionContainer
                    bg={"bg-brand-black"}
                    sectionClassName="relative overflow-hidden"
                >
                    {/* Flowing waves – two layers, opposite directions, different speeds */}
                    <motion.div
                        className="absolute inset-0 w-[120%] pointer-events-none"
                        initial={false}
                        animate={{ x: ["-20%", "0%"] }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "reverse",
                        }}
                    >
                        <svg
                            className="w-full h-full text-brand-white/10"
                            viewBox="0 0 600 120"
                            preserveAspectRatio="none"
                            aria-hidden
                        >
                            <path
                                d="M0 60 C80 40 120 80 200 60 S320 40 400 60 S520 80 600 60"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M0 80 C100 55 180 95 280 75 S380 50 480 75 S580 100 700 75"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                            />
                            <path
                                d="M0 40 C70 65 150 25 250 45 S350 70 450 45 S550 20 650 45"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                            />
                        </svg>
                    </motion.div>
                    <motion.div
                        className="absolute inset-0 w-[120%] pointer-events-none"
                        initial={false}
                        animate={{ x: ["0%", "-20%"] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "reverse",
                        }}
                    >
                        <svg
                            className="w-full h-full text-brand-white/5"
                            viewBox="0 0 600 120"
                            preserveAspectRatio="none"
                            aria-hidden
                        >
                            <path
                                d="M0 50 C90 70 170 30 270 50 S390 75 490 50 S610 25 710 50"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                            />
                            <path
                                d="M0 95 C120 70 200 100 300 85 S420 60 520 85"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </motion.div>
                    <div className="relative z-10 flex sm:flex-row justify-between items-center flex-wrap gap-[20px]">
                        <div className="flex flex-col">
                            <h2 className="font-display text-4xl lg:text-5xl text-brand-white text-left">
                                Our Next Event
                            </h2>
                            <h3 className="font-text text-brand-secondary text-[24px] pt-[5px]">
                                {nextEvent.date.toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </h3>
                            <p className="font-text text-brand-white text-[16px] pt-[20px]">
                                <b>Location:</b> {nextEvent.address}
                            </p>
                            <p className="font-text text-brand-white text-[16px]">
                                <b>Time: </b>
                                {nextEvent.time}
                            </p>
                            <Button
                                type="primary"
                                text="Pre order now"
                                onTap={() => {}}
                                className="w-fit mt-[20px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <motion.img
                                src={nextEvent.imageLink}
                                alt={nextEvent.name}
                                className="w-[200px] md:w-[300px]"
                                animate={{ scale: [1, 1.06, 1] }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </div>
                </SectionContainer>
            )}
            <SectionContainer>
                <motion.h2
                    className="text-4xl font-display font-bold text-brand-black md:text-5xl"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                    }}
                >
                    Meet our Top Sellers
                </motion.h2>
                <div className="flex flex-col mt-15 gap-[45px] md:gap-[15px]">
                    <TopSellersCard
                        title="Mango Cloud Lassi"
                        body="Double Mango Lassi Made with a secret blend of two mango
                    varieties, fresh milk, and rich yogurt. It’s thick, creamy,
                    and sold out at almost every pop-up. Taste the hype."
                        image={MangoLassi}
                        availableIn={["vegan", "dairy"]}
                    />
                    <TopSellersCard
                        direction="right"
                        title="Maple Wonderland Lassi"
                        body="Double Mango Lassi Made with a secret blend of two mango
                    varieties, fresh milk, and rich yogurt. It’s thick, creamy,
                    and sold out at almost every pop-up. Taste the hype."
                        image={MapleLassi}
                        availableIn={["vegan", "dairy"]}
                    />
                </div>
                <div className="flex justify-center">
                    <Button
                        type="primary"
                        text="Checkout out all our other drinks"
                        onTap={() => {}}
                        className="mt-[50px]"
                    />
                </div>
            </SectionContainer>
            <section className={`w-full bg-brand-primary md:overflow-hidden`}>
                <div className="flex container px-3 sm:px-0 sm:mx-auto md:relative">
                    <div className="flex">
                        <div className="flex flex-col py-20 md:py-[140px] md:w-[550px] md:mr-[300px] md:shrink-0 md:z-10 md:relative">
                            <h2 className="font-display font-bold text-4xl text-[#9B2F19] md:text-5xl">
                                Too Fresh to Last
                            </h2>
                            <p className="font-text font-bold text-brand-white text-[24px] mt-2">
                                We Take Pride on That
                            </p>
                            <p className="font-text text-brand-white text-[16px] my-[18px]">
                                Our flavor comes from simple, whole ingredients.
                                We trade a long shelf life for an authentic,
                                preservative-free taste.
                            </p>
                            <Button
                                className="w-fit"
                                type="secondary"
                                text="Learn more about lassi"
                                icon={"instagram"}
                                onTap={() => {}}
                            />
                        </div>
                        <motion.div
                            className="hidden md:flex md:w-screen md:absolute md:left-[550px] md:flex-wrap md:gap-0 lg:left-[700px]"
                            animate={{ y: ["0%", "-50%"], x: ["0px", "10px"] }}
                            transition={{
                                y: {
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 30,
                                },
                                x: {
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    duration: 0.5,
                                    repeatType: "reverse",
                                },
                            }}
                        >
                            {[...Array(4)].map(() => (
                                <div className="w-[800px] lg:w-[1000px] max-w-none">
                                    <img src={FreshLassiBG} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className={`w-full bg-brand-secondary`}>
                <div className="flex flex-col container mx-auto px-3 py-[50px] md:px-0 md:py-0">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.img
                            src={Chicken22Image}
                            className="w-[300px] rounded-[20px] border-brand-black border-10 md:rounded-none md:w-[400px] lg:w-[500px] drop-shadow-img md:border-15 md:-rotate-[5deg]"
                            animate={{ rotateY: [-30, -8, -30] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        />
                        <div className="flex flex-col pt-[50px] md:pb-0 md:pt-0 md:items-end mx-2 md:w-[500px]">
                            <h2 className="font-display text-left text-xl md:text-right md:text-2xl lg:text-3xl text-[#7E571F]">
                                NEW ITEM ALERT!
                            </h2>
                            <p className="font-display  text-brand-black text-2xl text-left md:text-right md:text-3xl lg:text-4xl">
                                Mughlai King Popcorn Chicken
                            </p>
                            <p className="font-text text-brand-black text-left text-[16px] md:text-right mt-[22px]">
                                Crafted with our secret blend of spices, we’ve
                                created the perfect popcorn chicken that pairs
                                beautifully with our Lassi. It's so flavorful on
                                its own, you won't even need sauce!
                            </p>
                            <Button
                                className="w-fit mt-[22px]"
                                type="primary"
                                text="Explore our Menu"
                                onTap={() => {}}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <SectionContainer>
                <div className="flex flex-col">
                    <h2 className="font-display text-[32px] md:text-[50px] text-brand-black text-center">
                        We are Always Moving
                    </h2>
                    <h3 className="font-text font-bold text-brand-primary text-[20px] md:text-[32px] text-center">
                        Find us in these next events
                    </h3>
                    <div className="relative mt-[45px]">
                        <div
                            ref={eventsScrollRef}
                            className="flex flex-nowrap gap-6 overflow-x-auto overflow-y-hidden pb-2 px-8 scroll-smooth"
                        >
                            {upcomingEvents.map((event) => (
                                <MarketEventCard
                                    key={event.id}
                                    imageLink={event.imageLink}
                                    name={event.name}
                                    address={event.address}
                                    date={event.date}
                                    time={event.time}
                                    className="shrink-0"
                                />
                            ))}
                        </div>
                        {/* Gradient edges to suggest scroll */}
                        <div
                            className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r from-brand-white to-transparent"
                            aria-hidden
                        />
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-brand-white to-transparent"
                            aria-hidden
                        />
                        <p className="flex items-center justify-center gap-2 mt-3 text-brand-grey text-sm font-text">
                            <span aria-hidden>←</span>
                            <span>Swipe or scroll to see more</span>
                            <span aria-hidden>→</span>
                        </p>
                    </div>
                    <Button
                        className="w-fit mx-auto mt-[45px]"
                        type="secondary"
                        text="See all our event calendars"
                        onTap={() => {}}
                    />
                </div>
            </SectionContainer>
            <section className="w-full bg-brand-primary">
                <div className="flex container mx-auto px-4 sm:px-0 sm:mx-auto md:relative">
                    <div className="flex flex-col py-[45px] md:py-0 md:flex-row justify-between items-center gap-[45px]">
                        <div className="flex flex-col">
                            <h2 className="font-display text-3xl lg:text-4xl text-[#631100]">
                                Bring Global Fusion to Your Next Event
                            </h2>
                            <p className="font-display text-brand-white text-[18px] lg:text-[24px]">
                                Make your celebration unforgettable with our
                                signature Lassi and hot bites.
                            </p>
                            <p className="font-text text-brand-white text-[16px] py-[20px]">
                                From intimate birthdays to large corporate
                                weddings, we bring the flavor. Our team handles
                                the food with the highest safety standards, so
                                you can relax and enjoy the moment while we
                                serve up freshness.
                            </p>
                            <Button
                                className="w-fit"
                                type="secondary"
                                text="View Catering Menu"
                                onTap={() => {}}
                            />
                        </div>
                        <motion.img
                            src={OwnerImage}
                            className="w-[300px] rounded-[20px] md:w-[400px] lg:w-[500px] drop-shadow-img md:-rotate-[-5deg]"
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

const TopSellersCard = ({
    title,
    body,
    availableIn,
    image,
    direction = "left",
}: {
    title: string;
    body: string;
    availableIn: ("vegan" | "dairy")[];
    image: string;
    direction?: "left" | "right";
}) => {
    const isRight = direction === "right";
    return (
        <div className="flex flex-col justify-between items-center md:flex-row lg:mx-20">
            <motion.img
                src={image}
                className={`w-[70%] mb-5 ${
                    isRight ? "md:order-last" : ""
                } sm:w-[300px] sm:h-[300px] md:w-[356px] md:h-[356px] md:mb-0`}
                initial={{ x: isRight ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, scale: [0.95, 1] }}
                transition={{
                    duration: 0.5,
                    scale: {
                        repeat: Infinity,
                        duration: 0.8,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    },
                    type: "spring",
                }}
            />
            <div className="flex flex-col md:w-[450px]">
                <motion.h3
                    className={`font-display text-[24px] text-brand-black ${
                        isRight ? "md:text-left" : "md:text-right"
                    }`}
                    initial={{ x: isRight ? -100 : 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className={`font-text text-[16px] text-brand-black ${
                        isRight ? "md:text-left" : "md:text-right"
                    } pt-[5px]`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: easeInOut,
                        type: "spring",
                    }}
                >
                    {body}
                </motion.p>
                <motion.p
                    className={`font-text text-brand-primary font-bold text-[20px] ${
                        isRight ? "md:text-left" : "md:text-right"
                    } mt-5`}
                >
                    Available In
                </motion.p>
                <div
                    className={`flex gap-1 mt-[5px] ${
                        isRight ? "" : "md:justify-end"
                    }`}
                >
                    {availableIn.map((val) => (
                        <motion.span
                            className={`${
                                val === "vegan"
                                    ? "bg-[#25A071]"
                                    : "bg-[#FFBC5C]"
                            } rounded-[10px]`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="font-bold font-text text-[14px] mx-[5px] text-brand-white">
                                {val.toUpperCase()}
                            </p>
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
