import React from 'react'
import Modal from 'react-modal'
import './index.css'
import CLOSE from 'assets/close.png'

const customStyles = {
  content: {
    width: '260px',
    background: '#FFFFFF',
    padding: 0,
    borderRadius: '4px',
    border: 'none',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.60)',
  },
}

export class FeedbackModal extends React.Component {
  render() {
    const {
      isOpen,
      closeModal,
      logo,
      text,
      footerText,
      onClick,
      showCloseIcon,
      texts,
    } = this.props

    return (
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="modal-header">
          {showCloseIcon && <img src={CLOSE} alt="" onClick={closeModal} />}
        </div>
        <div className="modal-logo">
          <img src={logo} alt="" />
        </div>

        <div className="modal-content">
          {texts.map(x => (
            <div key={x}>{x}</div>
          ))}
        </div>
        <div className="modal-footer" onClick={onClick}>
          {footerText}
        </div>
      </Modal>
    )
  }
}
