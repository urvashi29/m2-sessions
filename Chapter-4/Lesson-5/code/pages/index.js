import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Roboto } from "next/font/google";
import { montserrat, poppins } from "@/utils/font";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  let url =
    "https://plus.unsplash.com/premium_photo-1673795754005-214e3e1fccba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&family=Sevillana&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      {/* <img src="unsplash.jpg" height={200} width={200} /> */}
      <Image src="/unsplash.jpg" height={200} width={200} />
      <Image src={url} height={200} priority width={200} />
      <Image src="/images/candle.jpg" height={200} width={200} />

      {/* <p style={{ fontFamily: "Roboto" }}>Lorem Ipsum</p> */}

      <p className={roboto.className}>Lorem Ipsum</p>

      <p className={poppins.className}>Hello</p>
      <p style={{ fontFamily: `${montserrat.variable}` }}>World</p>
    </>
  );
};

export default Home;
