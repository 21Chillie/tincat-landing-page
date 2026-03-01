import { nanoid } from "nanoid";
import {
  testimonialHeadingContent,
  type testimonialContentType,
} from "../../content/testimonialContent";
import { testimonialContent } from "../../content/testimonialContent";

export function Testimonial() {
  const { label, title } = testimonialHeadingContent;

  return (
    <>
      <section id="testimonial-section" className="px-4 py-6">
        <div className="mx-auto max-w-7xl">
          <header className="mb-6 space-y-1 text-center">
            <p className="text-accent text-base font-medium">{label}</p>
            <h2 className="text-4xl leading-tight font-bold">{title}</h2>
          </header>

          {testimonialContent.map((item, index) => {
            if (index === 0) {
              return (
                <div className="hidden sm:block" key={nanoid()}>
                  <TestimonialCard index={index} {...item}></TestimonialCard>
                </div>
              );
            }
          })}

          <div className="columns-1 gap-4 sm:gap-6 sm:columns-2 md:columns-3">
            {testimonialContent.map((item, index) => {
              if (index > 0) {
                return (
                  <TestimonialCard
                    key={nanoid()}
                    index={index}
                    {...item}
                  ></TestimonialCard>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function TestimonialCard({
  index,
  quote,
  name,
  username,
  imgSrc,
}: testimonialContentType & { index: number }) {
  return (
    <figure
      className={`bg-base-200 border-base-300 mb-4 sm:mb-6 rounded-2xl border ${index === 0 ? "p-8" : "break-inside-avoid p-6"}`}
    >
      <blockquote
        className={`leading-relaxed ${index === 0 ? "mb-8 text-xl" : "mb-4 text-sm"}`}
      >
        "{quote}"
      </blockquote>
      <figcaption className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={imgSrc}
            alt={`${name} profile`}
            className="outline-accent h-12 w-12 rounded-full object-cover outline-1"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-base-content/80 text-sm">{username}</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
