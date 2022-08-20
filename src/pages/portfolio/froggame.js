import FrogGameImage from "../../assets/froggame.png";
import Footer from "../../components/footer";
import Testimonial from "../../components/Testimonial";

const data = {
  name: "Frog Game",
  description: "A simple game of frogging.",
  image: FrogGameImage,
  testimonial: "Frog Game is a simple game of frogging.",
  client: "Lonely frogs lambo club",
};

/* This example requires Tailwind CSS v2.0+ */
const features = [
  { name: "Client", description: data.client },
  {
    name: "Deadline",
    description: "10 days",
  },
  { name: "Finished within", description: "4 days" },
  { name: "Type", description: "Frontend (UI/UX) & Smart contract" },
];

export default function FrogGame() {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          src={data.image}
          alt=""
          className="w-full h-96 object-top object-cover"
        />
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
          {features.map((feature) => (
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
