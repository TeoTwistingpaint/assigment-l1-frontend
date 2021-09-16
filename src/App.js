import Home from "./Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            {/*<Route path="*">
              <NotFound />
            </Route>*/}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
