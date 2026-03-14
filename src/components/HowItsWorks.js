import "./HowItsWorks.css";

const steps = [
  {
    number: 1,
    title: "Choose Service",
    description:
      "Select the service you need, such as Data Solutions or Survey Distribution, based on your business requirements.",
  },
  {
    number: 2,
    title: "Define Audience",
    description:
      "Identify your target audience, demographics, industry, and campaign goals.",
  },
  {
    number: 3,
    title: "Launch",
    description:
      "Receive your verified data leads or launch your survey campaign with our support.",
  },
  {
    number: 4,
    title: "Grow",
    description:
      "Use the insights and data to reach customers, improve marketing performance, and grow your business.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="container">

        <h2 className="container-heading">How It Works</h2>
        <p className="subtitle1">
          A simple and streamlined process to get the data and insights you need.
        </p>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{step.number}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {index !== steps.length - 1 && <div className="connector"></div>}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}