// import stripe from "../assets/images/sponsor-section/stripe.webp";
// import vercel from "../assets/images/sponsor-section/svg/vercel.svg";
// import netlify from "../assets/images/sponsor-section/netlify.webp";
// import amazon from "../assets/images/sponsor-section/amazon.webp";

import React from "react";
import { SiSamsungpay } from "react-icons/si";
import { SiKinsta } from "react-icons/si";
import { SiMorrisons } from "react-icons/si";
import { SiNette } from "react-icons/si";

type sponsorType = {
  name: string;
  imgSrc: React.JSX.Element | string;
};

export const sponsors: sponsorType[] = [
  { name: "Samsung Pay", imgSrc: <SiSamsungpay></SiSamsungpay> },
  { name: "Morrisons", imgSrc: <SiMorrisons></SiMorrisons> },
  { name: "Kinsta", imgSrc: <SiKinsta></SiKinsta> },
  { name: "Nette", imgSrc: <SiNette></SiNette> },
];
