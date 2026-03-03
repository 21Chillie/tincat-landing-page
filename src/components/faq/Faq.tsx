import { nanoid } from "nanoid";
import {
  faqContactContent,
  faqContent,
  faqHeading,
  type ContactContentType,
  type FaqContentType,
} from "../../content/faqContent";

export function Faq() {
  const { label, title, description } = faqHeading;

  return (
    <>
      <section id="faq-section" className="bg-base-200 px-4 py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <header className="mb-2 space-y-2">
              <p className="text-primary text-base font-medium uppercase">
                {label}
              </p>
              <h2 className="text-4xl font-bold">{title}</h2>
            </header>

            <div>
              <p className="text-base-content/80 mb-6 text-base text-pretty">
                {description}
              </p>

              <ul className="grid grid-cols-1">
                {faqContactContent.map((contact) => {
                  return (
                    <FaqSupport key={contact.method} {...contact}></FaqSupport>
                  );
                })}
              </ul>
            </div>
          </div>

          <article className="space-y-1" aria-label="accordion">
            {faqContent.map((faq, index) => {
              return (
                <FaqAccordionItem
                  key={nanoid()}
                  {...faq}
                  index={index}
                ></FaqAccordionItem>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
}

function FaqSupport({
  method,
  title,
  description,
  value,
  icon,
  cta,
}: ContactContentType) {
  return (
    <li aria-label={method} aria-description={cta}>
      <a
        className="hover:bg-base-300 hover:border-base-300 flex gap-3 rounded-2xl py-4 transition-all hover:px-4"
        href={value}
        target="_blank"
      >
        <span className="bg-base-100 text-accent h-fit rounded-xl p-2 text-xl">{icon}</span>
        <div>
          <p className="text-base font-bold">{title}</p>
          <p className="text-base-content/80 text-sm font-medium text-pretty">
            {description}
          </p>
        </div>
      </a>
    </li>
  );
}

function FaqAccordionItem({
  question,
  answer,
  index,
}: FaqContentType & { index: number }) {
  return (
    <>
      <div className="collapse-arrow bg-base-100 border-base-300 collapse border">
        {index === 0 ? (
          <input aria-label={`accordion faq ${index}`} type="radio" name="my-accordion-2" defaultChecked />
        ) : (
          <input aria-label={`accordion faq ${index}`} type="radio" name="my-accordion-2" />
        )}
        <div className="collapse-title text-base md:text-lg font-bold">{question}</div>
        <div className="collapse-content text-sm md:text-base">{answer}</div>
      </div>
    </>
  );
}
