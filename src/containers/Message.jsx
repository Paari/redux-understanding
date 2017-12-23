import React from "react"
import { connect } from "react-redux"
import getVisibleTodos from '../reducers'
import { getMessage } from "../actions"
import App from "../App";

const mapStateToProps = (state) => {
  return {
    message: getVisibleTodos(state)
  }
}

const Message = (props) => (
  <App {...props} />
)

const VisibleTodoList = connect(
  mapStateToProps
)(Message)

export default VisibleTodoList