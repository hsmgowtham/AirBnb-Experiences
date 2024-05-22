import Main from './components/Main';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import kate from './images/kate.png'


import './App.css';

function App() {
  return (
    <div className="conatiner">
      <NavBar />
      {/* <Hero /> */}
      <Card 
        img={kate}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with katie"
        price={136}
      />
    </div>
  );
}

export default App;
