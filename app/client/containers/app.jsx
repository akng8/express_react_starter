'use strict';
import React , {Component , PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  * as TodoActions from '../actions'
import { Link } from 'react-router'
import MainSection from '../components/MainSection'

/*module.exports = React.createClass({
	render() {
		return (
		<div>
			<h1> React router </h1>
			<h1><Link to="/about">About</Link></h1>
		</div>
		)
	}

});
*/


class App extends Component {

	render() {
		const {todos,actions} = this.props
		return(
			<div>
				<h1> HEY </h1>
				<MainSection todos={todos} actions = {actions} />
			</div>
		);
	}
} 

App.propTypes = {
	todos : PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions : bindActionCreators(TodoActions,dispatch)
	}
}

export default connect(mapStateToProps , mapDispatchToProps)(App)


