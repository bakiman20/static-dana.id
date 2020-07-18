import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch, Redirect } from 'react-router-dom'
import 'styles/App.scss'

import Home from 'containers/Home'
import Contact from 'containers/Contact'
import About from 'containers/About'
import Header from 'components/Header'
import Footer from 'components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
