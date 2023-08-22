import React from 'react'
import "./Services.css"
import { useNavigate } from "react-router-dom";

function Services() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  return (
    <div>
      <section className="section service" id="service" aria-label="service">
        <div className="container">

          <p className="section-subtitle">All Services</p>

          <h2 className="h2 section-title">Trusted For Our Services</h2>

          <p className="section-text">
            Elevate your logistics experience with our diverse range of services, including reliable trailer solutions, expert packers and movers, and efficient transportation options, ensuring your cargo reaches its destination securely and on time
          </p>

          <ul className="service-list grid-list">

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src="images/service-icon-1.png" width="80" height="60" loading="lazy" alt="Truck" />
                </div>

                <h3 className="h3 card-title">
                  <span className="span">01</span> Trailers Services
                </h3>

                <p className="card-text">
                  We are a well-known company offering a variety of trailers transportation services in Delhi to our esteemed clients all over the nation.
                </p>

                <a href="#" className="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">View Detail</span>
                </a>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src="images/service-icon-2.png" width="74" height="60" loading="lazy" alt="Ship" />
                </div>

                <h3 className="h3 card-title">
                  <span className="span">02</span> Packers and Movers
                </h3>

                <p className="card-text">
                  As a leading provider of packers and movers services, we prioritize our clients' packaging and transportation needs in Delhi and across various states.
                </p>

                <a href="#" className="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">View Detail</span>
                </a>

              </div>
            </li>

            <li>
              <div className="service-card">

                <div className="card-icon">
                  <img src="images/service-icon-3.png" width="60" height="60" loading="lazy" alt="Airplane" />
                </div>

                <h3 className="h3 card-title">
                  <span className="span">03</span> Transportation
                </h3>

                <p className="card-text">
                  We are a trustable logistics company that provides local and nationwide transportation services in Delhi for goods and parcels with safety and protocols.
                </p>

                <a href="#" className="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span className="span">View Detail</span>
                </a>

              </div>
            </li>
          </ul>
          <div className="button">
            <a href="#" className="btn" onClick={() => handleClick()}>Learn More</a>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Services