import React from "react";
import style from "./Contact.module.css";
export default function Contact() {
  return (
    <>
      <div className="contact py-5">
        <div className="container text-center text-white">
          <h2 className={`${style.fontColor} text-uppercase mb-3`}>
            contact me
          </h2>
          <div className="star d-flex align-items-center w-100 justify-content-center">
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
          <form className="d-flex flex-column mt-5">
            <input
              type="text"
              placeholder="Name"
              className={` ${style.inputs} w-75 m-auto p-2 mb-3 form-control`}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className={` ${style.inputs} w-75 m-auto p-2 mb-3 form-control`}
              required
            />
            <input
              type="Phone"
              placeholder="Phone Number"
              className={` ${style.inputs} w-75 m-auto p-2 mb-3 form-control`}
              required
            />
            <textarea
              cols="30"
              rows="3"
              className={` ${style.inputs} w-75 m-auto p-2 form-control`}
              placeholder="Message"
              required
            ></textarea>
            <div className="buton w-75 m-auto mt-3 d-flex justify-content-start">
              <button
                className={`${style.bgColor} btn py-3 px-4 text-white fw-bolder rounded`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
