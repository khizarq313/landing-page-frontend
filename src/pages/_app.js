import "@/styles/globals.css";
import Head from "next/head";
import { PagesTopLoader } from 'nextjs-toploader/pages';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps, navbarPageData, footerPageData }) {

  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
  </Head>
  
  const router = useRouter();

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <>
      <PagesTopLoader 
        color="#d3c3f8"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={1000}
        shadow="0 0 10px #d3c3f8,0 0 5px #d3c3f8"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />

      <AnimatePresence mode="wait">
        <motion.div  key={router.pathname} {...pageTransition}>
          <Navbar navbarPageData={navbarPageData} />
          <Component {...pageProps} />
          <Footer  footerPageData={footerPageData} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
    let navbarRes = await fetch("https://landing-page-backend-0c0j.onrender.com/api/navbar-content-lists?populate=*");
    let navbarResponse = await navbarRes.json();
    let navbarPageData = navbarResponse.data[0];
    let footerRes = await fetch("https://landing-page-backend-0c0j.onrender.com/api/footer-content-lists?populate=*");
    let footerResponse = await footerRes.json();
    let footerPageData = footerResponse.data[0];
  return { navbarPageData, footerPageData };
};

export default MyApp;
