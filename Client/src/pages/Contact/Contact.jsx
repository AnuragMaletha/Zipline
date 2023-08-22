import React from "react";
//import './contact.css';

const Contact = () => (
    <div className="contact-page">
        <header>
            <h1>Contact Us</h1>
        </header>
        <div className="container">
            <div className="contact-form">
                <h2>Get in Touch</h2>
                <form action="#" method="post">
                    {[
                        { label: "Name", type: "text", id: "name", required: true },
                        { label: "Email", type: "email", id: "email", required: true },
                        { label: "Contact No", type: "tel", id: "phone", required: true },
                        { label: "Enquire Service", type: "text", id: "service", required: true },
                        { label: "Message", type: "textarea", id: "message", required: true }
                    ].map((inputProps, index) => (
                        <div className="form-group" key={index}>
                            <label htmlFor={inputProps.id}>{inputProps.label}:</label>
                            {inputProps.type === "textarea" ? (
                                <textarea id={inputProps.id} name={inputProps.id} rows="4" required />
                            ) : (
                                <input type={inputProps.type} id={inputProps.id} name={inputProps.id} required />
                            )}
                        </div>
                    ))}
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </div>
            
            <h1>Contact Details</h1>
<div className="contact-details">
    
    
    <div className="contact-section">
    <h2>Head Office</h2>
        
        <p><strong>Address:</strong> No.9 Transport center, New Rohtak Road, Punjabi Bagh, New Delhi 110035</p>
        <p><strong>Phone:</strong> 9971044337, 9312680239</p>
        <p><strong>Email:</strong> info@ziplinelogistic.com</p>
    </div>
        
    <div className="contact-section">
        
        <h3>Zipline Logistic, Sanjay Gandhi AG </h3>
        <p>433, Sanjay Gandhi Transport Nagar</p>
        <p>New Delhi-110042</p>
        <p>Ph: 08527909660, 9312680240</p>  
        {/* ... other corporate office details ... */}
    </div>
    <div className="contact-section">
        <h3>Zipline Logistic, Baddi (Himachal Pardesh)</h3>
        <p>Shivalvi Guest House Village Marawala, Baddi</p>
        <p>PH: 8307360326</p>
    </div>
    <div className="contact-section">
        <h3>Zipline Logistic , Noida (BA)</h3>
        <p>OMA ROADWAYS CORPORTION Gourav complex , Harola,</p>
        <p>sector- 5 opp. police fire station , NOIDA</p>
        <p>Ph : 9971044537</p>
    </div>
    <div className="contact-section">
        <h3>Zipline Logistic , Faridabad</h3>
        <p>18/1, Mathura Road</p>
        <p>Neelam Metro Chawk, Faridabad</p>
        <p>Ph : 8178217697</p>
    </div>
    <div className="contact-section">
        <h3>Zipline Logistic, Shahzadpur (Haryana)</h3>
        <p>Near Satsang Bhawan, Vishavkarma Timber Store</p>
        <p>Naraingarh Road, Shahzadpur-134202</p>
        <p>Ph: 9729729051</p>
    </div>
    <div className="contact-section">
        <h3>Zipline Logistic, Ludhiana (Punjab)</h3>
        <p>Plot no. 17, Shop no. 1 Transport Nagar, Ludhiana</p>
        <p>Ph: 97995 92663</p>
    </div>
    <div className="contact-section">
        <h3>Zipline Logistic, Bhilwara (Rajasthan)</h3>
        <p>E-27, Transport Nagar, Bhilwara, Rajasthan-311001</p>
        <p>Ph: 98876 13971</p>
    </div>
</div>



        </div>
        <div className="mapouter">
    <div className="gmap_canvas">
      <iframe
        title="Google Map"
        width="100%"
        height="300px"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Zipline%20logistic%20delhi&t=&z=12&ie=UTF8&iwloc=&output=embed"
        
      ></iframe>
      
    </div>
  </div>
    </div>
);

export default Contact;
