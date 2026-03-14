import "./ComprehensiveSection.css";

function ComprehensiveSection() {
  return (

<div className="Comprehensive">
    <div className="Comprehensive-heading"> 
        <h3>Comprehensive Data Solutions</h3>
        <p>Everything you need to identify,reach and understand your target audience</p>
    </div>
    <div className="grids">
      <div className="grid1">
        <div className="grid1-1">
                  <div className="image-card">
                    <img src="images/laptop1.png" alt="Laptop 1"/>
                    <div className="image-overlay">
                      <div className="icon-box">
                        <img src="icons/database-icon.png" alt="database icon" />
                      </div>  
                      <div>
                        <h2>Data Selling</h2>
                        <p>High-Quality Business & Consumer Data</p>
                      </div>
                    </div>
                  </div>
          <p className="image-para">We provide verified and well-structured data that helps
             businesses connect with potential customers quickly
              and effectively. Our data solutions support targeted
               outreach, improve marketing campaigns, and help increase
                overall sales performance.</p>
                <ul className="pointtable">
            <li className="points">B2B Business Leads</li>
            <li className="points">B2B Consumer Data</li>
            <li className="points">Email Marketing Lists</li>
            <li className="points">Phone Contact Databases</li>
            <li className="points">Industry Specific-Contacts</li>
            <li className="points">Location-Based Leads </li>
            </ul>  <br/>
            <a href="#RequestaDataSimple" className="anchor">Request a Data Simple →</a> <br/> <br/> <br/>
            </div>
              
      </div>
      <div className="grid2">
        <div className="grid2-2">
          <div className="image-card">
                    <img src="images/laptop2.png" alt="Laptop 1"/>
                    <div className="image-overlay">
                      <div className="icon-box">
                        <img src="icons/database-icon.png" alt="database icon" />
                      </div>                      
                      <div>
                        <h2>Survey Distribution</h2>
                        <p>Professional Market Research Surveys</p>
                      </div>
                    </div>
                  </div>
          <p className="image-para">Understanding your audience is essential for business success, 
            and Unique Leads offers professional survey distribution services 
            that enable businesses to 
            collect reliable insights from their target audience 
            and make informed, data-driven decisions.</p>
            <ul className="pointtable">
            <li className="points">Market Research Surveys</li>
            <li className="points">Customer Feedback Collection</li>
            <li className="points">Product Testing Surveys</li>
            <li className="points">Brand Awareness Studies</li>
            <li className="points">Consumer Behavior Analysis</li>
            <li className="points">Location-Based Leads</li>
            </ul>  <br/>
            <a href="#LaunchSurveyCampaign" className="anchor">Launch Survey Campaign →</a><br/> <br/> <br/>
        </div>
      </div> 
    </div>
</div>
      );
}

export default ComprehensiveSection;