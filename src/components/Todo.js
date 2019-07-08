import { List, Button, Typography } from 'antd'
import React from 'react'

const { Text } = Typography
export const Todo = ({ arrayTodo, handleClickText, handleClick }) => {
  return (
    <List
      dataSource={arrayTodo}
      renderItem={item => (
        <List.Item
          actions={[
            <Button type="primary" onClick={handleClickText(item)}>
              Сделано
            </Button>,
            <Button type="primary" onClick={handleClick(item)}>
              Удалить
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={
              <span onClick={handleClickText(item)}>
                {item && item.completed ? (
                  <Text delete> {item.data} </Text>
                ) : (
                  <Text> {item.data} </Text>
                )}
              </span>
            }
          />
        </List.Item>
      )}
    />
  )
}
