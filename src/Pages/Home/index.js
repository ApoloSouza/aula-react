
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import VideoRepository from '../../Components/VideoRepository/VideoRepository.js';
import Footer from '../../Components/Footer';
import React, { useState } from "react";
import styles from "./Home.module.css";




function Home() {
  return (
    <>
      <Header />
      <Banner />
      <VideoRepository />
      <Footer />
    </>
  );
}

export default Home;
