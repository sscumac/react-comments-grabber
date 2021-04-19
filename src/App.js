import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import About from './contents/About';
import Comments from './contents/Comments';
import Edit from './contents/Edit';
import Map from './contents/Map';


function App() {

  return (
    <Router>  

      <div className="container">
        <Navbar />

        <Route exact path="/">
          <Comments />
        </Route>

        <Route path="/Comments">
          <Comments />
        </Route>

        <Route path="/About">
          <About />
        </Route>

        <Route path="/Edit">
          <Edit />
        </Route>

        <Route path="/Map">
          <Map />
        </Route>

      </div>
    </Router>
  );
}


export default App;

