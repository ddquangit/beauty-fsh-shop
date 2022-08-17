import React from 'react'
import { Modal } from "react-bootstrap";

function LoadingOverlay(props) {
    return (
        <>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                id="loadingModal"
                className="modal fade"
                
            >
                <Modal.Body>
                    <div className="loading-container">
                        <div className='loadding-bar'>
                            <div className="Loaderdot"></div>
                            <div className="Loaderdot"></div>
                            <div className="Loaderdot"></div>
                            <div className="Loaderdot"></div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LoadingOverlay