import Button from "../../components/button";
import HeaderHeroImage from "../../assets/Header_Hero_Image.png";
import { easeInOut, motion } from "motion/react";
import SectionContainer from "../../components/section-container";
import MapleLassi from "../../assets/Maple Lassi.png";
import MangoLassi from "../../assets/MangoLassi.png";
import FreshLassiBG from "../../assets/FreshLasiImage.png";
import Chicken22Image from "../../assets/chicken22.png";
import { NavBar } from "./NavBar";

const HomePage = () => {
    return (
        <div className="bg-brand-white min-h-dvh overflow-x-hidden">
            <section className="w-full bg-brand-secondary pt-[30px]">
                <div className="container mx-auto">
                    <NavBar />
                </div>
            </section>
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
                        <img
                            src={Chicken22Image}
                            className="w-[300px] rounded-[20px] border-brand-black border-10 md:rounded-none md:w-[400px] lg:w-[500px] drop-shadow-img md:border-15 md:-rotate-[5deg]"
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
        </div>
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
