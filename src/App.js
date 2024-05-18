import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import store from "./app/Store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppNavbar />
        <AppRouter />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
