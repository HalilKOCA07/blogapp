import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import store from "./app/Store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>

        <Provider store={store}>
          <AppRouter />
        </Provider>
        <ToastContainer />

    </>
  );
}

export default App;
