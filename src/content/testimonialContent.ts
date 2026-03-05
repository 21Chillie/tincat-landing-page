import user1 from "../assets/images/testimonial-section/user-1.webp";
import user2 from "../assets/images/testimonial-section/user-2.webp";
import user3 from "../assets/images/testimonial-section/user-3.webp";
import user4 from "../assets/images/testimonial-section/user-4.webp";
import user5 from "../assets/images/testimonial-section/user-5.webp";
import user6 from "../assets/images/testimonial-section/user-6.webp";
import user7 from "../assets/images/testimonial-section/user-7.webp";

/**
 * Customization guide:
 * - You can customize: heading text, quote, name, username, and profile image.
 * - Do not customize: required keys (quote, name, username, imgSrc) and export names.
 * - How: edit entries in testimonialContent and keep unique usernames for stable rendering keys.
 */

export type testimonialHeadingType = {
  label: string;
  title: string;
};

export type testimonialContentType = {
  quote: string;
  name: string;
  username: string;
  imgSrc: string;
};

export const testimonialHeadingContent: testimonialHeadingType = {
  label: "Testimonials",
  title:
    "Don't just take our word for it, see what our purr-fect users have to say!",
};

export const testimonialContent: testimonialContentType[] = [
  {
    quote:
      "TinCat changed our lives. Mr. Whiskers found his soulmate in just 3 swipes and now they nap together every single afternoon. I've never seen him purr so loud.",
    name: "Brenna Goyette",
    username: "@brennagoyette",
    imgSrc: user1,
  },
  {
    quote:
      "My tabby Luna was so shy until she matched with Oliver. Now they're inseparable! The app made it so easy to find the perfect playmate.",
    name: "Sarah Mitchell",
    username: "@sarahmitchell",
    imgSrc: user2,
  },
  {
    quote:
      "As a foster cat parent, TinCat helped me find forever homes for 12 cats this year. The best investment I've ever made!",
    name: "James Rodriguez",
    username: "@jamesrodriguez",
    imgSrc: user3,
  },
  {
    quote:
      "My senior cat Max finally found a friend his own age. TinCat's filters are purr-fect for finding the right match.",
    name: "Emily Chen",
    username: "@emilychen",
    imgSrc: user4,
  },
  {
    quote:
      "We adopted siblings from different litters and they instantly recognized each other. TinCat reunited long-lost cat family members!",
    name: "Michael Park",
    username: "@michaelpark",
    imgSrc: user5,
  },
  {
    quote:
      "From skeptical to obsessed! My cat now has a weekly playdate and I've made human friends too through the community.",
    name: "Lisa Thompson",
    username: "@lisathompson",
    imgSrc: user6,
  },
  {
    quote:
      "The verified owner feature gives me peace of mind. Found amazing cat sitters through TinCat while on vacation.",
    name: "David Kim",
    username: "@davidkim",
    imgSrc: user7,
  },
];
