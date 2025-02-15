import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import ArrowIcon from "@/assets/icons/ArrowIcon";

const Navbar = ({ navbarPageData }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) setIsMenuOpen(false);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navBtnClass = function (pageName) {
        if (isMobile) {
            return `p-4 w-full font-medium border-b border-customLavenderTwo ${
                pageName === pathname ? "bg-customLavenderTwo" : ""
            }`;
        } else {
            return `px-7 py-2 font-bold rounded-full ${
                pageName === pathname ? "bg-customLavenderTwo" : ""
            }`;
        }
    };

    return (
        <header className="relative w-full px-6 md:px-10 py-6 min-[1450px]:container min-[1450px]:mx-auto min-[1450px]:px-20">
            <div className="flex items-center justify-between h-14">
                {isMobile && (
                    <button
                        className="flex flex-col justify-between h-6 w-8 relative z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <motion.span
                            className="w-8 h-[2px] bg-black"
                            animate={
                                isMenuOpen
                                    ? { rotate: 45, y: 11 }
                                    : { rotate: 0, y: 0 }
                            }
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-8 h-[2px] bg-black"
                            animate={
                                isMenuOpen ? { opacity: 0 } : { opacity: 1 }
                            }
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="w-8 h-[2px] bg-black"
                            animate={
                                isMenuOpen
                                    ? { rotate: -45, y: -11 }
                                    : { rotate: 0, y: 0 }
                            }
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                )}

                <Link
                    href="/"
                    className="flex font-medium items-center text-gray-900"
                >
                    <h1 className="text-4xl font-extrabold tracking-[-1.44px] leading-[120%]">
                        {navbarPageData.title}
                    </h1>
                </Link>

                <nav className="hidden lg:flex items-center text-base justify-center border border-customLavenderOne p-[6px] rounded-full">
                    <Link
                        href="/shopifyStore"
                        className={navBtnClass("/shopifyStore")}
                    >
                        {navbarPageData.firstButtonTitle}
                    </Link>
                    <Link
                        href="/landingPage"
                        className={navBtnClass("/landingPage")}
                    >
                        {navbarPageData.secondButtonTitle}
                    </Link>
                    <Link
                        href="/caseStudy"
                        className={navBtnClass("/caseStudy")}
                    >
                        {navbarPageData.thirdButtonTitle}
                    </Link>
                </nav>

                <a
                    target="_blank"
                    href="talkToUs"
                    className="bg-customBlueTwo lg:h-14 text-white flex justify-center items-center gap-4 rounded-full text-base font-bold lg:p-1.5 lg:pl-8"
                >
                    {!isMobile && (
                        <>
                            <p>{navbarPageData.navbarMainButtonTitle}</p>
                            <ArrowIcon circle={"white"} arrow={"#160156"} />
                        </>
                    )}
                    {isMobile && <ArrowIcon circle={"none"} arrow={"#fff"} />}
                </a>
            </div>

            <AnimatePresence>
                {isMenuOpen && isMobile && (
                    <motion.nav
                        initial={{ y: "-10%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-10%", opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute top-full left-0 w-full px-2 bg-white border-t border-gray-200 flex flex-col items-center"
                    >
                        <Link
                            href="/shopifyStore"
                            className={navBtnClass("/shopifyStore")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {navbarPageData.firstButtonTitle}
                        </Link>
                        <Link
                            href="/landingPage"
                            className={navBtnClass("/landingPage")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {navbarPageData.secondButtonTitle}
                        </Link>
                        <Link
                            href="/caseStudy"
                            className={navBtnClass("/caseStudy")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {navbarPageData.thirdButtonTitle}
                        </Link>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
