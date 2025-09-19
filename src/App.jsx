
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faHouse } from '@fortawesome/free-regular-svg-icons'
import { Button } from 'react-bootstrap'

function App() {


  return (
    <>
      <h1>Book Store</h1>
    <FontAwesomeIcon icon={faHouse} />
       <Button variant="primary">Primary</Button>
    </>
  )
}

export default App
