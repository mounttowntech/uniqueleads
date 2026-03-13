import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-data">
      <div className="hero-container">
        
        <div className="hero-image">
          <img 
            src="images/group.png" 
            alt="team working"
          />
        </div>

        <div className="hero-content">
          <h1>
            Smart Data Solutions for <br />
            <span>Modern Businesses</span>
          </h1>

          <p>
            Unique Leads is a powerful data platform that helps businesses
            access accurate leads and real customer insights. We connect
            companies with the right audience using verified data and advanced
            research solutions.
          </p>

          <p>
            Our services include verified lead generation, tele-survey
            campaigns, and market research support designed to help businesses
            improve marketing performance and make smarter decisions.
          </p>

          <p>
            We help organizations discover new opportunities, understand their
            customers, and grow faster with reliable data-driven strategies.
          </p>

          <div className="stats">
            <div className="stat-box">
              <h2>98%</h2>
              <p>Data Accuracy</p>
            </div>

            <div className="stat-box">
              <h2>5M+</h2>
              <p>Verified Contacts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;