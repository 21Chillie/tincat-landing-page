import { RiHeartsFill } from "react-icons/ri";
import { FaCat, FaCalendarDay, FaLocationDot } from "react-icons/fa6";

import productImage1 from "../assets/images/features-section/tincat hold.webp";

export type featureHeaderContentType = {
  label: string;
  title: string;
  description: string;
};

export type featureCardContentType = {
  title: string;
  description: string;
  icon: React.JSX.Element;
};

export const featureHeaderContent: featureHeaderContentType = {
  label: "CAT MATCHING",
  title: "Purr-fect connections that grow with every swipe.",
  description:
    "Find your feline soulmate with a platform built for cats and the humans who love them from curious kittens to seasoned nappers, there's a perfect match for every whisker.",
};

export const featureCardsContent: featureCardContentType[] = [
  {
    title: "Swipe & Match",
    description:
      "Swipe left or right on potential matches for your cat. When both cats (owners) swipe right, it’s a match!",
    icon: <RiHeartsFill></RiHeartsFill>,
  },

  {
    title: "Nearby Matches",
    description:
      "Nearby location-based matching to find other fellow cats in the neighborhood for easy and convenient meetups.",
    icon: <FaLocationDot></FaLocationDot>,
  },

  {
    title: "Purr-sonality Quiz",
    description:
      "A fun quiz to help determine your cat’s personality type, which helps in finding the most compatible matches.",
    icon: <FaCat></FaCat>,
  },

  {
    title: "Paw-some Events",
    description:
      "Swipe left or right on potential matches for your cat. When both cats (owners) swipe right, it’s a match!",
    icon: <FaCalendarDay></FaCalendarDay>,
  },
];

export const productImageContent = {
  firstImgSrc: productImage1,
};
