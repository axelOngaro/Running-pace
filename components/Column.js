import styles from '../styles/Column.module.scss';

function Column({ distance, setDistance }) {
  const distanceHandler = () => {
    const distanceValue = parseInt(document.getElementById('inputDistance').value);
    if (distanceValue <= 0) {
      alert('try again');
    } else return setDistance([...distance, distanceValue]);
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
