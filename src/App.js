import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PortfolioRouter from './Components/Portfolio/PortfolioRouter'
import HomeRouter from './Components/Home/HomeRouter'
import MetaDataForm from './Components/Home/MetaDataForm'
function App() {
  
  return(
    <Router>
      <Switch>
        <Route path="/portfolio" component={PortfolioRouter}/>
        <Route path="/edit">
          <MetaDataForm/>
        </Route>
        <Route path="/" component ={HomeRouter}/>
      </Switch>
    </Router>
  )
}

export default App;
