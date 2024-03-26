import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./Routes";
import FooterComponent from "./components/footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <FooterComponent  />  
    </div>
  );
}

export default App;
