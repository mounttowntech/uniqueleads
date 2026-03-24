import "./StartGrowing.css";

export default function StartGrowing() {
  return (
      <section className="cta-section">
          <div className="cta-content">
              <h1>Start Growing with the Right Data</h1>
              <p>
                  Access verified leads and powerful survey insights that help your business
                  reach the right customers and make smarter decisions.
              </p>

              <div className="cta-buttons">
                  <a href="request" className="btn primary">Request Data</a>
                  <a href="request" className="btn outline">Launch Survey</a>
              </div>
          </div>
      </section>
  );
}