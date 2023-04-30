import React from "react";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div className="container">
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
