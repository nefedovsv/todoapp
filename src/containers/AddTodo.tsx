import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { observable } from "mobx";
import { Input, Icon, Button, Form } from 'antd'
import { ITodoModification } from '../models/ITodoModificationSchema'
interface AddTodoProps {
  todoModification?: ITodoModification
}
@inject('todoModification')  
@observer
export class AddTodo extends React.Component<AddTodoProps>{
   @observable
      value: string = "";
        render(){
        return(    
      <Form
        layout="inline"
               onSubmit={this.onSubmit}
      >
       <Form.Item>
          <Input
            value={this.value}
            onChange={this.onChange}
            placeholder="here is yours TODO"
            prefix={
                <Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </Form>)
  }
  onChange = (e:React.FormEvent<HTMLInputElement>): void => {
    this.value = e.currentTarget.value;
  };
  onSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
   const {addTodo} = this.props.todoModification!;
   addTodo(this.value);
   this.value = "";
     };
}


