import { useEffect } from 'react';
import './Home.css';
// import "../components/HeroSection.css";
import HeroSection from '../components/HeroSection';
import ComprehensiveSection from '../components/ComprehensiveSection';
import ReliableSection from '../components/ReliableSection';

function Home() {

    useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      const format = counter.getAttribute("data-format");

      let count = 0;
      const speed = target / 100;

      const updateCount = () => {
        if (count < target) {
          count += speed;
          let displayValue = Math.ceil(count);

          if (format === "k") {
            displayValue = Math.ceil(displayValue / 1000) + "K+";
          }

          counter.innerText = displayValue + suffix;
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText =
            format === "k" ? "2K+" : target + suffix;
        }
      };

      updateCount();
    });

  }, []); // 👈 run once when component loads

    return (
        <>
        <section class="hero">

            {/* LEFT CARD */}
            <div class="glass-card left-card">
                <h4>Survey Results</h4>
                <small>Market Research</small>

                <div class="survey-item">
                    <span class="circle blue"></span>
                    <span class="label">Satisfied</span>
                    <span class="value">72%</span>
                </div>

                <div class="survey-item">
                    <span class="circle purple"></span>
                    <span class="label">Neutral</span>
                    <span class="value">18%</span>
                </div>

                <div class="survey-item">
                    <span class="circle pink"></span>
                    <span class="label">Unsatisfied</span>
                    <span class="value">10%</span>
                </div>
            </div>

            {/* CENTER CONTENT */}
            <div class="hero-center">
                <h1>Turn Data Into<br /><span>Business Opportunities</span></h1>

                <p>
                    We help businesses grow with verified data leads, targeted tele-surveys, and accurate market insights. Our solutions
                    connect you with the right audience, the right data, and the right opportunities to expand your business faster.
                </p>

                <div class="hero-buttons">
                    <button class="btn-primary">Get Data Leads</button>
                    <button class="btn-light">Start Survey Campaign</button>
                </div>

                {/* <div class="stats">
      <div>
        <h2 class="grad-text">50</h2>
        <p>Verified Leads</p>
      </div>
      <div>
        <h2 class="grad-text">98%</h2>
        <p>Data Accuracy</p>
      </div>
      <div>
        <h2 class="grad-text">2K+</h2>
        <p>Happy Clients</p>
      </div>
    </div> */}
                <div class="stats">
                    <div>
                        <h2 class="grad-text counter" data-target="50">0</h2>
                        <p>Verified Leads</p>
                    </div>

                    <div>
                        <h2 class="grad-text counter" data-target="98" data-suffix="%">0%</h2>
                        <p>Data Accuracy</p>
                    </div>

                    <div>
                        <h2 class="grad-text counter" data-target="2000" data-format="k">0</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>

            {/* RIGHT CARD */}
            <div class="glass-card right-card">
                <h4>New Lead Batch</h4>
                <small>5,240 Verified Contacts</small>
            </div>

            {/* BOTTOM ANALYTICS */}
            <div class="glass-card analytics-card">
                <div class="analytics-header">
                    <h4>Lead Analytics</h4>
                    <span class="green">+24.6%</span>
                </div>

                <div class="progress-item">
                    <div class="progress-top">
                        <span>B2B Leads</span>
                        <span class="percent">78%</span>
                    </div>

                    <div class="progress"><div class="bar blue" style={{ width: '78%' }}></div></div>
                </div>

                <div class="progress-item">
                    <div class="progress-top">
                        <span>B2C Leads</span>
                        <span class="percent">65%</span>
                    </div>
                    <div class="progress"><div class="bar purple" style={{ width: '65%' }}></div></div>
                </div>

                <div class="progress-item">
                    <div class="progress-top">
                        <span>Survey Responses</span>
                        <span class="percent">91%</span>
                    </div>
                    <div class="progress"><div class="bar pink" style={{ width: '91%' }}></div></div>
                </div>

                {/* BOTTOM BOXES (EXACT LIKE IMAGE)  */}
                <div class="analytics-bottom">
                    <div class="bottom-box">
                        <h3 class="blue-text">12K</h3>
                        <p>New</p>
                    </div>
                    <div class="bottom-box">
                        <h3 class="purple-text">8.4K</h3>
                        <p>Active</p>
                    </div>
                    <div class="bottom-box">
                        <h3 class="pink-text">99%</h3>
                        <p>Valid</p>
                    </div>
                </div>
            </div>

        </section>
        <HeroSection />
        <ComprehensiveSection/>
        <ReliableSection/>
        
        </>
    );
}

export default Home;