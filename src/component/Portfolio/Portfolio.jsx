import React from 'react'
import style from "./Portfolio.module.css";
import cabin from '../assets/images/cabin.png'
import cake from '../assets/images/cake.png'
import circus from '../assets/images/circus.png'
import game from '../assets/images/game.png'
import safe from '../assets/images/safe.png'
import submarine from "../assets/images/submarine.png";
export default function Portfolio() {

  return (
    <div className="py-md-5">
      <div className="container text-center py-5">
        <div className="star d-flex flex-column  py-5">
          <h2 className={`${style.font} text-uppercase fw-bolder`}>porfolio</h2>
          <div className="starsvg d-flex align-items-center w-100 justify-content-center">
            <div className={`${style.line} me-2`}></div>
            <svg
              className={`${style.starSvg} svg-inline--fa fa-star fa-w-18 star`}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
            <div className={`${style.line} ms-2`}></div>
          </div>
        </div>
        <div className="row g-3 py-5">
          <div className="col-md-4">
            <div className={`${style.pointer} item position-relative`}>
              <div className="image">
                <img src={cabin} alt="cabin" className="w-100 rounded" />
              </div>
              <div className={style.layer}>
                <i className="fa-solid fa-plus fa-4x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${style.pointer} item position-relative`}>
              <div className="image">
                <img src={cake} alt="cabin" className="w-100 rounded" />
              </div>
              <div className={style.layer}>
                <i className="fa-solid fa-plus fa-4x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${style.pointer} item position-relative`}>
              <div className="image">
                <img src={circus} alt="cabin" className="w-100 rounded" />
              </div>
              <div className={style.layer}>
                <i className="fa-solid fa-plus fa-4x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${style.pointer} item position-relative`}>
              <div className="image">
                <img src={game} alt="cabin" className="w-100 rounded" />
              </div>
              <div className={style.layer}>
                <i className="fa-solid fa-plus fa-4x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${style.pointer} item position-relative`}>
              <div className="image">
                <img src={safe} alt="cabin" className="w-100 rounded" />
              </div>
              <div className={style.layer}>
                <i className="fa-solid fa-plus fa-4x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${style.pointer} item position-relative`}>
              <div className="image">
                <img src={submarine} alt="cabin" className="w-100 rounded" />
              </div>
              <div className={style.layer}>
                <i className="fa-solid fa-plus fa-4x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
