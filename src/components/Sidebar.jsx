import {
  HomeIcon,
  UsersIcon,
  UserPlusIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import "../Sidebar.css"
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "New Admission",
    href: "/newadmission",
    icon: UserPlusIcon,
  },
  {
    name: "All Students",
    href: "/allstudents",
    icon: UsersIcon,
  },
  {
    name: "Attendance",
    href: "/attendance",
    icon: ShieldCheckIcon,
  },
];

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-small">AD</span>
        <span className="logo-large">Admin</span>
      </div>

      {/* Menu Items */}
      <div className="menu">
        {sidebarLinks.map((item) => (
          <NavLink
            to={item.href}
            key={item.name}
            className="menu-item"
          >
            {({ isActive }) => (
              <span
                className={`menu-item-content ${isActive ? "active" : ""}`}
              >
                <item.icon className={`menu-item-icon ${isActive ? "active-icon" : ""}`} />
                <span className={`menu-item-text ${isActive ? "active-text" : ""}`}>
                  {item.name}
                </span>
              </span>
            )}
          </NavLink>
        ))}
      </div>

      {/* User Details */}
      <div className="user-details">
        <UserCircleIcon className="user-icon" />
        <div className="user-info">
          <div className="user-info-header">
            <span className="user-name">Admin</span>
            <div className="logout">
              <ArrowLeftOnRectangleIcon className="logout-icon" />
              <span className="logout-text">Logout</span>
            </div>
          </div>
          <span className="user-status">Logged in as Admin</span>
        </div>
      </div>

      {/* Mobile Logout Icon */}
      <div className="mobile-logout">
        <ArrowLeftOnRectangleIcon className="mobile-logout-icon" />
      </div>
    </div>
  );
}

export default Sidebar;
