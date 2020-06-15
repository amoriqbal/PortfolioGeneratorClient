import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PortfolioRouter from './Components/PortfolioRouter'
import HomeRouter from './Components/HomeRouter'
function App() {
  
  return(
    <Router>
      <Switch>
        <Route path="/portfolio" component={PortfolioRouter}/>
        <Route path="/" component ={HomeRouter}/>
      </Switch>
    </Router>
  )
}

export default App;
