import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const HomeNavbar = () => {
  return (
    <nav className="bg-black py-4">
      <div className="container max-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center mx-5">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg"
                alt="logo"
              />
            </div>
            <div>
              <ul className="flex items-center">
                <li className="mr-6">
                  <a
                    href="https://s3-ap-southeast-1.amazonaws"
                    className="text-white hover:text-blue-200"
                  >
                    Ola s1
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    href="https://s3-ap-southeast-1.amazonaws"
                    className="text-white hover:text-blue-200"
                  >
                    Ola Electric
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    href="https://s3-ap-southeast-1.amazonaws"
                    className="text-white hover:text-blue-200"
                  >
                    Ola Future factory
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button className="bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-3">
              Book an Ola Cab
            </button>
            <button className="bg-white text-black hover:bg-gray-300 text-sm font-semibold px-4 py-3 ml-5">
              free s1 test ride
            </button>
            <MenuIcon className="ml-5 text-white text-3xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
