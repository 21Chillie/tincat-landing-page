/**
 * Customization guide:
 * - You can customize: title, description, cta, totalReviews, imageSrc, imageAlt, rating (1-5).
 * - Do not customize: heroContentType keys and exported name (heroContent).
 * - How: edit text/number values and swap the image import used by imageSrc.
 */
import heroImg from "../assets/images/heroes-section/hero-img.webp";

type heroContentType = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  rating: 1 | 2 | 3 | 4 | 5;
  totalReviews: number;
  cta: string;
};

export const heroContent: heroContentType = {
  title: "Meet The Purr-fect Matchmakers",
  description:
    "In a world where every whisker tells a tale, our determined feline heroes are on a mission to make tails wag and hearts purr! They are the love champions, whiskered wingmen, and supreme matchmakers in the cat kingdom.",
  imageSrc: heroImg,
  imageAlt: "tincat hero image",
  rating: 5,
  totalReviews: 1000,
  cta: "Get Started",
};
