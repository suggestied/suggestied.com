import { Link } from "react-router-dom";
import Footer from "../components/footer";

/* This example requires Tailwind CSS v2.0+ */
export default function Error404() {
  return (
    <>
      <div className="h-screen pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-orange-600">404</p>
              <h1 className="mt-2 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl sm:tracking-tight">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  className="text-base font-medium text-orange-600 hover:text-orange-500"
                >
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
