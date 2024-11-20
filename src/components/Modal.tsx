import React from 'react'

import ReactDOM from 'react-dom';

const Modal = (props: ModalProps) => {
  return ReactDOM.createPortal(
    <div id={props.id} role="dialog" aria-modal="true" className="modal">
      <div className="modal-content">
            {props.children}
        </div>
    </div>,
    document.body
  );
};

type ModalProps = {
    children: any;
    id: string;
}

export default Modal
