import React from 'react';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import { kmhToMph, roundNumber } from '../utils/functions';
import PaceSelector from '../components/PaceSelector';
import RangeSelector from '../components/RangeSelector';
function Home() {
  return (
    <div>
      <Navbar />
      <PaceSelector />
      <RangeSelector />
      <Chart />
    </div>
  );
}

export default Home;
