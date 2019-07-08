import React from 'react'
import { Input, Icon, Button, Form } from 'antd'
export const InputTodo = ({ handleSubmit, setText, text }) => {
  return (
    <div>
      <Form layout="inline" onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            value={text}
            onChange={e => setText(e.currentTarget.value)}
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
      </Form>
    </div>
  )
}
