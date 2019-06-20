import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../action/setFilter'
import * as filters from '../constants/constants'
const Filters = ({ setFilter }) => {
  const visibility = [
    filters.VISIBILITY_FILTERS.ALL,
    filters.VISIBILITY_FILTERS.COMPLETED,
    filters.VISIBILITY_FILTERS.INCOMPLETE,
  ]
  return visibility.map((item, index) => {
    return (
      <button
        key={index}
        onClick={e => {
          let currentFilter = e.currentTarget.innerText
          setFilter(currentFilter)
        }}
      >
        {item}
      </button>
    )
  })
}
export default connect(
  null,
  { setFilter }
)(Filters)
