import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({
	render() {
		return (
		<div>
			<h1> React router </h1>
			<h1><Link to="/about">About</Link></h1>
		</div>
		)
	}

});
