import React from "react"
//import './about.css'
import DynamicHeadingBackground from './DynamicHeading';
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"


const About=()=>{
    return( 
    <div>
        {/* <img src={pic} width="100%" height="auto" alt="About pic"/> */}
        <Navbar />
        <DynamicHeadingBackground />
        
        <div className="container">
            <h1>Zipline Logistic- The Best Logistics Company In India </h1>
            <p>We are the best logistics company in India. We can provide you with the best-experienced crew, secure and dependable moving assistance, and committed customer care whether you’re moving within the same city or to a different city. We have a sizable network with regional offices in more than 30 places and dependable partners all over India.</p>
            <p>By becoming the best logistics solution provider, advice, and services required for you to make the smartest and safest selections, Zipline Logistic will take the worry out of this stage and make it simple. We at Zipline Logistic, packers and movers services in Delhi NCR, do not want you to become the next victim of a negligent moving business. Our goal is to provide our clients with the best possible service. Packers and Movers services (ZIPLINE LOGISTIC) competently reposition our customers while offering peace of mind by offering flil-service moving and striving to complete every work with intelligence, consistency, competency, and dedication.</p>
            <p>ZIPLINE LOGISTIC provides services such as packers and movers services, loading and unloading, insurance, office and corporate relocation, household relocation, corporate relocation, vehicle transportation services, warehousing, trailer transport services in Delhi, other transportation by road, rail, and air, pet transportation, and so on. We offered the new containerized concept with “container,” which allowed customers moving from city to city, anywhere in India, to pay only for the space occupied by their consignments and even profit from the simplicity of professional packers and movers services in Delhi, which ensured no damage to their priceless household items.</p>
        </div>
        <section className="testi">
        <div className="testimonial-container">
        <div className="testimonial">
            <img src="images/history-img.jpg" alt="Testimonial Person 1"/>
            <h2>Our History</h2>
            <p>"For more than 10 years, ZIPLINE LOGISTICS (LMT) has served as a crucial link for Indian companies needing trailer transport services within the country. Our business was founded in 1989. Formerly known as Shekhawati cargo movers p Ltd, it is now engaged in warehousing while Zipline is involved in the retail, PTL, or FTL transportation industry. Since that time, it has been a prominent logistics solution provider. Our professional approach and aggressive pricing have helped us establish a reputation for dependability in the local and national transportation of goods and packages. We have established ourselves as the most favoured transporters from Delhi & Rajasthan to North India, West India, and vice versa thanks to the quality of service we have provided from our inception"</p>
        </div>
        <div className="testimonial">
            <img src="images/domain-expertise.jpg" alt="Testimonial Person 2"/>
            <h2>Our Mission & Vission</h2>
            <p>"Our primary goal is to satisfy our customers. We provide quick, expert, and efficient packers and movers services in Delhi and ensure that all the goods are wholly packed to prevent any danger of damage during shipment. We make sure that your items are transported from one location to another safely and within the allotted time. The best logistics company in India (ZIPLINE LOGISTIC) oversees the entire packing process and ensures that everything is done correctly to prevent damaged goods during transportation. We are dedicated to providing personalized solutions, investing in technology and people, and adhering to all relevant, statutory, and regliatory standards. Increasing portability, providing end-to-end supply chain services via a worldwide network that is efficient."</p>
        </div>
        <div className="testimonial">
            <img src="images/mission.jpg" alt="Testimonial Person 3"/>
            <h2>Our Quality Assurance</h2>
            <p>"ZIPLINE LOGISTIC- Delhi NCR is committed to quality and customer satisfaction and will not allow any factor to divert our attention from this goal. The three most crucial aspects are speed, security, and legality. Our efforts are planned in advance to ensure that our services’ quality is maintained in every case. All of the services provided by Packers and Movers Services in Delhi comply with numerous industry standards and international quality standards. We at ZIPLINE LOGISTIC the best logistics company in India have developed a stringent quality control strategy at each stage of delivering our services thanks to the cooperation and guidance of our quality controllers. Our sincerity, hard work, and professionalism assist trailer transport services in Delhi pleasing the clients."</p>
        </div>
    </div>
    
        
        </section>
        <div className="containerAdv">
    <div className="advantage">
      <img src="images/advantages.jpg" alt="Image" />
      <div className="advantage-content">
        <h2>Advantages</h2>
        <p>ZIPLINE LOGISTIC – Delhi NCR is a well-planned “PACKERS & MOVERS” service provider with a team in the industry for a few years. These services are exchanged by experienced management and trained support staff of Packers and Movers Services in Delhi NCR (ZIPLINE LOGISTIC), allowing us to provide various benefits to our clients. Movers and Packers in Delhi NCR (ZIPLINE LOGISTIC) provide our clients with the following benefits:
        <ul>
        <li>Amazing packaging</li>
        <li>Superb packaging Material used </li>
        <li>Caution when loading and unloading </li>
        <li>A large network throughout India or abroad</li>
        <li>Market Credibility Based on Safety</li>
        </ul>
        
        </p>
        

      </div>
    </div>
  </div>
 
        
  <Footer />
    </div>
   
)}
export default About;