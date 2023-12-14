import HomepageBanner from "../components/HomepageBanner.jsx";
import Navbar from "../components/Navbar.jsx";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ######## NAVBAR ######## */}
      <Navbar />
      <main className="container mx-auto p-3">
        {/* ######## BANNER ######## */}
        <HomepageBanner />
      </main>
    </div>
  );
};

export default Homepage;
