import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Content/>
      <NavBar/>
    </div>
  );
}

export default App;
