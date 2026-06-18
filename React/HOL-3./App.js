import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name={"Sasi"}
        School={"KKR Gowtham School"}
        total={590}
        goal={600}
      />
    </div>
  );
}

export default App;