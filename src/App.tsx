import { Card } from './Components/Card/Card';
import { Grid } from './Components/Grid/Grid';
import { Reset } from './Components/Reset/Reset';
import { Status } from './Components/Status/Status';
import { useGameStatus, useSetNextPlayer } from './stores/gameStatusStore';

const App = () => {
  const gameStatus = useGameStatus();
  const setNextPlayer = useSetNextPlayer();

  return (
    <main className="bg-dark-cyan min-h-screen flex flex-col justify-center items-center">
      <Grid>
        {gameStatus.map((cardValue, index) => (
          <Card key={index} cardNumber={index} content={cardValue} onClick={setNextPlayer} />
        ))}
      </Grid>
      <Status />
      <Reset />
    </main>
  );
};

export default App;
