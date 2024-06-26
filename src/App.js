import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import store, { persistor } from "./app/Store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
    </>
  );
}
export default App;
