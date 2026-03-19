import "./ComprehensiveSection.css";

const cards = [
  {
    image: "images/laptop1.png",
    icon: "icons/database-icon.png",
    title: "Data Selling",
    subtitle: "High-Quality Business & Consumer Data",
    para: `We provide verified and well-structured data that helps businesses connect with potential customers quickly and effectively. Our data solutions support targeted outreach, improve marketing campaigns, and help increase overall sales performance.`,
    points: [
      "B2B Business Leads",
      "B2B Consumer Data",
      "Email Marketing Lists",
      "Phone Contact Databases",
      "Industry Specific-Contacts",
      "Location-Based Leads",
    ],
    linkHref: "#RequestaDataSimple",
    linkText: "Request a Data Sample →",
  },
  {
    image: "images/laptop2.png",
    icon: "icons/database-icon.png",
    title: "Survey Distribution",
    subtitle: "Professional Market Research Surveys",
    para: `Understanding your audience is essential for business success, and Unique Leads offers professional survey distribution services that enable businesses to collect reliable insights from their target audience and make informed, data-driven decisions.`,
    points: [
      "Market Research Surveys",
      "Customer Feedback Collection",
      "Product Testing Surveys",
      "Brand Awareness Studies",
      "Consumer Behavior Analysis",
      "Location-Based Leads",
    ],
    linkHref: "#LaunchSurveyCampaign",
    linkText: "Launch Survey Campaign →",
  },
];

function ComprehensiveSection() {
  return (
    <div className="Comprehensive">
      <div className="Comprehensive-heading">
        <h3>Comprehensive Data Solutions</h3>
        <p>Everything you need to identify, reach and understand your target audience</p>
      </div>

      <div className="grids">
        {cards.map((card, i) => (
          <div className="card-box" key={i}>
            <div className="image-card">
              <img src={card.image} alt={card.title} />
              <div className="image-overlay">
                <div className="icon-box">
                  <img src={card.icon} alt="icon" />
                </div>
                <div>
                  <h2>{card.title}</h2>
                  <p>{card.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="card-body">
              <p className="image-para">{card.para}</p>
              <ul className="pointtable">
                {card.points.map((pt, j) => (
                  <li className="points" key={j}>{pt}</li>
                ))}
              </ul>
              <a href={card.linkHref} className="anchor">{card.linkText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComprehensiveSection;