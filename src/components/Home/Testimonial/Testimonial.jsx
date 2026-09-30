import React, { useState, useRef } from "react";
import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import TestimonialsShape from "../../../assets/main/testimonials-shape.svg";
import quote from "../../../assets/main/quote.png";
import quote1 from "../../../assets/main/quote.svg";
import user1 from "../../../assets/main/user1.png";
import user2 from "../../../assets/main/user2.png";
import Testi1 from "../../../assets/main/testi1.png";
import Testi2 from "../../../assets/main/testi2.png";
import TestiImg from "../../../assets/main/Testimg.jpeg";

/* ===== Read More Component ===== */
const ReadMoreText = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={`xb-item--content ${expanded ? "expanded" : ""}`}>
        {children}
      </div>

      <span className="read-more-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Read Less" : "Read More"}
      </span>
    </>
  );
};

const Testimonial = () => {
  const swiperRef = useRef(null);
  const [zoomOpen, setZoomOpen] = useState(false);

  const openZoom = () => {
    setZoomOpen(true);
    swiperRef.current?.autoplay?.stop();
  };

  const closeZoom = () => {
    setZoomOpen(false);
    swiperRef.current?.autoplay?.start();
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-bg">
        <div className="testimonial-main">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10 col-12">
                <div className="sec-title sec-title--three text-center mb-60">
                  <h2 className="xb-item--title mb-25">Client Testimonials</h2>
                </div>
              </div>
            </div>

            <div className="testimonial-slider">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".testimonial-pagination",
                  clickable: true,
                }}
                speed={800}
                breakpoints={{
                  992: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                  0: { slidesPerView: 1 },
                }}
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="counceling-testimonial-item">
                    <div className="xb-item--quote">
                      <img src={quote1} alt="" />
                      <img src={quote} alt="" />
                    </div>

                    <ReadMoreText>
                      we longed to create a home reminiscent of grandparents. We
                      approached Dinakar at Heritage B
                      <span className="bnb-p-tag">&</span>B with a very basic
                      requirement of a house with a "Mutham" on our land at the
                      outskirts of Meivazhi Salai. Dinakar took our dream and
                      infused Chettinad and colonial elements to create an
                      outstanding structure. His work ethic was amazing as was
                      his honesty and dedication to his craft. Amidst 2 years of
                      COVID lockdowns, the house was completed true to design
                      and of exceptional building quality.
                    </ReadMoreText>

                    <div className="xb-item--author">
                      <div className="xb-item--avatar">
                        <img src={Testi1} alt="" />
                      </div>
                      <h3 className="xb-item--name">Gopinath, Gayathri</h3>
                      <span className="xb-item--desig">Client</span>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="counceling-testimonial-item bg-2">
                    <div className="xb-item--quote">
                      <img src={quote1} alt="" />
                      <img src={quote} alt="" />
                    </div>

                    <ReadMoreText>
                      We were first introduced to Mr. Dinakar in 2009, and from
                      that moment, his passion for architecture and depth of
                      technical knowledge stood out clearly. What began as a
                      professional association soon grew into a relationship
                      built on trust and respect. The home he designed and built
                      for our family remains very special to us which was
                      thoughtfully planned, beautifully executed, and perfectly
                      aligned with our lifestyle. Every detail reflected his
                      belief that quality should never be compromised and that
                      every project deserves personal attention, regardless of
                      its scale.
                      <br />
                      Beyond our home, his commercial expertise is equally
                      evident in the our Sivagangai Amsaraj TVS Showroom, where
                      smart planning meets strong brand-focused design. We also
                      had the privilege of working with him on several
                      remarkable museum projects that truly showcase his
                      versatility and design excellence. The Kodaikanal Museum
                      reflects his sensitivity to natural surroundings and
                      heritage, blending structure with landscape in a graceful
                      and meaningful way. The Karaikudi Museum stands as a fine
                      example of how he preserves cultural identity while
                      delivering strong functional design. The Penang Museum, on
                      the other hand, highlights his ability to work with
                      international standards, managing complex requirements
                      with precision, professionalism, and aesthetic clarity.
                      Each project speaks differently, yet all carry the same
                      signature of thoughtful design and flawless execution.
                      <br />
                      With an uncompromising commitment to quality, he
                      approaches every project as if it were his own. A true
                      workaholic in the best sense, he ensures that every
                      promise made is a promise kept, delivering with
                      transparency, discipline, and consistency. His expertise
                      in planning, design coordination, cost control, and site
                      execution ensures excellence at every stage of the project
                      lifecycle. Over the past 20 years, our professional
                      collaboration has grown into a strong family friendship.
                      We truly believe that clients are fortunate to entrust
                      their projects to him, as he is one of those rare,
                      God-gifted professionals who combine talent, integrity,
                      and heartfelt commitment. I, G.R. Mahadevan, and my wife,
                      M. Priya Dharshini, feel proud, happy, and blessed to be
                      among those who have worked with him and to also share his
                      friendship. His work reflects not only architectural
                      brilliance, but a person who values relationships as much
                      as results.
                    </ReadMoreText>

                    <div className="xb-item--author">
                      <div className="xb-item--avatar">
                        <img src={Testi2} alt="" />
                      </div>
                      <h3 className="xb-item--name">
                        G.R. Mahadevan, M. Priya Dharshini
                      </h3>
                      <span className="xb-item--desig">Client</span>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 3 – IMAGE ZOOM */}
                <SwiperSlide>
                  <div className="counceling-testimonial-item my-content">
                                        <div className="xb-item--quote mb-0">
                      <img src={quote1} alt="" />
                      <img src={quote} alt="" />
                    </div>
                    <div
                      className="testi-img zoomable"
                      onClick={(e) => {
                        e.stopPropagation();
                        openZoom();
                      }}
                    >
                      <img src={TestiImg} alt="Testimonial" />
                    </div>

                    <ReadMoreText>
                      It is indeed a pleasure and pride to write about Mr.
                      Dinakar, the founder of Heritage B<span className="bnb-p-tag">&</span>B on his outstanding
                      contibution towards interior architecture, particularly
                      antique category.
                      <br />
                      He always undertakes challenging projects, which others
                      may not even imagine and Completes it more than the
                      expectation of his clients with allmost perfection and
                      elegance, which leads the ambience of the project looks
                      awesome. He is Capable of excel both antique and modern or
                      fusion of both, which may suit the need of the project. a
                      decade ago we entrusted our residential house and has
                      Completed with fusion of antique and modern and even today
                      our guests visiting on us have been rising their eyebrows
                      with excitement. kudos Dinakar.
                      <br />
                      it is always our wish that the Almighty may shower on
                      blessings for good health and mind and thinking alive and
                      fresh and long years of innings.
                      <br />
                      Wish you best of luck Dinakar.
                      <br /> With ever love and greetings
                    </ReadMoreText>

                    <div className="xb-item--author" >
                      <h3 className="xb-item--name" style={{marginTop:"10px"}}>
                        K. Mariappan, DR. Indrani
                      </h3>
                      <span className="xb-item--desig">Client</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="testimonial-pagination"></div>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE ZOOM MODAL */}
      {zoomOpen && (
        <div className="image-zoom-overlay" onClick={closeZoom}>
          <div className="image-zoom-box" onClick={(e) => e.stopPropagation()}>
            <button className="zoom-close" onClick={closeZoom}>
              ×
            </button>
            <img src={TestiImg} alt="Zoomed" />
          </div>
        </div>
      )}

      <img src={TestimonialsShape} className="high-shape-img" alt="" />
    </section>
  );
};

export default Testimonial;
