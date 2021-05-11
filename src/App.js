import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";

function App() {
  return (
    <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.5.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
    <Router>
       <div className="App">
        <Switch>
          <Route path="/About">
            <Header />
            <About />
          </Route>
          <Route path="/Projects">
            <Header />
            <Projects />
          </Route>
          <Route path="/Resume">
            <Header />
            <Resume />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch> 
       </div>
    </Router>
  );
}

export default App;
