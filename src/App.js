import './App.css';
import Discover from './Components/Discover/Discover';
import Footer from './Components/Footer/Footer';
import Nav from './Components/NavBar/Nav';
import Section from './Components/section/section';
import data from "./data/iqooData.json";

function App() {
  return (
    <div className="App">

      <Nav logo={data.logo} banner={data.Banner} bannerData={data.bannerData} />
      <Section midImg={data.MidImg[0]}/>
      <Section midImg={data.MidImg[1]}/>
      <Discover data={data.Discover} />
      <Footer />

    </div>
  );
}

export default App;
