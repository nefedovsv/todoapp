import * as React from 'react'
import * as filters from '../constants/constants'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'
import { ITodoModification } from '../store/mobxStore'
interface FiltersProps {
  todoModification?: ITodoModification
}
@inject('todoModification')  
@observer
export class Filters extends React.Component<FiltersProps>{
  render(){
    return filters.visibility.map((item, index) => {
      return (
        <div style={{ marginLeft: '10px' }} key={index}>
          <Button
            type="primary"
            onClick={this.onClick}
          >
            {item}
          </Button>
        </div>
      )
    })
  }
  onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    let currentFilter = e.currentTarget.innerText
    const {setFilter} = this.props.todoModification!;
    setFilter(currentFilter)
  };
  }
