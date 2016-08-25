'use strict';

import React , {Component , PropTypes} from 'react'


class MainSection extends Component {

	render() {
		const { todos , actions} = this.props
		
		return(
			<div>
			<h1> Main Section </h1>
			<section className = 'main'>
			
			</section>
			</div>
		)

	}
}

MainSection.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

export default MainSection
