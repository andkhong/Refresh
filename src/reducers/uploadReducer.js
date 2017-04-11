function uploadReducer(state = {}, action){
  switch (action.type) {
    case "UPLOAD_IMAGE":
      return Object.assign({}, state, {
        image: action.image,
        mimetype: action.mimetype
      })
    default:
      return state
  }
}

export default uploadReducer;
