import { Divider } from 'antd'
import Form from './Form/Form'
import ListExpense from './List/List'

const Main = () => {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <small>Powered by speechly</small>
      <div>
        <h5>Total Balance $100</h5>
        <p>Try Saying : Add Income for $100</p>
      </div>
      <Divider plain>Input Your Expense</Divider>
      <Form />
      <Divider plain>Your list here</Divider>
      <ListExpense />
    </div>
  )
}

export default Main