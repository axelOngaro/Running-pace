import styles from '../styles/Column.module.scss';

function Column({ distance, setDistance }) {
  const distanceHandler = () => {
    setDistance([...distance, parseInt(document.getElementById('inputDistance').value)]);
  };
  console.log(distance);
  return (
    <div className={styles.column}>
      <input type="number" name="distance" id="inputDistance" />
      <label htmlFor="distance">add a distance</label>
      <button onClick={distanceHandler}>+</button>
    </div>
  );
}

export default Column;
