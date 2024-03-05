import './App.css'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import Counter from './Components/Counter'

function App() {


  return (
    <>
    <h1>Counter App</h1>

      <div className='container mt-5 p-5 shadow'>
        <Counter/>        
      </div>

    </>
  )
}

export default App
