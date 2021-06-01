import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

const Modal = ({children}) => {
    const portalNode = document.createElement("div");

    useEffect(() => {
        document.body.appendChild(portalNode)
        return () => {
            portalNode.remove()
        }
    }, [portalNode])

    return ReactDOM.createPortal(children, portalNode)

}

export default Modal