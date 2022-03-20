import React from 'react';
/* eslint-disable */

export default function Dashboard() {
  return (
    <>
      <aside id="fh5co-hero">
        <div className="flexslider" style={{ height: "40vh !important" }}>
          <ul className="slides">
            <li style={{ backgroundImage: "url(images/img_bg_4.jpg)" }}>
              <div className="overlay-gradient"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center slider-text">
                    <div className="slider-text-inner">
                      <h1 className="heading-section">Dashboard!</h1>
                      <h2>
                        Access your files all in one place!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div id="fh5co-pricing" className="fh5co-bg-section">
        <div className="container">
          
          <div className="row">
            <div className="pricing pricing--rabten">
              <div className="col-md-4 animate-box">
                <div className="pricing__item">
                  <div className="wrap-price">
                    {/* <!-- <div className="icon icon-user2"></div> --> */}
                    <h3 className="pricing__title">Trial</h3>
                    {/* <!-- <p className="pricing__sentence">Single user license</p> --> */}
                  </div>
                  <div className="pricing__price">
                    <span className="pricing__anim pricing__anim--1">
                      <span className="pricing__currency">$</span>0
                    </span>
                    <span className="pricing__anim pricing__anim--2">
                      <span className="pricing__period">per year</span>
                    </span>
                  </div>
                  <div className="wrap-price">
                    <ul className="pricing__feature-list">
                      <li className="pricing__feature">One Day Trial</li>
                      <li className="pricing__feature">Limited Courses</li>
                      <li className="pricing__feature">Free 3 Lessons</li>
                      <li className="pricing__feature">No Supporter</li>
                      <li className="pricing__feature">No Tutorial</li>
                      <li className="pricing__feature">No Ebook</li>
                      <li className="pricing__feature">
                        Limited Registered User
                      </li>
                    </ul>
                    <button className="pricing__action">Choose plan</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="pricing__item">
                  <div className="wrap-price">
                    {/* <!-- <div className="icon icon-store"></div> --> */}
                    <h3 className="pricing__title">Silver</h3>
                    {/* <!-- <p className="pricing__sentence">Up to 5 users</p> --> */}
                  </div>
                  <div className="pricing__price">
                    <span className="pricing__anim pricing__anim--1">
                      <span className="pricing__currency">$</span>79
                    </span>
                    <span className="pricing__anim pricing__anim--2">
                      <span className="pricing__period">per year</span>
                    </span>
                  </div>
                  <div className="wrap-price">
                    <ul className="pricing__feature-list">
                      <li className="pricing__feature">
                        One Year Standard Access
                      </li>
                      <li className="pricing__feature">Limited Courses</li>
                      <li className="pricing__feature">300+ Lessons</li>
                      <li className="pricing__feature">Random Supporter</li>
                      <li className="pricing__feature">View Only Ebook</li>
                      <li className="pricing__feature">Standard Tutorials</li>
                      <li className="pricing__feature">
                        Unlimited Registered User
                      </li>
                    </ul>
                    <button className="pricing__action">Choose plan</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="pricing__item">
                  <div className="wrap-price">
                    {/* <!-- <div className="icon icon-home2"></div> --> */}
                    <h3 className="pricing__title">Gold</h3>
                    {/* <!-- <p className="pricing__sentence">Unlimited users</p> --> */}
                  </div>
                  <div className="pricing__price">
                    <span className="pricing__anim pricing__anim--1">
                      <span className="pricing__currency">$</span>499
                    </span>
                    <span className="pricing__anim pricing__anim--2">
                      <span className="pricing__period">per year</span>
                    </span>
                  </div>
                  <div className="wrap-price">
                    <ul className="pricing__feature-list">
                      <li className="pricing__feature">Life Time Access</li>
                      <li className="pricing__feature">
                        Unlimited All Courses
                      </li>
                      <li className="pricing__feature">
                        7000+ Lessons &amp; Growing
                      </li>
                      <li className="pricing__feature">Free Supporter</li>
                      <li className="pricing__feature">Free Ebook Downloads</li>
                      <li className="pricing__feature">Premium Tutorials</li>
                      <li className="pricing__feature">
                        Unlimited Registered User
                      </li>
                    </ul>
                    <button className="pricing__action">Choose plan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
