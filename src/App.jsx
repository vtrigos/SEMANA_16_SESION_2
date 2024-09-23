import { Card } from "./components/Card";
import './App.css';

export const App = () => {
  return (
    <div>
      <h3>Best Pricing</h3>
      <h1>Our Pricing Plans</h1>
      <section>
        <Card
          plan="Basic"
          price="$438"
          revision="3x"
          time="30"
          nroPages="10"
        />
        <Card
          plan="Standard"
          price="$438"
          revision="5x"
          time="23"
          nroPages="20"
        />
        <Card
          plan="Business"
          price="$914"
          revision="10x"
          time="15"
          nroPages="35"
        />
      </section>
    </div>
  );
};
