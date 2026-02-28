import { RiStarSFill } from "react-icons/ri";
import { heroContent } from "./heroContent";

function Hero() {
  const { title, description, imageSrc, imageAlt, rating, totalReviews } =
    heroContent;

  return (
    <>
      <section
        id="hero-section"
        className="bg-base-200 px-4 pt-12 pb-12 md:pt-16 md:pb-0"
      >
        <header className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-base-content mb-6 text-5xl font-extrabold">
              {title}
            </h1>
            <p className="text-base-content/70 text-lg">{description}</p>

            <div className="mt-6 flex flex-col items-center gap-4 md:flex-row">
              <button
                className="btn btn-circle btn-wide btn-accent text-base-200 text-lg font-bold"
                type="button"
              >
                Get Started
              </button>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-600">
                    {Array.from({ length: rating }).map((_, i) => {
                      return <RiStarSFill key={i}></RiStarSFill>;
                    })}
                  </div>
                  <span className="text-base font-bold">{rating}.0</span>
                </div>

                <p className="text-base">
                  from {totalReviews}+ {""}
                  <span className="font-bold underline">reviews</span>
                </p>
              </div>
            </div>
          </div>

          <figure className="hidden justify-center md:flex">
            <img
              className="md:max-w-64 lg:max-w-72"
              src={imageSrc}
              alt={imageAlt}
            />
          </figure>
        </header>
      </section>
    </>
  );
}

export default Hero;
