import React from 'react';
import Modal from 'react-modal';

const SelectedModal = (props) =>  (
  <Modal isOpen={!!props.selected} contentLabel="selected item" onRequestClose={props.close} closeTimeoutMS={200} className="modal">
    <h3 className="modal__title">The Dice says</h3>
    {props.selected && <p className="modal__body">{props.selected}</p>}
    <button onClick={props.close} className="button button--add modal__button"> Next </button>
  </Modal>
)

export default SelectedModal;
