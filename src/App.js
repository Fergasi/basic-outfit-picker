import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Picker from "./Components/Picker";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Picker />
      <Footer />
    </div>
  );
}

export default App;
