import React, { useEffect } from 'react'
import { handleInitData } from './actions/shared'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
/**
 * components
 */
import CatList from './containers/CatList'
import CatScreen from './screens/CatScreen'
import AddPost from './containers/AddPost'
import PostDetails from './containers/PostDetails'
import FourOFour from './screens/FourOFour'

function App(props) {
  //uses hooks to get initial data when app mounts
  useEffect(() => {
    props.dispatch(handleInitData())
  }, [])

  return (
    <div className="App">
      <header className="App-header">Header</header>
      <Switch>
        <Route exact path='/' component={ CatList } />
        <Route exact path='/:category' component={ CatScreen } />
        <Route exact path='/newPost/:category' component={ AddPost } />
        <Route path='/newPost/:category/:post_id' component={ AddPost } />
        <Route path='/:category/:post_id' component={ PostDetails } />
        <Route component={ FourOFour } />
      </Switch>
    </div>
  )
}

export default connect()(App)
