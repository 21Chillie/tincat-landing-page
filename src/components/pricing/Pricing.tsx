import { Activity, useState } from "react";
import { LuCheck } from "react-icons/lu";
import {
  pricingHeading,
  pricingContent,
  type PricingContentType,
} from "../../content/pricingContent";

type SubscriptionType = "monthly" | "yearly";

export function Pricing() {
  const [subscription, setSubscription] = useState<SubscriptionType>("monthly");
  const { title, label } = pricingHeading;

  return (
    <section id="pricing-section" className="px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 text-center">
          <p className="text-primary text-base font-medium uppercase">
            {label}
          </p>
          <h2 className="text-base-content text-4xl font-bold">{title}</h2>
        </header>

        <div className="mb-12 flex justify-center">
          <div className="bg-base-300 border-base-100 inline-flex gap-2 rounded-full border p-2">
            {(["monthly", "yearly"] as SubscriptionType[]).map((type) => {
              return (
                <PricingButtonType
                  key={type}
                  type={type}
                  subscription={subscription}
                  setSubscription={setSubscription}
                ></PricingButtonType>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pricingContent.map((type) => {
            return (
              <PricingCard
                key={type.tier}
                {...type}
                subscription={subscription}
              ></PricingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingButtonType({
  type,
  subscription,
  setSubscription,
}: {
  type: SubscriptionType;
  subscription: SubscriptionType;
  setSubscription: React.Dispatch<React.SetStateAction<SubscriptionType>>;
}) {
  return (
    <div className="relative">
      <Activity mode={`${type === "yearly" ? "visible" : "hidden"}`}>
        <span className="badge badge-sm bg-base-200 text-success border-base-100 absolute -top-1 -right-3 z-1 border font-semibold">
          30%
        </span>
      </Activity>
      <button
        className={`btn rounded-full px-12 capitalize ${subscription === type ? "btn-primary" : "btn-ghost"}`}
        type="button"
        onClick={() => setSubscription(type)}
      >
        {type}
      </button>
    </div>
  );
}

function PricingCard({
  tier,
  description,
  price,
  features,
  cta,
  isPopular,
  subscription,
}: PricingContentType & { subscription: SubscriptionType }) {
  return (
    <article
      className={`rounded-2xl border p-6 ${isPopular ? "bg-base-300 border-accent-content" : "bg-base-200 border-base-300"}`}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <header className="mb-2 space-y-2">
            <Activity mode={`${isPopular ? "visible" : "hidden"}`}>
              <span className="badge badge-md bg-neutral text-neutral-content font-medium">
                Most popular
              </span>
            </Activity>

            <div className="flex items-center justify-between flex-wrap">
              <h3 className="text-2xl font-bold">{tier}</h3>
              <h4 className="text-2xl text-primary font-medium">
                ${subscription === "monthly" ? price.monthly : price.yearly}
                <span className="text-base-content/80 text-sm">
                  /{subscription === "monthly" ? "month" : "year"}
                </span>
              </h4>
            </div>
          </header>

          <div className="mb-8">
            <p className="text-base-content/80 text-base leading-relaxed">
              {description}
            </p>
          </div>

          <ul className="mb-12 space-y-1">
            {features.map((feature) => {
              return (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <span className="text-success">
                    <LuCheck></LuCheck>
                  </span>

                  <p>{feature}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <footer>
          <a
            href="#"
            className={`btn btn-circle w-full font-bold ${isPopular ? "btn-accent" : "btn-soft"}`}
          >
            {cta}
          </a>
        </footer>
      </div>
    </article>
  );
}
