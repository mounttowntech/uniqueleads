import "./ReliableSection.css";

const features = [
  {
    icon: "icons/swoosh.png",
    alt: "verified icon",
    title: "Verified Sources",
    desc: "Our data is collected from trusted and verified sources to ensure high accuracy, reliability, and deliverability.",
  },
  {
    icon: "icons/aim.png",
    alt: "targeted icon",
    title: "Targeted Reach",
    desc: "Advanced segmentation helps you reach the right audience and relevant demographics for better campaign results.",
  },
  {
    icon: "icons/thunder.png",
    alt: "delivery icon",
    title: "Fast Delivery",
    desc: "Receive your data files or survey results quickly, enabling faster campaign execution and decision-making.",
  },
  {
    icon: "icons/uparrowgraph.png",
    alt: "leads icon",
    title: "High-Quality Leads",
    desc: "Access premium B2B and B2C leads that are more likely to convert and improve marketing ROI.",
  },
  {
    icon: "icons/lock.png",
    alt: "secure icon",
    title: "Secure Handling",
    desc: "We follow strict data privacy and security standards to ensure all information is handled safely and responsibly.",
  },
  {
    icon: "icons/headphone.png",
    alt: "support icon",
    title: "Professional Support",
    desc: "Our experienced team provides expert support for strategy, campaign execution, and data insights.",
  },
];

const ReliableSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Reliable Data. Powerful Insights.</h2>
        <p className="features-subtitle">
          Trusted by leading businesses to drive smarter decisions and sustainable growth.
        </p>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">
                <img src={f.icon} alt={f.alt} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReliableSection;