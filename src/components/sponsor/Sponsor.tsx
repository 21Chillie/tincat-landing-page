import { sponsors } from "../../content/sponsorContent";

function Sponsor() {
  return (
    <>
      <section
        id="sponsor-section"
        className="bg-base-200 border-base-300 mx-auto hidden border-y p-4 py-6 md:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <p className="font-bold">More than 100+ companies partner</p>
          <ul className="grid grid-cols-4 place-items-center gap-4">
            {sponsors.map((sponsor, index) => {
              const { imgSrc } = sponsor;
              return (
                <li key={index}>
                  <div className="bg-base-100 hover:bg-base-300 hover:text-primary hover:shadow-accent-content rounded-3xl transition-all hover:shadow-lg">
                    <span className="flex h-32 w-32 items-center justify-center p-4 text-7xl">
                      {imgSrc}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Sponsor;
