import { Link } from "react-router-dom";
import FrogGameimage from "../assets/froggame.png";
import Gamblrimage from "../assets/gamblr.png";

const products = [
  {
    id: 1,
    name: "Frog game",
    description: "NFT Project",
    href: "/portfolio/frog-game",
    imageSrc: FrogGameimage,
    imageAlt: "image",
  },
  {
    id: 2,
    name: "Gamblr",
    description: "Casino",
    href: "/portfolio/casino",
    imageSrc: Gamblrimage,
    imageAlt: "image",
  },
];

export default function PortfolioList() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-lg font-medium text-gray-900">
            Some of my works :)
          </h2>
          {/* <a
            href="#"
            className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            View all<span aria-hidden="true"> &rarr;</span>
          </a> */}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-center object-cover"
                />
                <div
                  className="flex items-end opacity-0 p-4 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                    View project
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                <h3>
                  <Link to={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
