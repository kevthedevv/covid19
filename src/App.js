import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const timeline = 'https://covid19-api-philippines.herokuapp.com/api/timeline';
const summary = 'https://covid19-api-philippines.herokuapp.com/api/summary';
const topRegion = 'https://covid19-api-philippines.herokuapp.com/api/top-regions'

function App() {
  return (
    <div className="app">
      <div className='container'>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
