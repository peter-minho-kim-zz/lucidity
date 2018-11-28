import React from 'react'
import Modal from 'react-modal'

class SignUpModal extends React.Component {
  constructor(props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = {
      formSubmitted: false
    }
  }
  handleFormSubmit(e) {
    e.preventDefault()
    this.setState(({ formSubmitted: true }))
  }
  render() {
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        contentLabel="Sign Up Modal"
        closeTimeoutMS={300}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        handleCloseModal={this.props.handleCloseModal}
      >
        <form className="beta-form" onSubmit={this.handleFormSubmit}>
        {this.state.formSubmitted ? 
          <div className="beta-form__container">
              <p className="beta-form__text u-margin-top-small u-margin-bottom-small">Thank you for signing up. We will notify you when your account is ready.</p> 
              <img src="../images/lucidity-brand.png" className="beta-form__brand u-margin-bottom-small" alt="lucidity-brand"/>
          </div>
            : 
            <div className="beta-form__container">
              <h3 className="beta-form__heading">Lucidity Beta Register</h3>
              <p className="beta-form__text u-margin-bottom-small">Lucidity is currently in beta before its upcoming public release. Sign up below to request access and we'll notify you when your account is ready.</p>
              <input type="email" className="beta-form__input u-margin-bottom-small" placeholder="Your e-mail" required />
              <button className="beta-form__button">
                <i className="fab fa-telegram-plane"></i> Send Request
              </button>
            </div>
          }      
        </form>
        <button onClick={this.props.handleCloseModal} className="beta-form__close"><i className="fas fa-times"></i></button>
      </Modal>
    )
  }
}

export default SignUpModal