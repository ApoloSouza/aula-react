// import '../../App.css';
// import Header from '../../components/Header';
// import Banner from '../../components/Banner';
// import VideoRepository from '../../components/VideoRepository';
// import Card from '../../components/Card';
// import Footer from '../../components/Footer';

import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import VideoRepository from '../../Components/VideoRepository/VideoRepository.js';
import Footer from '../../Components/Footer';


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
