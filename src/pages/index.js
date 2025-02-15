import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import StarIcon from "@/assets/icons/StarIcon";
import TickIcon from "@/assets/icons/TickIcon";

const Home = (props) => {
    const [visibleImagesCount, setVisibleImagesCount] = useState(1);
    const [currentImagesIndex, setCurrentImagesIndex] = useState(0);
    const [visibleCardsCount, setVisibleCardsCount] = useState(1);
    const [currentCardsIndex, setCurrentCardsIndex] = useState(0);
    const [imageWidth, setImageWidth] = useState(200);
    const totalImages = props.secondContentList[0].sliderImages.length;
    const [cardWidth, setCardWidth] = useState(400);
    const totalCards = props.thirdContentList[0].card.length;

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
                    newVisibleImagesCount = 2;
                    newVisibleCardsCount = 1;
                    newCardWidth = 350;
                    break;
                case width <= 768:
                    newVisibleImagesCount = 2;
                    newVisibleCardsCount = 1;
                    newCardWidth = 400;
                    break;
                case width <= 1024:
                    newVisibleImagesCount = 3;
                    newVisibleCardsCount = 1;
                    newCardWidth = 400;
                    break;
                case width <= 1280:
                    newVisibleImagesCount = 4;
                    newVisibleCardsCount = 2;
                    newCardWidth = 400;
                    break;
                case width <= 1536:
                    newVisibleImagesCount = 5;
                    newVisibleCardsCount = 2;
                    newCardWidth = 400;
                    break;
                default:
                    newVisibleImagesCount = 6;
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

    return (
        <section className="min-[1450px]:container min-[1450px]:mx-auto w-full py-5">
            <div className="first-content flex flex-col items-center lg:flex-row sm:px-16 lg:px-0 lg:pl-32 w-full">
                <span className="lg:hidden block w-full">
                    <img
                        src={props.firstContentList[0].mobileHomeBanner?.url}
                        alt="home-banner"
                    />
                </span>
                <span className="flex flex-col gap-6 p-8 justify-center sm:justify-normal sm:p-0 lg:pt-16 lg:w-[680px]">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.96px] leading-[120%]">
                        {props.firstContentList[0].heading}
                    </h1>
                    <p className="text-xl font-medium">
                        {props.firstContentList[0].text}
                    </p>
                    <ul className="text-[16px] font-medium sm:text-xl sm:font-bold pb-10">
                        <li className="flex gap-5 py-1">
                            <span className="w-[27px]">
                                <TickIcon />
                            </span>
                            <p>{props.firstContentList[0].firstBulletText}</p>
                        </li>
                        <li className="flex gap-5 py-1">
                            <span className="w-[27px]">
                                <TickIcon />
                            </span>
                            <p>{props.firstContentList[0].secondBulletText}</p>
                        </li>
                        <li className="flex gap-5 py-1">
                            <span className="w-[27px]">
                                <TickIcon />
                            </span>
                            <p>{props.firstContentList[0].thirdBulletText}</p>
                        </li>
                    </ul>
                    <span className="flex flex-col sm:flex-row text-base font-medium gap-4 m-2 sm:m-0">
                        <a
                            target="_blank"
                            href="/auditWebsite"
                            className="h-14 border border-customBlueTwo flex justify-between sm:justify-center gap-6 items-center rounded-full text-base font-bold p-1.5 pl-8 sm:px-12 sm:py-[18px]"
                        >
                            <p>{props.firstContentList[0].firstButtonTitle}</p>
                            <span className="sm:hidden block">
                                <ArrowIcon circle={"#160156"} arrow={"#fff"} />
                            </span>
                        </a>
                        <a
                            target="_blank"
                            href="/talkToUs"
                            className="bg-customBlueTwo h-14 text-white flex justify-between sm:justify-center items-center gap-6 rounded-full text-base font-bold p-1.5 pl-8"
                        >
                            <p>{props.firstContentList[0].secondButtonTitle}</p>
                            <ArrowIcon circle={"#fff"} arrow={"#060237"} />
                        </a>
                    </span>
                </span>
                <span className="hidden lg:block w-[450px] xl:w-[630px]">
                    <img
                        src={props.firstContentList[0].homeBanner?.url}
                        alt="home-banner"
                    />
                </span>
            </div>

            <div className="slider mt-16 border-t border-b border-customLavenderOne pb-7">
                <span className="inline-flex px-2 bg-white translate-x-20 -translate-y-4 items-center">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <p className="ml-2 pt-1">
                        {props.sliderList[0].sliderHeading}
                    </p>
                </span>
                <div className="relative overflow-hidden w-full">
                    <motion.div
                        className="flex w-max"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            ease: "linear",
                            duration: 25,
                            repeat: Infinity,
                        }}
                    >
                        {[
                            ...props.sliderList[0].slidingImages,
                            ...props.sliderList[0].slidingImages,
                        ].map((image, index) => (
                            <div key={index} className="w-60 flex-shrink-0">
                                <img
                                    src={`${image?.url}`}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-[74px] object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="second-content py-20 flex flex-col items-center sm:text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.96px] leading-[120%] xl:mx-[200px] px-8 sm:px-16 lg:px-20 mb-8">
                    {props.secondContentList[0].heading}
                </h1>
                <p className="text-xl font-medium px-8 sm:px-16 lg:px-20 xl:mx-[200px] leading-1">
                    {props.secondContentList[0].text}
                </p>
                <div className="mt-10 sm:mx-auto flex items-end justify-center gap-4 overflow-hidden">
                    <button
                        onClick={prevSlide}
                        disabled={currentImagesIndex === 0}
                        className="bg-customLavenderOne rounded-full -rotate-[135deg] hidden sm:block"
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
                            {props.secondContentList[0].sliderImages.map(
                                (image, index) => (
                                    <div key={index} className="flex-shrink-0">
                                        <img
                                            src={`${image?.url}`}
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
                        className="bg-customLavenderOne rounded-full rotate-45 hidden sm:block"
                    >
                        <ArrowIcon circle={"#d3c3f8"} arrow={"#060237"} />
                    </button>
                </div>
                <div className="sm:hidden flex mt-10 justify-center gap-4">
                    <button
                        onClick={prevSlide}
                        disabled={currentImagesIndex === 0}
                        className="bg-customLavenderOne rounded-full -rotate-[135deg]"
                    >
                        <ArrowIcon circle={"#d3c3f8"} arrow={"#060237"} />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={
                            currentImagesIndex + visibleImagesCount >=
                            totalImages
                        }
                        className="bg-customLavenderOne rounded-full rotate-45"
                    >
                        <ArrowIcon circle={"#d3c3f8"} arrow={"#060237"} />
                    </button>
                </div>
            </div>

            <div className="third-content sm:px-16 lg:px-0 py-0 lg:py-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl sm:text-center font-bold tracking-[-0.96px] leading-[120%] px-8 sm:px-16 lg:px-20 2xl:px-[250px]">
                    {props.thirdContentList[0].heading}
                </h1>
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
                            {props.thirdContentList[0].card?.map(
                                (card, index) => (
                                    <div
                                        key={index}
                                        className="bg-customLavenderTwo border border-customLavenderOne rounded-2xl p-[10px_16px_15px_16px]"
                                        style={{
                                            width: `${cardWidth - 16}px`,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <img
                                            className="w-[155px]"
                                            src={card.image?.url}
                                            alt="img"
                                        />
                                        <h1 className="text-2xl md:text-4xl font-bold tracking-[-0.96px] leading-[120%] my-4">
                                            {card.heading}
                                        </h1>
                                        <ul>
                                            <li className="flex gap-5 py-[6px] px-[10px]">
                                                <TickIcon />{" "}
                                                <p>{card.firstBulletPoint}</p>
                                            </li>
                                            <li className="flex gap-5 py-[6px] px-[10px]">
                                                <TickIcon />{" "}
                                                <p>{card.secondBulletPoint}</p>
                                            </li>
                                            <li className="flex gap-5 py-[6px] px-[10px]">
                                                <TickIcon />{" "}
                                                <p>{card.thirdBulletPoint}</p>
                                            </li>
                                            <li className="flex gap-5 py-[6px] px-[10px]">
                                                <TickIcon />{" "}
                                                <p>{card.forthBulletPoint}</p>
                                            </li>
                                        </ul>
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

            <div className="forth-content px-8 lg:px-[96px] py-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl sm:text-center font-bold tracking-[-0.96px] leading-[120%]">
                    {props.forthContentList[0].heading}
                </h1>
                <span className="flex flex-col sm:flex-row mt-20 gap-10 justify-center">
                    {props.forthContentList[0].images?.map((image, index) => {
                        return (
                            <Link
                                href={
                                    index === 0
                                        ? "/wodrobeCaseStudy"
                                        : "goldLeafCaseStudy"
                                }
                                key={index}
                            >
                                <img
                                    src={image.url}
                                    className="w-[570px]"
                                    alt="img"
                                />
                            </Link>
                        );
                    })}
                </span>
                <Link
                    href={"/caseStudy"}
                    className="w-full sm:w-[350px] h-14 mx-auto mt-20 border border-customBlueTwo flex justify-center items-center rounded-full text-base font-bold px-12 py-[18px]"
                >
                    {props.forthContentList[0].buttonTitle}
                </Link>
            </div>

            <div className="fifth-content w-full bg-customLavenderTwo p-[85px_40px_70px_40px] sm:p-[85px_80px_70px_80px] md:p-[85px_120px_70px_120px]">
                <h1 className="text-3xl md:text-4xl lg:text-5xl sm:text-center font-bold tracking-[-0.96px] leading-[120%]">
                    {props.fifthContentList[0].heading}
                </h1>
                <span className="flex flex-col md:flex-row justify-center mt-10 gap-6">
                    <a
                        target="_blank"
                        href="/auditWebsite"
                        className="bg-customBlueTwo h-14 text-white flex justify-between md:justify-center items-center gap-6 rounded-full text-base font-bold p-1.5 pl-8"
                    >
                        <p>{props.fifthContentList[0].firstButtonTitle}</p>
                        <ArrowIcon circle={"#fff"} arrow={"#060237"} />
                    </a>
                    <a
                        target="_blank"
                        href="/talkToUs"
                        className="h-14 border border-customBlueTwo flex justify-between md:justify-center gap-6 items-center rounded-full text-base font-bold p-1.5 pl-8 md:px-12 md:py-[18px]"
                    >
                        <p>{props.fifthContentList[0].secondButtonTitle}</p>
                        <span className="md:hidden block">
                            <ArrowIcon circle={"#060237"} arrow={"#fff"} />
                        </span>
                    </a>
                </span>
            </div>

            <div className="sixth-content py-[69px] border-y border-customLavenderOne">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold tracking-[-0.96px] leading-[120%]">
                    {props.sixthContentText}
                </h1>
            </div>
        </section>
    );
};

export async function getServerSideProps() {
    let res = await fetch(
        "https://landing-page-backend-6gwm.onrender.com/api/homepage-content-lists?populate[firstContentList][populate]=homeBanner&populate[firstContentList][populate]=mobileHomeBanner&populate[sliderList][populate]=slidingImages&populate[secondContentList][populate]=sliderImages&populate[thirdContentList][populate][card][populate]=image&populate[forthContentList][populate]=images&populate[fifthContentList]=*"
    );
    let response = await res.json();
    let homePageData = response.data[0];
    return { props: homePageData };
}

export default Home;
