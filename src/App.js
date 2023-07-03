import Navbar from './components/Navbar';
import './App.css';
import Banner from './components/Banner';
import { Fragment } from 'react';
import Prediction from './components/predictionSection/Prediction';
import Feature from './components/featureSection/Feature';
import QuestionBox from './components/QuestionBox';
import Trending from './components/trendingSection/Trending';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Banner/>
      <Prediction/>
      <Feature/>
      <QuestionBox/>
      <Trending/>
    </Fragment>
  );
}

export default App;
