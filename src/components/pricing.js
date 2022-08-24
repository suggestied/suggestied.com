// import check.svg

const features = [
  {
    name: "Design and Build",
    price: "Starts at $500",
    description:
      "i will design and build a website for you from scratch. This includes everything from the initial planning and conceptualization stages all the way through to the final implementation and launch of the site. i will work with you closely to ensure that the end result is a website that meets your specific needs and requirements.",
    features: [
      "Complete website design and build",
      "Prototyping and wireframing",
      "Search engine optimization",
    ],
  },
  {
    name: "Hourly rate",
    price: "$25/hr",
    description:
      "if you're looking for something a little less comprehensive, i also offer an hourly rate for website design and development services. This option is perfect for those who already have a good idea of what they want their website to look and feel like, and just need someone to execute on their vision. if you're looking for a web3 project to be made this will be the perfect option for you.",
    features: [
      "For small tasks or websites that need to include a back-end or a smart contract",
    ],
  },
];

export default function Pricing(props) {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg  uppercase text-orange-600 font-semibold">
            Professional WEBSiTE
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            Prices
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Do you want to have a new website made?
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 items-start md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col overflow-hidden justify-between bg-white shadow-2xl rounded-lg"
              >
                <div className="p-8">
                  <div className="bg-blue-500/70 text-blue-50 w-min px-4 py-2 rounded-full mb-2">
                    Professional
                  </div>
                  <dt>
                    <p className="text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  {/*Price */}
                  <dd className="mt-2 text-4xl font-bold text-gray-900">
                    {feature.price}
                  </dd>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
                <div className="p-8 bg-gray-100">
                  {/* List with checks as dots */}
                  {/* Foreach feature.features */}
                  {feature.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-orange-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-base leading-6 font-medium text-gray-900">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div
                    onClick={() => {
                      props.setisOpen(true);
                    }}
                    className="w-full cursor-pointer bg-blue-500/70 hover:bg-blue-500 text-blue-50 px-12 text-center py-6 mt-4"
                  >
                    Contact me
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
