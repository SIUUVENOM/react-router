import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={style.foot}>
          <div className="container text-center py-5">
            <div className="row gy-5">
              <div className="col-md-4">
                <div className="location">
                  <h2 className="text-uppercase mb-3">location</h2>
                  <p className="lead">
                    2215 John Daniel Drive
                    <br />
                    Clark, MO 65243
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="web">
                  <h2 className="text-uppercase mb-3">around the web</h2>
                  <Link to='#'>
                    <i
                      className={`${style.icon} fa-brands fa-facebook fa-1x border border-2 rounded-circle mx-2 p-3`}
                    ></i>
                  </Link>
                  <Link to='#'>
                    <i
                      className={`${style.icon} fa-brands fa-twitter fa-1x border border-2 rounded-circle mx-2 p-3`}
                    ></i>
                  </Link>
                  <Link to='#'>
                    <i
                      className={`${style.icon} fa-brands fa-linkedin-in fa-1x border border-2 rounded-circle mx-2 p-3`}
                    ></i>
                  </Link>
                  <Link to='#'>
                    <i
                      className={`${style.icon} fa-brands fa-dribbble fa-1x border border-2 rounded-circle mx-2 p-3`}
                    ></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about">
                  <h2 className="text-uppercase mb-3">about freelancer</h2>
                  <p className="lead">
                    Freelance is a free to use, MIT
                    <br />
                    licensed Bootstrap theme created by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.copyright} copyright text-center text-white py-3`}
        >
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
