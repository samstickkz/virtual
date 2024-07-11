import logo from "./../assets/logo.png";
import { navItems } from "../constants";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-Lg border-b border-neutral-700/800">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">Virtual Sam</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((items, index) => (
              <li key={index}>
                <a href={items.href}>{items.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center justify-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign in
            </a>
            <a
              href="#"
              className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
