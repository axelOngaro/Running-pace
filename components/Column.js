import styles from '../styles/Column.module.scss';

function Column({ distance, setDistance, metric, setMetric }) {
  const distanceHandler = () => {
    const distanceValue = parseInt(document.getElementById('inputDistance').value);
    if (distanceValue <= 0) {
      alert('try again');
    } else return setDistance([...distance, distanceValue]);
  };

  const metricChangeHandler = (e) => {
    setMetric(e.target.value);
  };

  return (
    <div className={styles.column}>
      <input type="number" name="distance" id="inputDistance" />
      <label htmlFor="distance">add a distance</label>
      <button onClick={distanceHandler}>+</button>
      <label htmlFor="distance">Select a distance</label>
      <select id="distance-list" onChange={metricChangeHandler}>
        <option value="km"> Km</option>
        <option value="m">meters</option>
        <option value="miles">miles</option>
      </select>
    </div>
  );
}

export default Column;
