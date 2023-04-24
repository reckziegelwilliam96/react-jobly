import { BrowserRouter } from "react-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
