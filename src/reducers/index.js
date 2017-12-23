export default (state = 'Welcome from Redux', action) => {
  console.log('action -> ', action)
  if (action) {
    return 'this is from action'
  }

  return state
}