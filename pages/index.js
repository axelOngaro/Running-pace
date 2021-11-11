import React from 'react';
import Navbar from '../components/Navbar';
import Chart from '../components/Chart';
import { kmhToMph, roundNumber } from '../utils/functions';
import PaceSelector from '../components/PaceSelector';
import RangeSelector from '../components/RangeSelector';

import { useState } from 'react';
import Column from '../components/Column';

function Home() {
  //new state
  const [distance, setDistance] = useState([1, 3, 21, 42]);
  const [paceMin, setPaceMin] = useState(400);
  const [paceMax, setPaceMax] = useState(1200);
  const [step, setStep] = useState(11);
  const [metric, setMetric] = useState('k');
  const [currentPace, setCurrentPace] = useState(0);

  return (
    <div>
      <Navbar />
      <PaceSelector currentPace={currentPace} setCurrentPace={setCurrentPace} />
      <RangeSelector
        paceMin={paceMin}
        paceMax={paceMax}
        setPaceMin={setPaceMin}
        setPaceMax={setPaceMax}
        step={step}
        setStep={setStep}
      />
      <Column
        distance={distance}
        setDistance={setDistance}
        metric={metric}
        setMetric={setMetric}
      />
      <Chart
        paceMin={paceMin}
        paceMax={paceMax}
        distances={distance}
        setDistance={setDistance}
        step={step}
        metric={metric}
      />
    </div>
  );
}

export default Home;
