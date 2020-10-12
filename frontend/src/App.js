import React, { useEffect } from 'react'
import { handleInitData } from './actions/shared'
import { connect } from 'react-redux'
import CatList from './containers/CatList'

function App(props) {

  //uses hooks to get initial data when app mounts
  useEffect(() => {
    props.dispatch(handleInitData())
  })

  return (
    <div className="App">
      <header className="App-header">Header</header>
      <CatList />
    </div>
  )
}

export default connect()(App)
