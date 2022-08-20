import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Navbar({
  logoColor = "orange-500",
  textColor = "black",
}) {
  return (
    <Popover className="relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              to="/"
              className={`text-2xl font-medium leading-7 text-${logoColor} uppercase cursor-pointer`}
            >
              suggestied
            </Link>
          </div>
          <nav className="flex space-x-10 hidden">
            <Link
              className={`text-base font-medium text-${textColor} opacity-70 hover:opacity-100 cursor-pointer `}
            >
              Pricing
            </Link>
            <Link
              className={`text-base font-medium text-${textColor} opacity-70 hover:opacity-100 cursor-pointer `}
            >
              Docs
            </Link>
          </nav>
        </div>
      </div>
    </Popover>
  );
}
