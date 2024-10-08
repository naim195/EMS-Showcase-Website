import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "User Interaction", href: "/user-interaction" },
  { name: "Impact", href: "/impact" },
  { name: "Case Studies", href: "/case-studies" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-blue-100 to-green-100 w-full z-10 h-25">
      <nav
        aria-label="Global"
        className="flex max-w-full items-center justify-between p-6 lg:px-8 h-full"
      >
        <div className="flex lg:flex-1 lg:justify-start">
          <Link
            to="https://sites.google.com/view/spel-iitgn"
            className="-m-1.5 p-1.5"
            target="_blank"
          >
            <span className="sr-only">Your Company</span>
            <img
              alt="Your Company"
              src="/assets/Spel.png"
              className="h-20 w-auto"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:gap-x-12">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-2xl font-semibold leading-6 px-3 py-2 rounded-lg ${
                location.pathname === item.href
                  ? "text-white bg-blue-600"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <Link
            to="https://iitgn.ac.in/faculty/ee/fac-pallavi"
            className="-m-1.5 p-1.5"
            target="_blank"
          >
            <span className="sr-only">IITGN</span>
            <img
              alt="IITGN logo"
              src="/assets/IITGN_logo.webp"
              className="h-20 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">IITGN</span>
              <img
                alt="IITGN logo"
                src="/assets/IITGN_logo.webp"
                className="h-24 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      location.pathname === item.href
                        ? "text-white bg-blue-600"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
