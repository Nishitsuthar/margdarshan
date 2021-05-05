import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/healthcare.jpg";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center mt-5 pt-3">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="heading">MargDarshan</h1>
                  <h2 className="my-3 sub-heading">
                    We are Here to help you so search now ..
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={web} className="img-fluid" alt="home pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
