import { useEffect, useState } from "react";
import HeroSection from "./components/home/HeroSection";
import CategoriesSection from "./components/home/CategoriesSection";
import FeaturedItemsSection from "./components/home/FeaturedItemsSection";
import HowItWorksSection from "./components/home/HowItWorksSection";
import BannerOfferSection from "./components/home/BannerOfferSection";
import { Box } from "@mui/material";
import Login from "./authentication/Login";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId); 
  }, []);

  return (
    <Box sx={{ backgroundColor: "#fefefe" }}>
      {isLoggedIn ? (
        <>
          <HeroSection />
          <CategoriesSection />
          <FeaturedItemsSection />
          <HowItWorksSection />
          <BannerOfferSection />
        </>
      ) : (
        <Login />
      )}
    </Box>
  );
};

export default HomePage;
