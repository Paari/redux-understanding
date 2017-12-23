import React from "react"
import { connect } from "react-redux"
import { getMessage } from "../actions"
import App from "../App";

const mapStateToProps = (state) => {
  return {
    message: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStore: () => {
      dispatch(getMessage())
    }
  }
}

const Message = (props) => (
  <App {...props} />
)

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message)

export default VisibleTodoList