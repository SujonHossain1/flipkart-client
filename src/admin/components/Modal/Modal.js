import { Button, Modal } from 'react-bootstrap';

const ModalComponent = ({ show, handleClose, children }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalComponent;
