import "./IndustrySection.css";

const industries = [
  "Technology",
  "Real Estate",
  "Finance",
  "Healthcare",
  "Education",
  "Startups",
  "Marketing Agencies",
  "E-commerce",
];

export default function IndustrySection() {
  return (
    <section className="industries">
      <div className="container">
        <h2>Industries We Serve</h2>

        <p className="subtitle">
          Our data and research solutions help businesses across multiple
          industries connect with the right audience and reach their target
          markets effectively.
        </p>

        <div className="industry-grid">
          {industries.map((industry, index) => (
            <button key={index} className="industry-btn">
              {industry}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
