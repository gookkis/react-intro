import logo from './logo.svg';
import './App.css';
import ButtonClass from './components/ButtonClass';
import ButtonFunction from './components/ButtonFunction';

function App() {
  const onClickHandler = (song) => {
    alert(song)
  }
  const favoriteFood = ["Matcha", "Sate", "Gulai", "Nasi Goreng"]
  return (
    <div>
      <h1>Makanan</h1>
      <p>Favorite Food:</p>
      <ul>
        {
          favoriteFood.map((food) => {
            return <li>{food}</li>
          })
        }

      </ul>
      <div style={{ marginLeft: "20px" }}>
        <ButtonClass text="I'm button class from props"
          color="red" /><br />
        <ButtonFunction text="I'm button function from props"
          color="blue" onClickHandler={() => onClickHandler("lalala")} /><br />
        <ButtonClass /><br />
        <ButtonFunction onClickHandler={() => onClickHandler("lilili")} /><br />
      </div>
    </div>
  );
}

export default App;
