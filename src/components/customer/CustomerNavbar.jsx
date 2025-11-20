import { ChevronDown } from "lucide-react";
import { use } from "react";
import { useLocation, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";
import colors from "../ui/color/color";

const CustomerNavbar = () => {
  const { user, logout } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItems = [
    { id: "workers", label: "Find Workers", path: "/workers" },
    { id: "bookings", label: "My Bookings", path: "/bookings" },
  ];

  const isActivePath = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="shadow-lg border-b backdrop-blur-sm"
      style={{
        backgroundColor: colors.primary[50],
        borderColor: colors.primary[200],
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => navigate("/dashboard")}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-md"
              style={{
                backgroundColor: colors.accent[600],
                color: colors.white,
              }}
            >
              <img src={logo} alt="sp" />
            </div>
            <div className="ml-3">
              <h1
                className="text-xl font-bold transition-colors group-hover:text-accent-600"
                style={{ color: colors.primary[900] }}
              >
                Quick Service
              </h1>
              <p
                className="text-xs transition-colors group-hover:text-accent-500"
                style={{ color: colors.primary[500] }}
              >
                ServicePro
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-2 focus:outline-none p-2 rounded-lg transition-all duration-300 hover:shadow-md">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: colors.accent[50],
                    color: colors.accent[600],
                  }}
                >
                  <span className="font-semibold text-sm">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span
                  className="hidden md:block text-sm font-medium transition-colors"
                  style={{ color: colors.primary[700] }}
                >
                  {user?.name}
                </span>
                <ChevronDown />
              </button>

              <div
                className="absolute right-0 mt-2 w-48 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border"
                style={{
                  backgroundColor: colors.white,
                  borderColor: colors.primary[200],
                  boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
                }}
              >
                <button
                  onClick={() => navigate("/profile")}
                  className="block w-full text-left px-4 py-3 text-sm transition-colors hover:bg-accent-50 border-b"
                  style={{
                    color: colors.primary[700],
                    borderColor: colors.primary[100],
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.accent[50];
                    e.target.style.color = colors.accent[600];
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.white;
                    e.target.style.color = colors.primary[700];
                  }}
                >
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    My Profile
                  </div>
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-3 text-sm transition-colors hover:bg-error-50"
                  style={{
                    color: colors.error[500],
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.error[50];
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = colors.white;
                  }}
                >
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="md:hidden flex space-x-2 pb-4 pt-2"
          style={{ borderTop: `1px solid ${colors.primary[200]}` }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex-1 text-center ${
                isActivePath(item.path) ? "shadow-sm" : "hover:shadow-md"
              }`}
              style={{
                backgroundColor: isActivePath(item.path)
                  ? colors.accent[500]
                  : colors.white,
                color: isActivePath(item.path)
                  ? colors.white
                  : colors.primary[700],
                border: `1px solid ${
                  isActivePath(item.path)
                    ? colors.accent[500]
                    : colors.primary[200]
                }`,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CustomerNavbar;
