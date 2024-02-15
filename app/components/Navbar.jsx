import Link from "next/link";
import "./navbar.css";

export const NavbarLogo = () => (
  <a className="navbar-brand items-center text-primary logo-a" href="#">
    <span className="logo-box">
      <Logo />
    </span>
    BYTEmentor
  </a>
);

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <NavbarLogo />
      {/* Theme toggle  */}
      <div className="order-lg-3 d-flex align-items-center ms-auto">
        <div>
          <div className="d-flex align-items-center">
            <div className="dropdown me-2">
              <button
                className="btn btn-light btn-icon rounded-circle d-flex align-items-center"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                aria-label="Toggle theme (auto)"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: 20 }}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <span className="visually-hidden bs-theme-text">
                  Toggle theme
                </span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end shadow"
                aria-labelledby="bs-theme-text"
              >
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-theme-value="light"
                    aria-pressed="false"
                  >
                    <i className="bi theme-icon bi-sun-fill"></i>
                    <span className="ms-2">Light</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-theme-value="dark"
                    aria-pressed="false"
                  >
                    <i className="bi theme-icon bi-moon-stars-fill"></i>
                    <span className="ms-2">Dark</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex align-items-center active"
                    data-bs-theme-value="auto"
                    aria-pressed="true"
                  >
                    <i className="bi theme-icon bi-circle-half"></i>
                    <span className="ms-2">Auto</span>
                  </button>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="btn btn-outline-primary shadow-sm me-2 d-none d-md-block"
            >
              Sign In
            </a>
            <a
              href="#"
              className="btn btn-primary d-none d-md-block me-2 me-lg-0"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link className="nav-link" href="/">
              Home <span className="visually-hidden">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">
              About
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link " href="/pricing">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " href="/blog">
              Blog
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 me-auto">
          <input
            className="form-control me-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ marginLeft: 10 }}
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

const Logo = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="12" y="27" width="4" height="10" fill="url(#paint0_linear)" />
    <rect x="27" y="12" width="11" height="4" fill="url(#paint1_linear)" />
    <rect x="48" y="26" width="4" height="12" fill="url(#paint2_linear)" />
    <rect
      x="2"
      y="38"
      width="24"
      height="24"
      rx="2"
      stroke="#715DF2"
      strokeWidth="4"
    />
    <circle cx="50" cy="50" r="12" stroke="#C0B7F9" strokeWidth="4" />
    <path
      d="M48.5858 3.41421C49.3668 2.63317 50.6332 2.63317 51.4142 3.41421L60.5858 12.5858C61.3668 13.3668 61.3668 14.6332 60.5858 15.4142L51.4142 24.5858C50.6332 25.3668 49.3668 25.3668 48.5858 24.5858L39.4142 15.4142C38.6332 14.6332 38.6332 13.3668 39.4142 12.5858L48.5858 3.41421Z"
      stroke="#A599F7"
      strokeWidth="4"
    />
    <circle cx="14" cy="14" r="12" stroke="#8B7AF4" strokeWidth="4" />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="14"
        y1="27"
        x2="14"
        y2="37"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B7AF4" />
        <stop offset="1" stopColor="#715DF2" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="27"
        y1="14"
        x2="36.625"
        y2="14"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B7AF4" />
        <stop offset="1" stopColor="#A599F7" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="50"
        y1="26"
        x2="50"
        y2="38"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A599F7" />
        <stop offset="1" stopColor="#C0B7F9" />
      </linearGradient>
    </defs>
  </svg>
);
