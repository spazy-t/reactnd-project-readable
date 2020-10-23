import React, { useEffect } from 'react'
import { handleInitData } from './actions/shared'
import { connect } from 'react-redux'
import {
  Route,
  Switch
} from 'react-router-dom'
/**
 * components
 */
import CatList from './containers/CatList'
import CatScreen from './screens/CatScreen'
import AddPost from './containers/AddPost'
import PostDetails from './containers/PostDetails'
import Nav from './screens/Nav'

function App(props) {
  //TODO: see if changing to class and just using component did mount so only called once? To sort url change reload in edit post form.
  //uses hook to get initial data when app mounts
  useEffect(() => {
    props.dispatch(handleInitData())
  })

  //main component with all required routes
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Switch>
        <Route exact path='/' component={ CatList } />
        <Route exact path='/:category' component={ CatScreen } />
        <Route exact path='/newpost/:category' component={ AddPost } />
        <Route path='/newpost/:category/:post_id' component={ AddPost } />
        <Route path='/:category/:post_id' component={ PostDetails } />
      </Switch>
      <footer />
    </div>
  )
}

export default connect()(App)
