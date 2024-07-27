import { Card } from './Components/Card/Card';
import { Grid } from './Components/Grid/Grid';
import { useSetNextPlayer } from './stores/gameStatusStore';

const App = () => {
  const cardValues = Array(9).fill(null);
  const setNextPlayer = useSetNextPlayer();

  return (
    <main className="bg-dark-cyan min-h-screen flex flex-col justify-center items-center">
      <Grid>
        {cardValues.map((cardValue, index) => (
          <Card key={index} content={cardValue} onClick={setNextPlayer} />
        ))}
      </Grid>
      <div>Status bar</div>
    </main>
  );
};

export default App;
