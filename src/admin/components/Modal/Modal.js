import { Button, Modal } from 'react-bootstrap';

const ModalComponent = ({ show, handleClose, children, title, size }) => {
    return (
        <Modal show={show} onHide={handleClose} size={size}>
            <Modal.Body>
                <h5> {title} </h5>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="btn-sm" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComponent;
