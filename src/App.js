import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <div>
      <BrowserRouter className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
