import "./IndustrySection.css";

const row2 = ["Technology", "Real Estate", "Finance", "Healthcare"];
const row1 = ["Education", "Startups", "Marketing Agencies", "E-commerce"];

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
          <div className="industry-row">
            {row1.map((label) => (
              <button key={label} className="industry-btn">
                {label}
              </button>
            ))}
          </div>

          <div className="industry-row">
            {row2.map((label) => (
              <button key={label} className="industry-btn">
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}