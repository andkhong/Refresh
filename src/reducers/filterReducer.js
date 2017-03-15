const defaultState = {
  style: {
    width: '500px',
    height: '500px',
    filter: ''
  },
  filters: {
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    'hue-rotate': 0,
    invert: 0,
    opacity: 100,
    sepia: 0,
    saturate: 100
  }
};

function filterReducer(state = defaultState, action){
  switch (action.type) {
    case "SET_FILTER":
      let type = action.filter.type;
      let value = action.filter.value;
      return handleFilter(state, type, value);
    case "RESET_FILTER":
      type = action.filter;
      value = defaultState.filters[type];
      return handleFilter(state, type, value);
    case "RESET_IMAGE_FILTER":
      return defaultState;
    default:
      return state;
  }
}

function handleFilter(state, type, value){
  const clone = {};
  clone[type] = value;
  const newFilter = Object.assign({}, state.filters, clone);
  const filteredString = buildFilterString(newFilter);
  const newStyle = Object.assign({}, state.style, { filter: filteredString });
  return Object.assign({}, state, {
    style: newStyle,
    filters: newFilter
  });
}

function buildFilterString(object){
  let result = '';
  for(let key in object){
    result = result + ' ' + key + '(' + object[key];
    if(key === 'blur') result+= 'px)';
    else if(key === 'hue-rotate') result+= 'deg)';
    else result += '%)';
  }
  return result;
}

export default filterReducer;
