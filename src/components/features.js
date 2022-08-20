/* This example requires Tailwind CSS v2.0+ */
import {
  HomeIcon,
  GlobeAltIcon,
  CogIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Ontwerpen en Bouwen",
    description:
      "Websites bouwen in mijn core business. Dit doen ik dan ook graag goed. Ik combineer design, development, wensen en conversie naar één geheel. Dat geheel is jouw nieuwe website.",
    icon: GlobeAltIcon,
  },
  {
    name: "Website beheer en onderhoud",
    description:
      "Opzoek naar iemand die jouw website kan onderhouden en beheren? Of kan jouw website wel een update gebruiken? Hier ben ik!",
    icon: CogIcon,
  },
  {
    name: "Zoek machine optimalisatie",
    description:
      "Onze grote vriend Google moeten we ook te vriend houden. Met de juiste opbouw, code, tekst en tricks probeer ik je zo hoog mogelijk te krijgen doormiddel van SEO.",
    icon: SearchIcon,
  },
  {
    name: "Alles op 1 plek",
    description:
      "Met mijn full service reclamebureau doe ik meer dan webdevelopment. Ik ben namelijk ook Art Director en lever reclame producten voor binnen en buiten.",
    icon: HomeIcon,
  },
];

export default function Features() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg text-orange-600 font-semibold">
            PROFESSIONELE WEBSITE
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            Website laten maken
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Wil je een nieuwe website laten maken? Ik kan jouw nieuwe website
            geheel op maat ontwikkelen en ontwerpen. Graag koppel ik de website
            aan een eigen custom maatwerk CMS. Doordat ik alles op maat kan
            programmeren, zijn de mogelijkheden eindeloos.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
