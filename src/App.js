import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
