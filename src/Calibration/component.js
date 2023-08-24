import { Button, Form } from "react-bootstrap";

function Calibration() {
  return (
    <Form className='calibration'>
      <Form.Group className='xfields'>
        <Form.Label htmlFor='xfields'>X</Form.Label>
        <Button className='increase'>+</Button>
        <Button className='decrease'>-</Button>
        <Form.Control type='text' className='value' value='Current Value' readOnly plaintext/>
      </Form.Group>
      <Form.Group className='yfields'>
        <Form.Label htmlFor='yfields'>Y</Form.Label>
        <Button className='increase'>+</Button>
        <Button className='decrease'>-</Button>
        <Form.Control type='text' className='value' value='Current Value' readOnly plaintext/>
      </Form.Group>
      <Form.Group className='zfields'>
        <Form.Label htmlFor='zfields'>Z</Form.Label>
        <Button className='increase'>+</Button>
        <Button className='decrease'>-</Button>
        <Form.Control type='text' className='value' value='Current Value' readOnly plaintext/>
      </Form.Group>
    </Form>
  )
}

export default Calibration;