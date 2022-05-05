import Navbar from "./components/Navbar/NAVBAR";
import Footer from "./components/Footer/FOOTER";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
    <h1> Mi primera app </h1>
    <Navbar/>
    <ItemListContainer greeting={"hola, hola, hola"}/>
    <Footer greeting= {"Aca estamos"}/>
    </div>
  ); 
}

export default App;
