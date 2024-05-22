import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';


import './App.css';

function App() {
  const cards = data.map(card =>
    <Card
      key={card.id}
      {...card}
    />
  )
  return (
    <div className="conatiner">
      <NavBar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
