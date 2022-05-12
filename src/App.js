import Header from "./components/Header/Header";
import Footer from "./components/Footer/FOOTER";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
    <h1> Mi primera app </h1>
    <Header/>
    <ItemListContainer greeting={"hola, hola, hola"}/>
    <Footer/>
    </div>
  ); 
}

export default App;
