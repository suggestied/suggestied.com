/* This example requires Tailwind CSS v2.0+ */
import {
  HomeIcon,
  GlobeAltIcon,
  cogIcon,
  SearchIcon,
  CogIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Design and Build",
    description:
      "Building websites in my core business. I like to do this well. I combine design, development, wishes and conversion into one whole. That whole is your new website.",
    icon: GlobeAltIcon,
  },
  {
    name: "Website management and maintenance",
    description:
      "Looking for someone who can maintain and manage your website? Or could your website use an update? Here I am!",
    icon: CogIcon,
  },
  {
    name: "Search Engine Optimization",
    description:
      "We also have to keep our great friend Google a friend. With the right structure, code, text and tricks I try to get you as high as possible through SEO.",
    icon: SearchIcon,
  },
  {
    name: "Everything in one place",
    description:
      "With my full service advertising agency I do more than web development. I am also Art Director and supply advertising products for indoor and outdoor use.",
    icon: HomeIcon,
  },
];

export default function Features() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg text-orange-600 font-semibold">
            PROFESSIONAL WEBSITE
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            Have a website made
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Do you want to have a new website made? I can see your new website
            fully customized development and design. I would like to link the
            website to your own custom custom CMS. Because I can customize
            everything programming, the possibilities are endless.
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
