import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";
import pf from "petfinder-client";
import { Provider } from "./SearchContext";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopted Me!</Link>
        </header>

        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="/search-params" />
        </Router>

        {/*	<switch>
    <route exact path=’/’ component={Home}/>
    <route path=’/details/:id’ component={Newpost}/>
	    <route path=’/search-params’   component={Post}/>
	</switch>
*/}
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
