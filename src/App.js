import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/NavBar/Nav';
import data from "./data/iqooData.json";

function App() {
  return (
    <div className="App">

      <Nav logo={data.logo} banner={data.Banner} bannerData={data.bannerData} />
      <Footer />

    </div>
  );
}

export default App;
