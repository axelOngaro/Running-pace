import React from 'react';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import { kmhToMph, roundNumber } from '../utils/functions';
import PaceSelector from '../components/PaceSelector';
import RangeSelector from '../components/RangeSelector';

import { useState } from 'react';

function Home() {
  //state
  const [paceMinutesMin, setPaceMinutesMin] = useState(4);
  const [paceMinutesMax, setPaceMinutesMax] = useState(5);
  const [paceSecondsMin, setPaceSecondsMin] = useState(10);
  const [paceSecondsMax, setPaceSecondsMax] = useState(30);

  return (
    <div>
      <Navbar />
      <PaceSelector />
      <RangeSelector
        paceMinutesMin={paceMinutesMin}
        paceMinutesMax={paceMinutesMax}
        paceSecondsMin={paceSecondsMin}
        paceSecondsMax={paceSecondsMax}
        setPaceMinutesMin={setPaceMinutesMin}
        setPaceMinutesMax={setPaceMinutesMax}
        setPaceSecondsMin={setPaceSecondsMin}
        setPaceSecondsMax={setPaceSecondsMax}
      />
      <Chart
        paceMinutesMin={paceMinutesMin}
        paceMinutesMax={paceMinutesMax}
        paceSecondsMin={paceSecondsMin}
        paceSecondsMax={paceSecondsMax}
      />
    </div>
  );
}

export default Home;
