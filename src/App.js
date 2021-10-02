import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Portfolio from "./Components/Portfolio"
import NotFound from "./Components/NotFound"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route component={NotFound}/>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
