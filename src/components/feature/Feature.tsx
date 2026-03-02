import { nanoid } from "nanoid";
import {
  featureHeaderContent,
  featureCardsContent,
  type featureCardContentType,
  productImageContent,
} from "../../content/featureContent";

export function Feature() {
  const { title, description, label } = featureHeaderContent;

  return (
    <>
      <section id="feature-section" className="mx-auto px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <header className="mb-6 flex items-center justify-between gap-4">
            <div className="flex-1 space-y-1 text-center sm:text-left">
              <p className="text-accent text-base font-medium">{label}</p>
              <h2 className="text-4xl font-bold">{title}</h2>
            </div>

            <p className="text-base-content/80 hidden flex-1 leading-relaxed sm:block">
              {description}
            </p>
          </header>

          <article className="bg-base-200 outline-base-300 grid grid-cols-1 gap-4 rounded-2xl p-6 outline-1 sm:grid-cols-2 md:grid-cols-4 md:px-6 md:pt-6 md:pb-0 lg:place-items-center">
            {featureCardsContent.map(
              (content: featureCardContentType, index) => {
                if (index === 0) {
                  return (
                    <FeatureCard key={nanoid()} {...content}></FeatureCard>
                  );
                }
              },
            )}

            <figure className="col-span-2 row-span-2 hidden md:grid md:place-items-end">
              <img
                className="h-full w-full object-contain"
                src={productImageContent.firstImgSrc}
                alt=""
              />
            </figure>

            {featureCardsContent.map(
              (content: featureCardContentType, index) => {
                if (index > 0) {
                  return (
                    <FeatureCard
                      key={nanoid()}
                      index={index}
                      {...content}
                    ></FeatureCard>
                  );
                }
              },
            )}
          </article>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  index,
  title,
  description,
  icon,
}: featureCardContentType & { index?: number }) {
  return (
    <div
      className={`col-span-1 space-y-2 lg:space-y-0 ${index && index > 1 && "md:mb-6 lg:mb-0"}`}
    >
      <div className="bg-base-300 text-accent w-fit rounded-2xl p-2">
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className="text-3xl font-bold lg:leading-relaxed">{title}</h3>
      <p className="text-base-content/70 text-base text-pretty">
        {description}
      </p>
    </div>
  );
}
