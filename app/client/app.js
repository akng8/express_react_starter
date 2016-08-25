import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { createStore} from 'redux'
import reducers from './reducers'
import {Router , Route , hashHistory} from 'react-router'
import App from './containers/app.jsx'
import About from './components/modules/about.jsx'

let store = createStore(reducers)
render((
	<Provider store = {store}>
	<Router history = {hashHistory}>
		<Route path = "/" component = {App} />
		<Route path = "/about" component = {About}/>
	</Router>
	</Provider>

) , document.getElementById('app'));
