import React from 'react'
import './ModalFooter.css'

const BarriosFooter = () => {
    return (
        <div className="modal-footer">

            <>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    MOVER BARRIOS
                </button>
            </>

            <>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    SALIR
                </button>
            </>

        </div>
    )
}

export default BarriosFooter