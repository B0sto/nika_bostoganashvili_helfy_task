import "../styles/Modal.css"
import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client"

const Modal = ({ isOpen, onClose, children }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const id = requestAnimationFrame(() => {
            setShow(true);
        })

        return () => cancelAnimationFrame(id);
    }, [isOpen])

    if (!isOpen) return null;
    return (
        <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
            <div className='modalChildren' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}


export function openModal(Component, props = {}) {
    const host = document.createElement("div");
    document.body.appendChild(host);

    const root = ReactDOM.createRoot(host);

    const close = () => {
        root.unmount();
        host.remove();
    }

    root.render(
        <Modal isOpen={true} onClose={close}>
            <Component {...props} closeModal={close} />
        </Modal>
    )
}