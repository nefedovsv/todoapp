import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../action/todo'
import * as filters from '../constants/constants'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'

const Filters = inject('mobxStore')(
  observer(({ setFilter, mobxStore }) => {
    const visibility = [
      filters.VISIBILITY_FILTERS.ALL,
      filters.VISIBILITY_FILTERS.COMPLETED,
      filters.VISIBILITY_FILTERS.INCOMPLETE,
    ]
    return visibility.map((item, index) => {
      return (
        <div style={{ marginLeft: '10px' }} key={index}>
          <Button
            type="primary"
            onClick={e => {
              let currentFilter = e.currentTarget.innerText
              setFilter(currentFilter)
              // mobxStore.setFilter(currentFilter)
              // console.log(mobxStore.actualfilter)
            }}
          >
            {item}
          </Button>
        </div>
      )
    })
  })
)

export default connect(
  null,
  { setFilter }
)(Filters)