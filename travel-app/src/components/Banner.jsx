import { FaSearch, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import React, { useState } from "react";
import  Typical  from "react-typical";
function Banner() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const searchResult = e => {
    setText(e.target.value);
  };
  const searchResult2 = e => {
    setDate(e.target.value);
  };
  const Travel = [
    {
      title: "From",
      placeholder: "where are you coming from?",
      icon: <FaMapMarkerAlt />,
      type: "text",
      value: text,
      onChange: searchResult
    },
    {
      title: "To",
      type: "text",
      icon: <FaTelegramPlane />,
      value: date,
      placeholder: "where are you going?",
      onChange: searchResult2
    }
  ];

  return (
    <div>
      <section className="banner-name">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center mobile-display">
            <div className="col-md-6 column-1">
              <h1 className="banner_title">
                {" "}
                <Typical
                  steps={["Welcome to Salty 🚀", 4000, "The best travel site 🚀 ", 4000,"Travel round...", 4000, "The 🌎 in a sec 😍", 4000]}
                  loop={Infinity}
                />
              </h1>
              <p className="banner_text">
                Plan and book your perfect trip with expert advice, travel tips,
                destination information and inspiration from us.
              </p>

              <div className="location">
                <div className="row">
                  {Travel.map((travel, index) => (
                    <div className="col-5" key={index}>
                      <h3 className="location_title">{travel.title}</h3>
                      <div className="d-flex justify-content-between w-60">
                        <div className="">
                          <input
                            type={travel.type}
                            value={travel.value}
                            onChange={travel.onChange}
                            className="location_input"
                            placeholder={travel.placeholder}
                          />
                        </div>
                        <div className="icon">{travel.icon}</div>
                      </div>
                    </div>
                  ))}
                  <div className="col-2">
                    <div
                      className={
                        text.length <= 0
                          ? "search-icon not-allowed"
                          : "search-icon cursor-pointer"
                      }
                    >
                      <FaSearch size={20} color="#fff" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 column-1">
              <img src="../../src/assets/images/landing_image.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Banner;
