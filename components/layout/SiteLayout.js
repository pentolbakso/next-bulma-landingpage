import Navbar from "./Navbar";
import Footer from "./Footer";

const SiteLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default SiteLayout;
