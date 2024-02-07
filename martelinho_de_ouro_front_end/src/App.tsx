import ReactModal from "react-modal";
import "./App.css";
import { RouterMain } from "./Routes";

function App() {
  ReactModal.setAppElement("#root");
  return (
    <div className="app">
      <RouterMain />
    </div>
  );
}

export default App;
