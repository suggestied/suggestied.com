import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Testimonial from "../components/Testimonial";

export default function PortfolioTemplate({ data }) {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <div className="inset-0 absolute">
          <Navbar logoColor="white" textColor="white" />
        </div>
        <div className="bg-gray-900">
          <img
            src={data.image}
            alt=""
            className="w-full h-96 object-top object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t via-white/10 from-white" />
        <div className="absolute inset-0 bg-gradient-to-tr via-white/10 from-white" />
        <div className="absolute inset-0 bg-gradient-to-tl via-white/10 from-white" />
      </div>

      <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-4xl">
            {data.name}
          </h2>
          <p className="mt-4 text-gray-500">{data.description}</p>
        </div>

        <dl className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {data.features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>

        <Testimonial data={data} />
      </div>
      <Footer />
    </div>
  );
}
