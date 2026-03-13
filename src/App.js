import HeroSection from "./components/HeroSection";
import ComprehensiveSection from "./components/Comprehensive";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/common/Header";

function App() {
  return (
    <>
    <Header />
    <AppRoutes />
    </>
    
    // <div>
    //   <HeroSection />
    //   <ComprehensiveSection/>
    // </div>
  );
}
export default App;