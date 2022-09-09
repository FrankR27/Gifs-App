import SearchGifs from "./compotents/SearchGifs";
import { Route } from "wouter";
import Home from "./pages/Home/index";
import Detail from "./pages/Detail/index";
import { GifsContextProvider } from "./context/GifsContext";
import "./App.css";

function App() {
  return (
    <GifsContextProvider>
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchGifs} />
        <Route path="/gif/:id" component={Detail} />
      </div>
    </GifsContextProvider>
  );
}

export default App;
