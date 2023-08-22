import React from 'react'
import "./About.css"
import { useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();

  const handleClick =()=> {
    navigate("/about");
  };

  return (
    <div>
      <div className="welcome">

        <div className="blobs">
          <h1 className='about-heading'>Welcome To India's Best Logistics Company</h1>

          <div className="about-logo-name">

            <div className="comp-name">
              <h1 id='comp-name1'>ZIPLINE <img src="images/logo.png" alt="" /></h1>
              <h1 id="comp-name2">LOGISTICS</h1>
            </div>

            <img className='about-logo' src="images/gify.gif" alt="" />
          </div>
        </div>



        <div className="desc">

          <div className='about-img'>
            <img src="images/truck-vector.jpg" alt="" />
          </div>
          <h3 >Welcome to Zipline Logistics, your trusted transportation services and logistics partner in Delhi, India. With a dedicated team of experienced professionals, we are committed to providing safe, reliable, and efficient moving solutions for both local and long-distance relocations. Our customer-centric approach and unwavering commitment to excellence have made us the preferred choice for individuals and businesses alike. Discover the convenience of seamless moving and exceptional service with Zipline Logistics.</h3>

        </div>

      </div>

      <section className="section about" id="about" aria-label="about">
        <div className="bg">
        <div  className='gif'>
          <p className="section-subtitle">Why Choose Us!</p>
          <img src="images/gify2.gif" alt="" />
        </div>
        <div className="about-container">

          {/*<figure className="about-banner img-holder" style={{ width: "400", height: "720" }}>

            <img src="images/about-banner.jpg" width="400" height="720" loading="lazy" alt=""
              className="img-cover" />

            <img src="images/about-shape-1.png" width="260" height="170" loading="lazy" alt=""
              className="abs-img abs-img-1" />

            <img src="images/about-shape-2.png" width="500" height="500" loading="lazy" alt=""
              className="abs-img abs-img-2" />

          </figure>*/}

          <h2 className="h2 section-title">We Are Professional Logistics & Transportation Agency</h2>
          <p className='para'> Our impressive array of trailers guarantees both the safety and punctuality of your cargo, while our meticulous packers and movers treat your belongings with the utmost care. Backed by a rich tapestry of industry knowledge, we're your assurance of unmatched dependability and professionalism. We don't just offer services; we craft tailored solutions to align with your unique needs. Discover a realm of seamless logistics where expertise, effectiveness, and economy converge – all by simply opting for us.</p>
          <div className="wrapper">
            <div className="static-txt">Our Qualitative Policy:</div>
            <ul class="dynamic-txts">
              <li><span>Prompt and positive response</span></li>
              <li><span>Team performance</span></li>
              <li><span>On-time delivery of goods</span></li>
              <li><span>To reduce customer complaints</span></li>
              <li><span>To constantly improve in all areas</span></li>
            </ul>
          </div>

          <a href="#" className="btn" onClick={() => handleClick()}>Learn More</a>

        </div>
        </div>

        <ul className="about-list">

          <li>
            <div className="about-card">

              <div className="about-card-icon">
                <img src="images/lock.png" width="80" height="60" loading="lazy" alt="Truck" />
              </div>

              <h3 className="h3 card-title">
                <span className="span"></span>CARGO SECURITY
              </h3>

              <p className="card-text">
                We offer smooth and trustable cargo security check
              </p>

              

            </div>
          </li>

          <li>
            <div className="about-card">

              <div className="about-card-icon">
                <img src="images/delivery.png" width="137" height="100" loading="lazy" alt="Ship" />
              </div>

              <h3 className="h3 card-title">
                <span className="span"></span>FAST AND EFFICIENT DELIVERY
              </h3>

              <p className="card-text">
                Our aim is to optimize and improve your supply chain so that we can give you the best service.
              </p>

              
            </div>
          </li>

          <li>
            <div className="about-card">

              <div className="about-card-icon">
                <img src="images/customer.png" width="80" height="60" loading="lazy" alt="Airplane" />
              </div>

              <h3 className="h3 card-title">
                <span className="span"></span>CUSTOMER SUPPORT
              </h3>

              <p className="card-text">
                Our aim is to optimize and improve your supply chain so that we can give you the best service.
              </p>

              

            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default About