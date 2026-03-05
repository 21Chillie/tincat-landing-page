/**
 * Customization guide:
 * - You can customize: heading text, plan description, price, features, cta, and isPopular.
 * - Do not customize: required keys in PricingContentType. Keep tier values in sync with PricingTier type.
 * - How: edit pricingContent array values; if adding a new tier, update PricingTier first.
 */
type PricingTier = "Kitten" | "Cat Daddy" | "Top Cat";

type PricingPrice = {
  monthly: number;
  yearly: number;
};

export type PricingContentType = {
  tier: PricingTier;
  description: string;
  price: PricingPrice;
  features: string[];
  cta: string;
  isPopular: boolean;
};

export const pricingHeading = {
  title: "Start free, upgrade when your cats gets popular",
  label: "pricing"
};

export const pricingContent: PricingContentType[] = [
  {
    tier: "Kitten",
    description: "Perfect for new cat owners just getting started with TinCat.",
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      "30 swipes per day",
      "Basic cat profile",
      "Browse nearby cats",
      "Standard matching",
    ],
    cta: "Get Started",
    isPopular: false,
  },
  {
    tier: "Cat Daddy",
    description: "For serious cat matchmakers who want unlimited connections.",
    price: {
      monthly: 9,
      yearly: 75.6, // $6.3/month
    },
    features: [
      "Unlimited swipes",
      "Purr-sonality Quiz",
      "Nearby Matches",
      "Paw-some Events access",
      "Priority support",
    ],
    cta: "Choose Plan",
    isPopular: true,
  },
  {
    tier: "Top Cat",
    description:
      "For multi-cat households who want the full TinCat experience.",
    price: {
      monthly: 16,
      yearly: 134.4, // $11.2/month
    },
    features: [
      "Everything in Cat Daddy",
      "Multiple cat profiles",
      "Dedicated account manager",
      "Custom matching algorithm",
      "Advanced analytics",
      "Early access to new features",
    ],
    cta: "Choose Plan",
    isPopular: false,
  },
];
