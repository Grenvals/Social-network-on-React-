import './index.css'
import * as serviceWorker from './serviceWorker'
import store from './redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

let rerenderEntireThree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}
rerenderEntireThree(store.getState())
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireThree(state)
}) // Подписує subscribe на rerenderEntireThree

serviceWorker.unregister()
