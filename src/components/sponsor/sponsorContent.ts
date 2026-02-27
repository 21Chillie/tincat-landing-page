import stripe from "../../assets/images/sponsor-section/stripe.webp";
import vercel from "../../assets/images/sponsor-section/vercel.webp";
import netlify from "../../assets/images/sponsor-section/netlify.webp";
import amazon from "../../assets/images/sponsor-section/amazon.webp";

type sponsorType = {
  name: string;
  imgSrc: string;
};

export const sponsors: sponsorType[] = [
  { name: "bizinsider", imgSrc: vercel },
  { name: "mashable", imgSrc: stripe },
  { name: "netlify", imgSrc: netlify },
  { name: "amazon", imgSrc: amazon },
];
