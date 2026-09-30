import React, { useState, useEffect } from "react";
import "./Slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

import video from "../../../assets/slider/main-video.mp4";
import Img from "../../../assets/slider/main.webp";
import SliderShape1 from "../../../assets/main/my-1.png";

const Slider = () => {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const vid = document.getElementById("myVideo");
    if (vid) vid.muted = muted;
  }, [muted]);
  return (
    <div className="main-slider" id="slider">
                      {/* <img src={SliderShape1} className="high-shape-img slider-shape" alt="" /> */}
      
      <div className="hero hero-video">
        <div className="hero-bg-video">
          <video autoPlay muted loop playsInline preload="auto" poster={Img} id="myVideo">
            <source src={video} type="video/mp4" />
          </video>

          <button className="mute-btn" onClick={() => setMuted(!muted)}>
            {muted ? "🔇" : "🔊"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
