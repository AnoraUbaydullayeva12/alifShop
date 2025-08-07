import React from "react";
import Header from "./components/layout/Header";
import SliderBanner from "./components/Slider";
import Footer from "./components/layout/Footer";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const hideSliderOn = ["search", "cart", "saved", "product"];
  const isSliderVisible = !hideSliderOn.some((path) =>
    currentPath.includes(path)
  );

  return (
    <div>
      <Header />
      {isSliderVisible && <SliderBanner />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
