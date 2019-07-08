import { Input, Tooltip, Icon, Button, Form } from 'antd'
import React from 'react'
import styles from './Styles/InputUserData.module.css'
export const InputUserData = ({ handleSubmit, setText, text }) => {
  return (
    <div className={styles.root}>
      <Form layout="inline" onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            value={text}
            onChange={e => setText(e.currentTarget.value)}
            placeholder="Enter your nickname"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={
              <Tooltip title="It will allow to load the list your TODO">
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Авторизоваться
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
