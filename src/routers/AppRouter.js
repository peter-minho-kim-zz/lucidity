import React from 'react'
import AddDreamPage from '../components/AddDreamPage'
import DreamsPage from '../components/DreamsPage'
import DashboardPage from '../components/DashboardPage'
import EditDreamPage from '../components/EditDreamPage'
import Header from '../components/Header'
import { HomePage } from '../components/HomePage'
import NotFoundPage from '../components/NotFoundPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const AppRouter = () => (
  <BrowserRouter>
    <div className="main-wrapper">
      {/* Moving star background */}
      <div id="stars1"></div>
      <div id="stars1-2"></div> 
      <div id="stars2"></div>
      <div id="stars2-2"></div>
      <div id="stars3"></div>
      <div id="stars3-2"></div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/dreams" component={DreamsPage} />
        <Route path="/create" component={AddDreamPage} />
        <Route path="/edit/:id" component={EditDreamPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter