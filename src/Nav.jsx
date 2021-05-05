import React from "react";

const Nav = () => {
  return (
    <>
      <div className="container-fluid nav_bg navcolor">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand brand_name" href="#">
                  MargDarshan
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Checkout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Register
                      </a>
                    </li>

                    <ul className="navbar-nav ml-2 mb-2 mb-lg-0">
                      <li className="nav-item">
                        <button type="button" class="btn btn-primary">
                          Search Now
                        </button>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
