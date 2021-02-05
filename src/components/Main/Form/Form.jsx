import { useState, useContext, useEffect } from 'react'
import { Input, Row, Col, Select, Divider, DatePicker, Button } from 'antd'
import { WalletOutlined } from '@ant-design/icons'
import { ExpenseTrackerContext } from '../../../context/context'
import { v4 as uuidv4 } from 'uuid'
import { incomeCategories, expenseCategories } from '../../../constants/categories'

const initialState = {
  type: '',
  category: '',
  amount: null,
  date: ''
}

const Form = () => {
  const [formData, setFormData] = useState(initialState)
  const { addTransaction } = useContext(ExpenseTrackerContext)
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    if(formData.type === 'expense') {
      setSelectedCategories(expenseCategories)
    } else {
      setSelectedCategories(incomeCategories)
    }
  }, [formData.type])

  const createTransaction = (e) => {
    e.preventDefault()
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4()
    }
    addTransaction(transaction)
    setFormData(initialState)
  }

  function onChangeDate(date, dateString) {
    setFormData({...formData, date: dateString})
  }

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Select 
            defaultValue={formData.type} 
            style={{ width: '100%' }} 
            onChange={(val) => setFormData({ ...formData, type: val})}
          >
            <Select.Option value="" disabled>Type</Select.Option>
            <Select.Option value="income">Income</Select.Option>
            <Select.Option value="expense">Expense</Select.Option>
          </Select>
        </Col>
        <Col span={12}>
          <Select 
            defaultValue={formData.category} 
            style={{ width: '100%' }}
            onChange={(val) => setFormData({ ...formData, category: val})}
          >
            <Select.Option value="" disabled>Category</Select.Option>
            {selectedCategories.map(category => (
              <Select.Option key={category.type} value={category.type}>{category.type}</Select.Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Divider dashed />
      <Row gutter={16}>
        <Col span={12}>
          <Input 
            type="number" 
            placeholder="Amount" 
            value={formData.amount}
            prefix={<WalletOutlined />} 
            onChange={(e) => setFormData({ ...formData, amount: e.target.value})}
          />
        </Col>
        <Col span={12}>
          <DatePicker 
            onChange={onChangeDate} 
            style={{ width: '100%' }} 
          />
        </Col>
      </Row>
      <Divider dashed />
      <Button type="primary" block onClick={createTransaction}>
        Create
      </Button>
    </div>
  )
}

export default Form