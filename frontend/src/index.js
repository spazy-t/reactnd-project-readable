import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import middleware from './middleware'
import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

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
