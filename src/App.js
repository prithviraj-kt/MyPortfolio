import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import AddProfile from "./components/Dashboard/AddProfile/AddProfile"
import AddExperience from "./components/Dashboard/AddExperience/AddExperience"
import Login from "./components/Dashboard/Login/Login";
import AddProject from "./components/Dashboard/AddProject/AddProject"
import AddDetails from "./components/Dashboard/Profile/Profile";
import EditExperience from "./components/Dashboard/EditExperience/EditExperience";

function App() {
  return (
    <div>
      <BrowserRouter className="App">
        {/* <ClickSidebar/> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/editexperience/:id" component={EditExperience} />
          <Route exact path="/alldetails" component={AddDetails} />

          <Route exact path="/addprofile" component={AddProfile} />
          <Route exact path="/addexperience" component={AddExperience} />
          <Route exact path="/addproject" component={AddProject} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          {/* <Route exact path="/dashboard" component={Navbar} /> */}
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
