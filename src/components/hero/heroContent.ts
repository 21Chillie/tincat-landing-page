import heroImg from "../../assets/images/heroes-section/hero-img.webp";

type heroContentType = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  rating: 1 | 2 | 3 | 4 | 5;
  totalReviews: number;
};

export const heroContent: heroContentType = {
  title: "Meet The Purr-fect Matchmakers",
  description:
    "In a world where every whisker tells a tale, our determined feline heroes are on a mission to make tails wag and hearts purr! They are the love champions, whiskered wingmen, and supreme matchmakers in the cat kingdom.",
  imageSrc: heroImg,
  imageAlt: "tincat hero image",
  rating: 5,
  totalReviews: 1000,
};
