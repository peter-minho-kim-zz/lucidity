import React from 'react'
import Modal from 'react-modal'

const SignUpModal = (props) => (
  <Modal
    isOpen={false}
    contentLabel="Sign Up Modal"
  >
    <h3>Be the first to try!</h3>
    <p>
      Lucidity is currently in beta efore its upcoming public release. 
      Sign up below to request access and we'll notify you when your account is ready.
    </p>
  </Modal>
)

export default SignUpModal