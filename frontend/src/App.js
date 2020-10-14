import React, { useEffect } from 'react'
import { handleInitData } from './actions/shared'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
/**
 * components
 */
import CatList from './containers/CatList'
import CatScreen from './screens/CatScreen'
import AddPostOrComment from './containers/AddPostOrComment'

function App(props) {
  //uses hooks to get initial data when app mounts
  useEffect(() => {
    props.dispatch(handleInitData())
  })

  return (
    <div className="App">
      <header className="App-header">Header</header>
      <Route exact path='/' component={ CatList } />
      <Route path='/categories/:cat_id' component={ CatScreen } />
      <Route path='/newPost/:cat_id' component={ AddPostOrComment } />
    </div>
  )
}

export default connect()(App)
