function uploadReducer(state = { image: null, ext: null }, action){
  switch (action.type) {
    case "UPLOAD_IMAGE":
      return Object.assign({}, state, {
        image: action.image,
        ext: action.ext
      })
    default:
      return state
  }
}

export default uploadReducer;
