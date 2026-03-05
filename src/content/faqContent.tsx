/**
 * Customization guide:
 * - You can customize: faq heading, contact cards, question/answer content, and icons.
 * - Do not customize: required keys for contact and faq items, plus export names.
 * - How: edit faqHeading/faqContactContent/faqContent values; keep data shape unchanged.
 */
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";

export type FaqContentType = {
  question: string;
  answer: React.ReactNode;
};

type ContactMethodType = "whatsapp" | "email" | "live_chat";

export type ContactContentType = {
  method: ContactMethodType;
  title: string;
  description: string;
  cta: string;
  value: string;
  icon: React.ReactNode;
};

export const faqHeading = {
  label: "faq",
  title: "You have questions, we have answers",
  description:
    "Need immediate assistance? Reach out to our customer support team:",
};

export const faqContactContent: ContactContentType[] = [
  {
    method: "whatsapp",
    title: "Chat on WhatsApp",
    description:
      "Get a quick response from our support team directly on WhatsApp. We're available Monday to Friday, 9am to 6pm.",
    cta: "Open WhatsApp",
    value: "https://wa.me/1234567890",
    icon: <IoLogoWhatsapp></IoLogoWhatsapp>,
  },
  {
    method: "email",
    title: "Send us an Email",
    description:
      "Prefer to write it out? Send us an email and we'll get back to you within 24 hours on business days.",
    cta: "Send Email",
    value: "support@tincat.com",
    icon: <MdEmail></MdEmail>,
  },
  {
    method: "live_chat",
    title: "Live Chat",
    description:
      "Need help right now? Start a live chat with our support team and get answers in real time.",
    cta: "Start Live Chat",
    value: "#live-chat",
    icon: <IoMdChatbubbles></IoMdChatbubbles>,
  },
];

export const faqContent: FaqContentType[] = [
  {
    question: "How do I create a profile for my cat?",
    answer: (
      <>
        Creating a profile is easy. After downloading the app, sign up and start
        by entering basic information about your cat, such as{" "}
        <strong>name, age, breed, and gender</strong>. You can then upload{" "}
        <strong>photos, videos, and a bio</strong> describing your cat's
        personality and interests. The more detailed and engaging your profile,
        the better the chances of finding a <strong>good match</strong>.
      </>
    ),
  },
  {
    question: "How does the matching algorithm work?",
    answer: (
      <>
        Our matching algorithm analyzes various factors such as your cat's{" "}
        <strong>personality, energy levels, and preferences</strong>. It uses
        this data to suggest potential matches that are likely to be compatible.
        You can enhance the matching accuracy by providing{" "}
        <strong>detailed information</strong> in your cat's profile and
        participating in the <strong>Purrsonality Quiz</strong>, which further
        refines the matchmaking process.
      </>
    ),
  },
  {
    question: "What is the Purrsonality Quiz, and how does it affect matching?",
    answer: (
      <>
        The <strong>Purrsonality Quiz</strong> is a fun and interactive quiz
        that helps identify your cat's personality traits, such as whether they
        are more <strong>playful, relaxed, shy, or adventurous</strong>. The
        results are factored into the matching algorithm to ensure that
        suggested matches align well with your cat's{" "}
        <strong>temperament and behavior</strong>.
      </>
    ),
  },
  {
    question: "Can I manage profiles for multiple cats?",
    answer: (
      <>
        Yes, TinCat allows you to manage{" "}
        <strong>profiles for multiple cats</strong> under one account. You can
        easily <strong>switch between profiles</strong> to view matches, message
        other cat owners, and arrange{" "}
        <strong>playdates for each of your cats</strong> individually.
      </>
    ),
  },
  {
    question: "How do I arrange a safe in-person playdate?",
    answer: (
      <>
        When arranging an in-person playdate, TinCat provides a{" "}
        <strong>Playdate Planner</strong> tool that helps you schedule and
        organize the meetup. We also offer safety tips such as{" "}
        <strong>choosing a neutral location</strong>, bringing{" "}
        <strong>familiar toys or treats</strong>, and{" "}
        <strong>monitoring the interaction closely</strong>. Always ensure that
        both cats are <strong>comfortable and safe</strong> throughout the
        playdate.
      </>
    ),
  },
];
