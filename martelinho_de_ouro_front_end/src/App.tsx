import ReactModal from "react-modal";
import "./App.css";
import { RouterMain } from "./Routes";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Context/AuthContext";
import "react-toastify/dist/ReactToastify.min.css";
import ServiceProvider from "./Context/serviceContext";

function App() {
  ReactModal.setAppElement("#root");
  return (
    <div className="app">
      <AuthProvider>
        <ServiceProvider>
          <RouterMain />
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ServiceProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
