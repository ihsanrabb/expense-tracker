import { useContext } from 'react'
import { List, Avatar } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { ExpenseTrackerContext } from '../../../context/context'

const ListExpense = () => {
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext)

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={transactions}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<span>{item.category}</span>}
              description={`${item.amount} - ${item.date}`}
            />
            <DeleteOutlined onClick={() => deleteTransaction(item.id)}/>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ListExpense