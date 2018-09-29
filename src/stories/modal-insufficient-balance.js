import React from 'react'
import { Foo } from '../components'
import INSUFFICIENT_BALANCE from 'assets/insufficient-balance.png'

export class InsufficientBalanceModal extends React.PureComponent {
  state = { modalIsOpen: true }

  openModal = () => this.setState({ modalIsOpen: true })

  closeModal = () => this.setState({ modalIsOpen: false })

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Foo
          showCloseIcon
          onClick={this.closeModal}
          logo={INSUFFICIENT_BALANCE}
          texts={['Insufficient balance,', 'Please recharge first!']}
          footerText="Deposit"
          isOpen={this.state.modalIsOpen}
          ariaHideApp={false}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}
