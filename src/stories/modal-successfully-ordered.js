import React from 'react'
import { FeedbackModal } from '../components'
import SUCCESSFULLY_ORDERED from 'assets/successfully-ordered.png'

export class SuccessfullyOrderedModal extends React.PureComponent {
  state = { modalIsOpen: true }

  openModal = () => this.setState({ modalIsOpen: true })

  closeModal = () => this.setState({ modalIsOpen: false })

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <FeedbackModal
          onClick={this.closeModal}
          logo={SUCCESSFULLY_ORDERED}
          texts={['Your order is confirmed!']}
          footerText="OK"
          isOpen={this.state.modalIsOpen}
          ariaHideApp={false}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}
