export const SET_FILTER = "SET_FILTER";
export function updateFilter(filter){
  return {
    type: SET_FILTER,
    filter
  }
}

export const RESET_FILTER = "RESET_FILTER";
export function resetFilter(filter){
  return {
    type: RESET_FILTER,
    filter
  }
}

export const RESET_IMAGE_FILTER = "RESET_IMAGE_FILTER";
export function resetImage(){
  return {
    type: RESET_IMAGE_FILTER
  }
}
