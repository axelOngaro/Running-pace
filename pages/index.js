import React from 'react';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import { kmhToMph, roundNumber } from '../utils/functions';
function Home() {
  return (
    <div>
      <Navbar />
      <Chart />
    </div>
  );
}

export default Home;
