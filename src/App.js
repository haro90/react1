import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <NavBar className='NavBar'/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      
      <ItemDetailContainer/>
    </div>
  );
}

export default App;