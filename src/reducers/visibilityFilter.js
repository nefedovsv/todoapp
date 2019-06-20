import * as filters from '../constants/constants'
const initialState = filters.VISIBILITY_FILTERS.ALL
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case filters.SET_FILTER: {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}
export default visibilityFilter
