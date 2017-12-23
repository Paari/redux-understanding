export default (state = 0, action) => {
  switch (action.type) {
    case 'MESSAGE':
      return 'this is from action'
  
    default:
      return state
  }
}