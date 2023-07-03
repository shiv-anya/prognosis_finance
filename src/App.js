import Navbar from './components/Navbar';
import './App.css';
import Banner from './components/Banner';
import { Fragment } from 'react';
import Prediction from './components/predictionSection/Prediction';
import Feature from './components/featureSection/Feature';
import QuestionBox from './components/QuestionBox';
import Trending from './components/trendingSection/Trending';
import ViewPrediction from './components/ViewPrediction';
import Footer from './components/Footer';
import PredictSection from "./components/PredictSection/PredictSection"

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Banner/>
      <Prediction/>
      <Feature/>
      <QuestionBox/>
      <Trending/>
      <PredictSection/>
      <ViewPrediction/>
      <Footer/>
    </Fragment>
  );
}

export default App;
