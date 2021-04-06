import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Game } from './pages/Game/Game'
import { Home } from './pages/Home/Home'
import { Ranking } from './pages/Ranking/Ranking'

/**
 * Enabled routes.
 */
export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </Router>
  )
}
