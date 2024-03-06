import ListOfGifs from "./components/ListOfGifs";
import "./App.css";
import { Link, Route, Switch } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "sin provicer",
        status: false
      }}
    >
      <div className='App'>
        <header className='App-content'>
          <Link to='/'>
            <h1>App</h1>
          </Link>
          <Link to='/search/dark'>Dark</Link>
          <Link to='/search/blue'>blue</Link>
          <Link to='/search/green'>green</Link>
          <GifsContextProvider>
            <Switch>
              <Route path='/' component={Home} />
              <Route path='/search/:keyword' component={ListOfGifs} />
              <Route path='/gif/detail/:id' component={Detail} />
            </Switch>
          </GifsContextProvider>
        </header>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
