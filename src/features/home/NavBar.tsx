import { useState } from "react";
import logo from "../../assets/logo.svg";
import { AnimatePresence, motion } from "motion/react";

export const navLinks = [
    { linkText: "Home", path: "/" },
    { linkText: "About Us", path: "/" },
    { linkText: "Event Calendar", path: "/" },
    { linkText: "Menu", path: "/" },
    { linkText: "Contact Us", path: "/" },
];

export const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        console.log("toggle clicked");
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="mb-10 flex justify-between items-center md:mb-0">
            <img
                src={logo}
                className="w-[90px] h-[90px] pt-0 md:w-[119px] md:h-[119px] drop-shadow-img"
            />

            {/* Mobile menu button */}
            <button
                type="button"
                className="inline-flex pr-2 relative z-50 md:hidden"
                onClick={() => toggleMobileMenu()}
            >
                {!isMobileMenuOpen && (
                    <svg
                        className="w-10 h-10 text-brand-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M5 7h14M5 12h14M5 17h14"
                        />
                    </svg>
                )}

                {isMobileMenuOpen && (
                    <svg
                        className="w-10 h-10 text-brand-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                )}
            </button>

            {/* Mobile nav link */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={
                            "fixed inset-0 z-40 flex items-center justify-center text-center bg-brand-primary md:hidden"
                        }
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                    >
                        <div className="flex flex-col gap-8 font-display  font-bold text-[20px] text-brand-white ">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    href={link.path}
                                    key={link.linkText
                                        .replace(" ", "_")
                                        .toLowerCase()}
                                    onClick={() => toggleMobileMenu()}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.05,
                                        ease: "backOut",
                                    }}
                                >
                                    {link.linkText}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Web nav links */}
            <div className={`hidden md:block md:w-auto`}>
                <div className="flex gap-[25px] font-text font-bold text-[20px] text-brand-white">
                    {navLinks.map((link) => (
                        <a
                            href={link.path}
                            key={link.linkText.replace(" ", "_").toLowerCase()}
                        >
                            {link.linkText}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
