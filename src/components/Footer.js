import Link from "next/link";
import React from "react";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";

const Footer = ({ footerPageData }) => {
    return (
        <footer className="min-[1450px]:container min-[1450px]:mx-auto w-full px-8 md:px-20 py-14">
            <div className="flex md:flex-row flex-col border-b-2 border-dashed border-customLavenderOne pb-8">
                <span className="flex flex-col justify-stretch h-[181px] md:w-2/5">
                    <Link
                        href={"/"}
                        className="text-4xl font-bold tracking-[-0.96px] leading-[120%]"
                    >
                        {footerPageData.title}
                    </Link>
                    <p className="text-xl font-medium text-customLavenderThree">
                        {footerPageData.text}
                    </p>
                    <span className="flex gap-6 items-center">
                        <InstagramIcon />
                        <LinkedInIcon />
                    </span>
                </span>
                <span className="inline-flex flex-col ml-0 md:ml-auto mt-4 items-start md:items-end md:w-2/5 gap-2">
                    <h1 className="text-[22px] font-bold">
                        {footerPageData.sectionHeading}
                    </h1>
                    <Link
                        className="text-xl font-medium text-customLavenderThree"
                        href={"/shopifyStore"}
                    >
                        {footerPageData.firstButtonTitle}
                    </Link>
                    <Link
                        className="text-xl font-medium text-customLavenderThree"
                        href={"/landingPage"}
                    >
                        {footerPageData.secondButtonTitle}
                    </Link>
                    <Link
                        className="text-xl font-medium text-customLavenderThree"
                        href={"/caseStudy"}
                    >
                        {footerPageData.thirdButtonTitle}
                    </Link>
                </span>
            </div>
            <div className="mt-8 text-customLavenderThree">
                <p>{footerPageData.copyrightText}</p>
            </div>
        </footer>
    );
};

export default Footer;
