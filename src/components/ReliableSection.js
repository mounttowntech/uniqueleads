import "./ReliableSection.css";

const ReliableSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        
        <h2 className="features-title">
          Reliable Data. Powerful Insights.
        </h2>

        <p className="features-subtitle">
          Trusted by leading businesses to drive smarter decisions and sustainable growth.
        </p>

        <div className="features-grid">

          <div className="feature-card">
                <div className="feature-icon">
                        <img src="icons/swoosh.png" alt="database icon" />
                </div> 
            <h3 className="grid-heading1">Verified Sources</h3>
            <p>
              Our data is collected from trusted and verified sources to ensure
              high accuracy, reliability, and deliverability.
            </p>
          </div>

          <div className="feature-card">
                <div className="feature-icon">
                        <img src="icons/aim.png" alt="database icon" />
                </div>
            <h3 className="grid-heading2">Targeted Reach</h3>
            <p>
              Advanced segmentation helps you reach the right audience and
              relevant demographics for better campaign results.
            </p>
          </div>

          <div className="feature-card">
                <div className="feature-icon">
                        <img src="icons/thunder.png" alt="database icon" />
                </div>            
                <h3 className="grid-heading3">Fast Delivery</h3>
            <p>
              Receive your data files or survey results quickly, enabling faster
              campaign execution and decision-making.
            </p>
          </div>

          <div className="feature-card">
                <div className="feature-icon">
                        <img src="icons/uparrowgraph.png" alt="database icon" />
                </div>    
                <h3 className="grid-heading4">High-Quality Leads</h3>
            <p>
              Access premium B2B and B2C leads that are more likely to convert
              and improve marketing ROI.
            </p>
          </div>

          <div className="feature-card">
                <div className="feature-icon">
                        <img src="icons/lock.png" alt="database icon" />
                </div>
                <h3 className="grid-heading5">Secure Handling</h3>
            <p>
              We follow strict data privacy and security standards to ensure all
              information is handled safely and responsibly.
            </p>
          </div>

          <div className="feature-card">
                <div className="feature-icon">
                        <img src="icons/headphone.png" alt="database icon" />
                </div>
                <h3 className="grid-heading6">Professional Support</h3>
            <p>
              Our experienced team provides expert support for strategy,
              campaign execution, and data insights.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReliableSection;