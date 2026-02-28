import { featureHeader } from "../../content/featureContent";

export function Feature() {
  const { title, description, label } = featureHeader;

  return (
    <>
      <section id="feature-section" className="mx-auto px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <header className="flex items-center justify-between gap-4">
            <div className="flex-1 space-y-1">
              <p className="text-accent font-medium">{label}</p>
              <h2 className="text-4xl font-bold">{title}</h2>
            </div>

            <p className="text-base-content/80 hidden flex-1 leading-relaxed sm:block">
              {description}
            </p>
          </header>
        </div>
      </section>
    </>
  );
}
