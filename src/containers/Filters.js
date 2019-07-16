import React from 'react'
import * as filters from '../constants/constants'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'
export const Filters = inject('todoModification')(
  observer(({ todoModification }) => {
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
              todoModification.setFilter(currentFilter)
            }}
          >
            {item}
          </Button>
        </div>
      )
    })
  })
)
