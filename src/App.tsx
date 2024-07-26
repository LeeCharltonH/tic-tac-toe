import { Card } from './Components/Card/Card';
import { Grid } from './Components/Grid/Grid';

const App = () => {
  const cardValues = Array(9).fill('X');

  return (
    <main className="bg-dark-cyan min-h-screen flex flex-col justify-center items-center">
      <Grid>
        {cardValues.map((cardValue, index) => (
          <Card key={index} content={cardValue} />
        ))}
      </Grid>
      <div>Status bar</div>
    </main>
  );
};

export default App;
