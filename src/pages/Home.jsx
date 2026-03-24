import { useCallback, useEffect, useMemo, useRef } from 'react';
import './Home.css';
// import "../components/HeroSection.css";
import HeroSection from '../components/HeroSection';
import ComprehensiveSection from '../components/ComprehensiveSection';
import ReliableSection from '../components/ReliableSection';
import IndustrySection from '../components/IndustrySection';
import HowItWorks from '../components/HowItsWorks';
import Contact from '../components/Contact';
import StartGrowing from '../components/StartGrowing';
import { useLocation } from 'react-router-dom';

function Home() {
    let heroRef = useRef(null);
    let servicesRef = useRef(null);
    let aboutRef = useRef(null);
    let contactRef = useRef(null);

    let location = useLocation();

    const scrollMap = useMemo(() => ({
        home: heroRef,
        services: servicesRef,
        about: aboutRef,
        contact: contactRef
    }), []);

    const scrollTo = useCallback((key) => {
        scrollMap[key]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, [scrollMap]);
 
    useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    if (location.state?.scrollTo) {
      setTimeout(() => scrollTo(location.state.scrollTo), 100);
    }

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

  }, [location, scrollTo]); // run once when component loads

  // Scroll when already on home
  useEffect(() => {
    const handler = (e) => scrollTo(e.detail);
    window.addEventListener("scroll-to-section", handler);
    return () => window.removeEventListener("scroll-to-section", handler);
  }, [scrollTo]);

    return (
        <>
        <section className="hero" ref={heroRef}>

            {/* LEFT CARD */}
            <div className="glass-card left-card">
                <h4>Survey Results</h4>
                <small>Market Research</small>

                <div className="survey-item">
                    <span className="circle blue"></span>
                    <span className="label">Satisfied</span>
                    <span className="value">72%</span>
                </div>

                <div className="survey-item">
                    <span className="circle purple"></span>
                    <span className="label">Neutral</span>
                    <span className="value">18%</span>
                </div>

                <div className="survey-item">
                    <span className="circle pink"></span>
                    <span className="label">Unsatisfied</span>
                    <span className="value">10%</span>
                </div>
            </div>

            {/* CENTER CONTENT */}
            <div className="hero-center">
                <h1>Turn Data Into<br /><span>Business Opportunities</span></h1>

                <p>
                    We help businesses grow with verified data leads, targeted tele-surveys, and accurate market insights. Our solutions
                    connect you with the right audience, the right data, and the right opportunities to expand your business faster.
                </p>

                <div className="hero-buttons">
                    <button className="btn-primary">Get Data Leads</button>
                    <button className="btn-light">Start Survey Campaign</button>
                </div>

               
                <div className="stats">
                    <div>
                        <h2 className="grad-text counter" data-target="50">0</h2>
                        <p>Verified Leads</p>
                    </div>

                    <div>
                        <h2 className="grad-text counter" data-target="98" data-suffix="%">0%</h2>
                        <p>Data Accuracy</p>
                    </div>

                    <div>
                        <h2 className="grad-text counter" data-target="2000" data-format="k">0</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>

            {/* RIGHT CARD */}
            <div className="glass-card right-card">
                <h4>New Lead Batch</h4>
                <small>5,240 Verified Contacts</small>
            </div>

            {/* BOTTOM ANALYTICS */}
            <div className="glass-card analytics-card">
                <div className="analytics-header">
                    <h4>Lead Analytics</h4>
                    <span className="green">+24.6%</span>
                </div>

                <div className="progress-item">
                    <div className="progress-top">
                        <span>B2B Leads</span>
                        <span className="percent">78%</span>
                    </div>

                    <div className="progress"><div className="bar blue" style={{ width: '78%' }}></div></div>
                </div>

                <div className="progress-item">
                    <div className="progress-top">
                        <span>B2C Leads</span>
                        <span className="percent">65%</span>
                    </div>
                    <div className="progress"><div className="bar purple" style={{ width: '65%' }}></div></div>
                </div>

                <div className="progress-item">
                    <div className="progress-top">
                        <span>Survey Responses</span>
                        <span className="percent">91%</span>
                    </div>
                    <div className="progress"><div className="bar pink" style={{ width: '91%' }}></div></div>
                </div>

                {/* BOTTOM BOXES (EXACT LIKE IMAGE)  */}
                <div className="analytics-bottom">
                    <div className="bottom-box">
                        <h3 className="blue-text">12K</h3>
                        <p>New</p>
                    </div>
                    <div className="bottom-box">
                        <h3 className="purple-text">8.4K</h3>
                        <p>Active</p>
                    </div>
                    <div className="bottom-box">
                        <h3 className="pink-text">99%</h3>
                        <p>Valid</p>
                    </div>
                </div>
            </div>

        </section>
        <HeroSection ref={aboutRef}/>
        <ComprehensiveSection ref={servicesRef}/>
        <ReliableSection />
        <IndustrySection />
        <HowItWorks />
        <StartGrowing/>
        <Contact ref={contactRef}/>
        </>
    );
}

export default Home;