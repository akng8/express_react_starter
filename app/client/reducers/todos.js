"use strict";

/*import { ADD_TODO , DELETE_TODO , EDIT_TODO , COMPLETE_TODO , COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = [
	{
		text : 'Use Redux',
		completed: false,
		id: 0
	}
]
*/
const todo = (state = {} , action) => {
	switch(action.type) {
		case "ADD_TODO" :
			return {
				id : action.id,
				text : action.text,
				completed : false
			}

		case "TOGGLE_TODO" :
			if(state.id !== action.id) {
				return state
			}

			return Object.assign({} . state, {
				completed : !state.completed
			})

		default :
			return state
	}
}

const todos = (state = [] , action) => {
	switch(action.type) {
		case "ADD_TODO" :
			return [
				...state, todo(undefined , action)
			]

		case "TOGGLE_TODO" :
			return state.map(t=>
				todo(t,action)
			)

		default :
			return state
	}
}

export default todos
