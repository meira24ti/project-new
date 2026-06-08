import { BsPeopleFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { MdDashboard, MdFastfood } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 font-medium transition-all
    ${
      isActive
        ? "bg-green-200 text-hijau font-extrabold"
        : "text-gray-600 hover:bg-green-200 hover:text-hijau hover:font-extrabold"
    }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>

        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-2" to="/orders" className={menuClass}>
              <AiFillShopping className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-3" to="/customers" className={menuClass}>
              <BsPeopleFill className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>

          <li>
            <NavLink id="menu-4" to="/products" className={menuClass}>
              <MdFastfood className="mr-4 text-xl" />
              Products
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau mb-10 flex items-center rounded-md px-4 py-2 shadow-lg"
        >
          <div id="footer-text" className="text-sm text-white">
            <span>Please organize your menus through button below!</span>

            <div
              id="add-menu-button"
              className="mt-3 flex items-center justify-center space-x-2 rounded-md bg-white p-2"
            >
              <span className="flex items-center text-gray-600">
                Add Menus
              </span>
            </div>
          </div>

          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full">
            <img
              id="footer-avatar"
              className="h-full w-full object-cover"
              src="https://i.pinimg.com/736x/35/3b/fd/353bfd1f8e33735e8031b0821ab77217.jpg"
              alt="avatar"
            />
          </div>
        </div>

        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>

        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}