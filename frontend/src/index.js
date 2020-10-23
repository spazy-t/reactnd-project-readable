import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import middleware from './middleware'
import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
//import * as serviceWorker from './serviceWorker'
//TODO: remove service worker in version to be marked

//css
import './styles/main.css'

//creates store fro redux state with combined middleware and combined reducer objects
const store = createStore(reducer, middleware)

//wraps app in store and router
ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
