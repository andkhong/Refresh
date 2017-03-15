function uploadReducer(state = { image: null }, action){
  switch (action.type) {
    case "UPLOAD_IMAGE":
      return Object.assign({}, state, {
        image: action.image
      })
    default:
      return state
  }
}

export default uploadReducer;
