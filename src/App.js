import Main from './components/Main';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';


import './App.css';

function App() {
  const cards = data.map(card =>
    <Card
      key={card.id}
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      country={card.location}
      title={card.title}
      price={card.price}
    />
  )
  return (
    <div className="conatiner">
      <NavBar />
      {/* <Hero /> */}
      {cards}
    </div>
  );
}

export default App;
