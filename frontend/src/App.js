import React, { useEffect } from 'react'
import { handleInitData } from './actions/shared'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
/**
 * components
 */
import CatList from './containers/CatList'
import CatScreen from './screens/CatScreen'
import AddPost from './containers/AddPost'
import PostDetails from './containers/PostDetails'

function App(props) {
  //uses hooks to get initial data when app mounts
  useEffect(() => {
    props.dispatch(handleInitData())
  })

  return (
    <div className="App">
      <header className="App-header">Header</header>
      <Route exact path='/' component={ CatList } />
      <Route exact path='/:category' component={ CatScreen } />
      <Route path='/newPost/:category' component={ AddPost } />
      <Route path='/:category/:post_id' component={ PostDetails } />
    </div>
  )
}

export default connect()(App)
