import styles from '../styles/RangeSelector.module.scss';
import { paceToTime } from '../utils/functionsSec';

function RangeSelector({ paceMin, paceMax, setPaceMin, setPaceMax, step, setStep }) {
  const paceMinHandler = (e) => {
    setPaceMin(parseInt(e.target.value));
  };
  const paceMaxHandler = (e) => {
    setPaceMax(parseInt(e.target.value));
  };

  const stepHandler = (e) => {
    setStep(parseInt(e.target.value));
  };

  const stepClickHandlerMinus = (e) => {
    setStep(--step);
  };
  const stepClickHandlerPlus = (e) => {
    setStep(++step);
  };

  return (
    <div className={styles.rangeSelector}>
      <div className={styles.rangeSelector__sliders}>
        <input
          type="range"
          name="min"
          id=""
          min="0"
          max="1000"
          value={paceMin}
          onChange={paceMinHandler}
        />
        <label htmlFor="min">Min pace</label>
        <div>{paceToTime(paceMin, 1)}</div>
        <input
          type="range"
          name="max"
          id=""
          min="1001"
          max="2000"
          value={paceMax}
          onChange={paceMaxHandler}
        />
        <label htmlFor="max">Max pace</label>
        <div>{paceToTime(paceMax, 1)}</div>
      </div>
      <div className={styles.rangeSelector__inputs}>
        <div>
          <div>
            <label htmlFor="minMinPace">minMinPace</label>
            <input
              type="number"
              name="minMinPace"
              id=""
              value={Math.floor(paceMin / 60)}
              readOnly
            />
            <label htmlFor="minSecPace">minSecPace</label>
            <input type="number" name="minSecPace" id="" value={paceMin % 60} readOnly />
          </div>
          <div>
            <label htmlFor="maxMinPace">maxMinPace</label>
            <input
              type="number"
              name="maxMinPace"
              id=""
              value={Math.floor(paceMax / 60)}
              readOnly
            />
            <label htmlFor="maxSecPace">maxSecPace</label>
            <input type="number" name="maxSecPace" id="" value={paceMax % 60} readOnly />
          </div>
          <div>
            <button onClick={stepClickHandlerMinus}>-</button>
            <input type="number" name="step" value={step} onChange={stepHandler}></input>
            <button onClick={stepClickHandlerPlus}>+</button>
            <label htmlFor="step">Step</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RangeSelector;
