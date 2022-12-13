import './App.css';
import Container from './component/Container/Container';
import Header from './component/Header/Header';
import Navigation from './component/Nav/Navigatoin';

const App = () => {
  return (
    <div id='home'>
      <Header/>
      <Navigation/>
      <Container/>
    </div>
  );
}

export default App;
