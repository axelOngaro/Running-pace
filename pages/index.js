import React from 'react';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import { kmhToMph, roundNumber } from '../utils/functions';
import PaceSelector from '../components/PaceSelector';
import RangeSelector from '../components/RangeSelector';

import { useState } from 'react';
import Column from '../components/Column';

function Home() {
  //state
  const [paceMinutesMin, setPaceMinutesMin] = useState(4);
  const [paceMinutesMax, setPaceMinutesMax] = useState(5);
  const [paceSecondsMin, setPaceSecondsMin] = useState(10);
  const [paceSecondsMax, setPaceSecondsMax] = useState(30);
  const [distance, setDistance] = useState([1, 3, 21, 42]);

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
      <Column distance={distance} setDistance={setDistance} />
      <Chart
        paceMinutesMin={paceMinutesMin}
        paceMinutesMax={paceMinutesMax}
        paceSecondsMin={paceSecondsMin}
        paceSecondsMax={paceSecondsMax}
        distances={distance}
        setDistance={setDistance}
      />
    </div>
  );
}

export default Home;
