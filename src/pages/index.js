import HeroSection from "./components/home/HeroSection";
import CategoriesSection from "./components/home/CategoriesSection";
import FeaturedItemsSection from "./components/home/FeaturedItemsSection";
import HowItWorksSection from "./components/home/HowItWorksSection";
import BannerOfferSection from "./components/home/BannerOfferSection";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#fefefe" }}>
      <HeroSection />
      <CategoriesSection />
      <FeaturedItemsSection />
      <HowItWorksSection />
      <BannerOfferSection />
    </Box>
  );
};

export default HomePage;
