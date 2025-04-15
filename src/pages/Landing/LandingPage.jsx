import Logo from "@/assets/images/logo.svg";

const LandingPage = () => {
  return (
    <>
      <nav className="layout-navbar shadow-none py- nav-main">
        <div className="container">
          <div className="navbar navbar-expand-lg landing-navbar px-3 px-md-4">
            {/* <!-- Menu logo wrapper: Start --> */}
            <div className="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-4">
              {/* <!-- Mobile menu toggle: Start--> */}
              <button
                className="navbar-toggler border-0 px-0 me-2 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="ti ti-menu-2 ti-sm align-middle"></i>
              </button>
              {/* <!-- Mobile menu toggle: End--> */}
              <a href="landing-page.html" className="app-brand-link">
                <span className="mx-2">
                  <img src={Logo} width="30" height="30" />
                </span>
                <span className="app-brand-text demo menu-text fw-bold ms-2 ps-1">
                  DENR Appointment System
                </span>
              </a>
            </div>
            {/* <!-- Menu logo wrapper: End --> */}
            {/* <!-- Menu wrapper: Start --> */}
            <div
              className="navbar-collapse landing-nav-menu collapse"
              id="navbarSupportedContent"
            >
              <button
                className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="ti ti-x ti-sm"></i>
              </button>
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium"
                    aria-current="page"
                    href="landing-page.html#landingHero"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium"
                    href="landing-page.html#landingFeatures"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium"
                    href="landing-page.html#landingTeam"
                  >
                    Mission
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium"
                    href="landing-page.html#landingFAQ"
                  >
                    Vision
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium"
                    href="landing-page.html#landingContact"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="landing-menu-overlay d-lg-none"></div>
            {/* <!-- Menu wrapper: End --> */}
            {/* <!-- Toolbar: Start --> */}
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              {/* <!-- Style Switcher --> */}
              {/* <!-- / Style Switcher--> */}

              {/* <!-- navbar button: Start --> */}
              <li>
                <a
                  href="../vertical-menu-template/auth-login-cover.html"
                  className="btn btn-primary waves-effect waves-light"
                  target="_blank"
                >
                  <span className="tf-icons ti ti-login scaleX-n1-rtl me-md-1"></span>
                  <span className="d-none d-md-block">Login</span>
                </a>
              </li>
              {/* <!-- navbar button: End --> */}
            </ul>
            {/* <!-- Toolbar: End --> */}
          </div>
        </div>
      </nav>
      <section className="main-parent"></section>
    </>
  );
};

export default LandingPage;
