import * as React from "react";
import { visibility } from "../../constants/constants";
import { Button } from "antd";
import { inject, observer } from "mobx-react";
import { ITodoModification } from "../../interfaces/ITodoModificationSchema";

interface FiltersProps {
  todoModification?: ITodoModification;
}

@inject("todoModification")
@observer
export class Filters extends React.Component<FiltersProps> {
  render() {
    return visibility.map((item, index) => {
      return (
        <div style={{ marginLeft: "10px" }} key={index}>
          <Button type="primary" onClick={this.onClick}>
            {item}
          </Button>
        </div>
      );
    });
  }

  onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    let currentFilter = e.currentTarget.innerText;
    const { setFilter } = this.props.todoModification!;
    setFilter(currentFilter);
  };
}
