import './App.css';
import { Row, Col } from 'antd'
import Details from './components/Details/Details'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={8}>
          <Details title="Income" />
        </Col>
        <Col span={8}>
          <Main />
        </Col>
        <Col span={8}>
          <Details title="Expense" />
        </Col>
      </Row>
    </div>
  );
}

export default App;
