import { BrowserRouter } from "react-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";

function App() {

  

  return <p> Is Loading...</p>

  return (
    <BrowserRouter>
      <Routes companies={companies} jobs={jobs} company={handle}/>
    </BrowserRouter>
  );
}

export default App;
