import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { Recipes } from '../Components/Recipes';

export function Meals() {
  return (
    <div>
      <Header title="Meals" />
      <Recipes />
      <Footer />
    </div>
  );
}
