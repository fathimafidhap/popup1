
import {Modal,Button} from 'react-bootstrap';
import './Popup.css'

function Popup(props) {
    return (
        <div className="qq">
      <Modal 
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ width: "70%"}}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
     <img   src="https://www.vhplindia.com/images/products/product-1-700x700.jpg" style={{ width: "70%"}} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>



      </div>
    );
  }
  
  export default Popup;