import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import OptionIcon from "@/assets/icons/OptionIcon";
import TickIcon from "@/assets/icons/TickIcon";

const shopifyStore = (props) => {
    const [openDetails, setOpenDetails] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const [visibleImagesCount, setVisibleImagesCount] = useState(1);
    const [currentImagesIndex, setCurrentImagesIndex] = useState(0);
    const [visibleCardsCount, setVisibleCardsCount] = useState(1);
    const [currentCardsIndex, setCurrentCardsIndex] = useState(0);
    const imageWidth = 366;
    const totalImages = props.sliderList[0].sliderImages.length;
    const [cardWidth, setCardWidth] = useState(400);
    const totalCards = props.secondContentList[0].shopifyCard.length;

    const nextSlide = () => {
        if (currentImagesIndex + visibleImagesCount < totalImages) {
            setCurrentImagesIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentImagesIndex > 0) {
            setCurrentImagesIndex((prev) => prev - 1);
        }
    };

    const nextCard = () => {
        if (currentCardsIndex + visibleCardsCount < totalCards) {
            setCurrentCardsIndex((prev) => prev + 1);
        }
    };

    const prevCard = () => {
        if (currentCardsIndex > 0) {
            setCurrentCardsIndex((prev) => prev - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let newVisibleImagesCount;
            let newVisibleCardsCount;
            let newCardWidth;

            switch (true) {
                case width <= 450:
                    newVisibleImagesCount = 1;
                    newVisibleCardsCount = 1;
                    newCardWidth = 300;
                    break;
                case width <= 640:
                    newVisibleImagesCount = 1;
                    newVisibleCardsCount = 1;
                    newCardWidth = 350;
                    break;
                case width <= 768:
                    newVisibleImagesCount = 1;
                    newVisibleCardsCount = 1;
                    newCardWidth = 400;
                    break;
                case width <= 1024:
                    newVisibleImagesCount = 2;
                    newVisibleCardsCount = 1;
                    newCardWidth = 400;
                    break;
                case width <= 1280:
                    newVisibleImagesCount = 2;
                    newVisibleCardsCount = 2;
                    newCardWidth = 400;
                    break;
                case width <= 1536:
                    newVisibleImagesCount = 2;
                    newVisibleCardsCount = 2;
                    newCardWidth = 400;
                    break;
                default:
                    newVisibleImagesCount = 3;
                    newVisibleCardsCount = 3;
                    newCardWidth = 400;
            }

            setVisibleImagesCount(newVisibleImagesCount);
            setVisibleCardsCount(newVisibleCardsCount);
            setCardWidth(newCardWidth);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleDetails = function (e, n) {
        e.preventDefault();
        if (openDetails === n) {
            setIsOpen(!isOpen);
        } else {
            setOpenDetails(n);
            setIsOpen(true);
        }
    };

    return (
        <section className="min-[1450px]:container min-[1450px]:mx-auto w-full">
            <div className="first-content pt-4 sm:pt-[115px] sm:text-center flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-[-0.96px] px-6 lg:px-40">
                    {props.firstContentList[0].heading}
                </h1>
                <p className="text-xl font-medium px-6 lg:px-0">
                    {props.firstContentList[0].text}
                </p>
                <span className="w-full px-6 lg:px-0 flex justify-center text-base font-medium gap-4 mt-12">
                    <a
                        target="_blank"
                        href="/auditWebsite"
                        className="w-full sm:w-auto h-14 border border-customBlueTwo flex justify-center items-center rounded-full text-base font-bold px-12 py-[18px]"
                    >
                        <p>{props.firstContentList[0].firstButtonTitle}</p>
                    </a>
                    <a
                        target="_blank"
                        href="/talkToUs"
                        className="rounded-full"
                    >
                        <span className="hidden sm:flex bg-customBlueTwo sm:h-14 text-white justify-center items-center gap-4 rounded-full text-base font-bold sm:p-1.5 sm:pl-8">
                            <p>{props.firstContentList[0].secondButtonTitle}</p>
                            <ArrowIcon circle={"white"} arrow={"#060237"} />
                        </span>
                        <span className="sm:hidden block bg-customBlueTwo rounded-full">
                            {" "}
                            <ArrowIcon circle={"none"} arrow={"#fff"} />{" "}
                        </span>
                    </a>
                </span>
                <img
                    className=" w-full sm:w-[1110px]"
                    src={props.firstContentList[0].image?.url}
                    alt="banner"
                />
            </div>

            <div className="second-content flex flex-col justify-around py-[120px] lg:px-[100px] bg-customLavenderTwo gap-4">
                <div className="mt-10 flex items-end justify-center gap-4 overflow-hidden">
                    <div
                        className="relative"
                        style={{
                            width: visibleCardsCount * cardWidth - 16,
                            overflow: "hidden",
                        }}
                    >
                        <motion.div
                            className="flex gap-4"
                            animate={{
                                x: `-${currentCardsIndex * cardWidth}px`,
                            }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                        >
                            {props.secondContentList[0].shopifyCard?.map(
                                (card, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-9 rounded-2xl w-[388px]"
                                        style={{
                                            width: `${cardWidth - 16}px`,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <img
                                            className="w-[105px]"
                                            src={card.image?.url}
                                            alt="image"
                                        />
                                        <h1 className="md:pr-16 text-2xl font-bold tracking-[-0.96px] leading-[120%] my-4">
                                            {card.heading}
                                        </h1>
                                        <p>{card.text}</p>
                                    </div>
                                )
                            )}
                        </motion.div>
                    </div>
                </div>

                {visibleCardsCount <= 2 && (
                    <div className="flex mt-10 justify-center gap-4">
                        <button
                            onClick={prevCard}
                            disabled={currentCardsIndex === 0}
                            className="bg-customLavenderOne rounded-full -rotate-[135deg]"
                        >
                            <ArrowIcon circle={"#d3c3f8"} arrow={"#060237"} />
                        </button>
                        <button
                            onClick={nextCard}
                            disabled={
                                currentCardsIndex + visibleCardsCount >=
                                totalCards
                            }
                            className="bg-customLavenderOne rounded-full rotate-45"
                        >
                            <ArrowIcon circle={"#d3c3f8"} arrow={"#060237"} />
                        </button>
                    </div>
                )}
            </div>

            <div className="third-content flex flex-col items-center lg:items-start lg:flex-row px-6 sm:px-[60px] 2xl:px-[80px] py-[120px] gap-16">
                <img
                    className="rounded-2xl xl:w-[480px]"
                    src={props.thirdContentList[0].image?.url}
                    alt="image"
                />
                <span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.96px] leading-[120%] sm:pr-12">
                        {props.thirdContentList[0].heading}
                    </h1>
                    <p className="text-xl font-medium my-8 sm:pr-12">
                        {props.thirdContentList[0].text}
                    </p>
                    <ul className="text-xl font-bold pb-10">
                        <li className="flex gap-5 py-[6px] px-[10px]">
                            <span className="w-[27px]">
                                <TickIcon />
                            </span>
                            <p>{props.thirdContentList[0].firstBulletText}</p>
                        </li>
                        <li className="flex gap-5 py-[6px] px-[10px]">
                            <span className="w-[27px]">
                                <TickIcon />
                            </span>
                            <p>{props.thirdContentList[0].secondBulletText}</p>
                        </li>
                        <li className="flex gap-5 py-[6px] px-[10px]">
                            <span className="w-[27px]">
                                <TickIcon />
                            </span>
                            <p>{props.thirdContentList[0].thirdBulletText}</p>
                        </li>
                        <li className="flex gap-5 py-[6px] px-[10px]">
                            <span className="w-[27px]">
                                <TickIcon />
                            </span>
                            <p>{props.thirdContentList[0].forthBulletText}</p>
                        </li>
                        <li className="flex gap-5 py-[6px] px-[10px]">
                            <span className="w-[27px]">
                                <TickIcon />
                            </span>
                            <p>{props.thirdContentList[0].fifthBulletText}</p>
                        </li>
                    </ul>
                </span>
            </div>

            <div className="slider py-20">
                <div className="mt-10 sm:mx-auto flex items-end justify-center gap-4 overflow-hidden">
                    <button
                        onClick={prevSlide}
                        disabled={currentImagesIndex === 0}
                        className="bg-customLavenderOne rounded-full -rotate-[135deg] hidden lg:block"
                    >
                        <ArrowIcon circle={"#d3c3f8"} arrow={"#060237"} />
                    </button>
                    <div
                        style={{
                            width: visibleImagesCount * imageWidth - 16,
                            overflow: "hidden",
                        }}
                        className="flex  justify-center items-center"
                    >
                        <motion.div
                            className={`w-full flex gap-4`}
                            animate={{
                                x: `-${currentImagesIndex * imageWidth}px`,
                            }}
                            transition={{
                                type: "tween",
                                ease: "easeInOut",
                                duration: 0.5,
                            }}
                        >
                            {props.sliderList[0].sliderImages.map(
                                (image, index) => (
                                    <div key={index} className="flex-shrink-0">
                                        <img
                                            src={image?.url}
                                            alt={`Slide ${index + 1}`}
                                            style={{
                                                width: `${imageWidth - 16}px`,
                                                objectFit: "contain",
                                            }}
                                        />
                                    </div>
                                )
                            )}
                        </motion.div>
                    </div>
                    <button
                        onClick={nextSlide}
                        disabled={
                            currentImagesIndex + visibleImagesCount >=
                            totalImages
                        }
                        className="bg-customLavenderOne rounded-full rotate-45 hidden lg:block"
                    >
                        <ArrowIcon circle={"#d3c3f8"} arrow={"#060237"} />
                    </button>
                </div>
                <div className="flex mt-10 justify-center items-center gap-4">
                    <button
                        onClick={prevSlide}
                        disabled={currentImagesIndex === 0}
                        className="lg:hidden bg-customLavenderOne rounded-full h-[44px] w-[44px] -rotate-[135deg]"
                    >
                        <ArrowIcon circle={"#d3c3f8"} arrow={"#060237"} />
                    </button>
                    <Link
                        href={"/caseStudy"}
                        className="lg:mx-auto border border-customBlueTwo flex justify-center items-center rounded-full text-base font-bold p-[18px] sm:px-12"
                    >
                        {props.sliderList[0].buttonTitle}
                    </Link>
                    <button
                        onClick={nextSlide}
                        disabled={
                            currentImagesIndex + visibleImagesCount >=
                            totalImages
                        }
                        className="lg:hidden bg-customLavenderOne rounded-full h-[44px] w-[44px] rotate-45"
                    >
                        <ArrowIcon circle={"#d3c3f8"} arrow={"#060237"} />
                    </button>
                </div>
            </div>

            <div className="forth-content flex flex-col items-center lg:items-start lg:flex-row px-6 sm:px-[60px] 2xl:px-[80px] py-[120px] gap-16">
                <img
                    className="rounded-2xl xl:w-[480px]"
                    src={props.forthContentList[0].image?.url}
                    alt="image"
                />
                <span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.96px] leading-[120%] sm:pr-12">
                        {props.forthContentList[0].heading}
                    </h1>
                    <p className="text-xl font-medium my-8 sm:pr-12">
                        {props.forthContentList[0].text}
                    </p>
                    <ul className="text-xl font-bold pb-10">
                        <li className="flex gap-5 py-[6px] px-[10px]">
                            <span className="w-[27px]">
                                <TickIcon />
                            </span>
                            <p>{props.forthContentList[0].firstBulletText}</p>
                        </li>
                        <li className="flex gap-5 py-[6px] px-[10px]">
                            <span className="w-[27px]">
                                <TickIcon />
                            </span>
                            <p>{props.forthContentList[0].secondBulletText}</p>
                        </li>
                        <li className="flex gap-5 py-[6px] px-[10px]">
                            <span className="w-[27px]">
                                <TickIcon />
                            </span>
                            <p>{props.forthContentList[0].thirdBulletText}</p>
                        </li>
                    </ul>
                    <a
                        target="_blank"
                        href="/auditWebsite"
                        className="sm:w-[240px] w-full bg-customBlueTwo h-14 text-white flex justify-between sm:justify-center items-center gap-4 rounded-full text-base font-bold p-1.5 pl-8"
                    >
                        <p>{props.forthContentList[0].buttonTitle}</p>
                        <ArrowIcon circle={"#fff"} arrow={"#060237"} />
                    </a>
                </span>
            </div>

            <div className="fifth-content px-6 sm:px-8 md:px-[120px] pt-[115px] pb-[80px] bg-customLavenderTwo flex flex-col items-center gap-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.96px] leading-[120%] sm:text-center">
                    {props.fifthContentList[0].heading}
                </h1>
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-16">
                    {props.fifthContentList[0].smallCard.map((card, index) => {
                        return (
                            <span
                                key={index}
                                className="w-auto lg:w-60 flex lg:flex-col gap-8 lg:gap-4 items-center border-b lg:border-b-0 border-customLavenderOne py-8 lg:p-0"
                            >
                                <h1 className="text-5xl font-bold tracking-[-0.96px] leading-[120%] text-center">
                                    {card.heading}
                                </h1>
                                <p className="text-xl font-medium text-center">
                                    {card.text}
                                </p>
                            </span>
                        );
                    })}
                </div>
                <a
                    target="_blank"
                    href="talkToUs"
                    className="w-full sm:w-auto bg-customBlueTwo h-14 text-white flex justify-between sm:justify-center items-center gap-4 rounded-full text-base font-bold p-1.5 pl-8"
                >
                    <p>{props.fifthContentList[0].buttonTitle}</p>
                    <ArrowIcon circle={"#fff"} arrow={"#060237"} />
                </a>
            </div>

            <div className="sixth-content py-20 px-6 sm:px-8 md:px-[120px]">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.96px] leading-[120%] text-center">
                    {props.sixthContentList[0].heading}
                </h1>
                <div className="my-20 flex flex-col gap-4">
                    {props.sixthContentList[0].smallList?.map((list, index) => {
                        return (
                            <details
                                key={index}
                                className="bg-customLavenderTwo rounded-2xl text-[18px] font-normal"
                                open={openDetails === index && isOpen}
                                onClick={(e) => toggleDetails(e, index)}
                            >
                                <summary
                                    className={`list-none px-[45px] py-[22px] flex justify-between items-center cursor-pointer ${
                                        openDetails === index && isOpen
                                            ? "border-b border-customLavenderOne border-dashed"
                                            : ""
                                    }`}
                                >
                                    {list.question}
                                    <motion.span
                                        animate={{
                                            rotate:
                                                openDetails === index && isOpen
                                                    ? 180
                                                    : 0,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <OptionIcon />
                                    </motion.span>
                                </summary>
                                <p className="px-[45px] py-[30px] text-base text-customLavenderThree">
                                    {list.answer}
                                </p>
                            </details>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export async function getServerSideProps() {
    let res = await fetch(
        "https://landing-page-backend-0c0j.onrender.com/api/shopify-store-page-all-data?populate[firstContentList][populate]=image&populate[secondContentList][populate][shopifyCard][populate]=image&populate[thirdContentList][populate]=image&populate[sliderList][populate]=sliderImages&populate[forthContentList][populate]=image&populate[fifthContentList][populate]=smallCard&populate[sixthContentList][populate]=smallList"
    );
    let response = await res.json();
    let shopifyStorePageData = response.data[0];
    return { props: shopifyStorePageData };
}

export default shopifyStore;
