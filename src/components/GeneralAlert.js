import React from 'react'
import Alert from 'react-bootstrap/Alert'

const GeneralAlert = ({ message }) => {
  GeneralAlert.propTypes = {
    message: String
  }

  if (message === '') {
    return null
  }

  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        {message}
      </p>
    </Alert>
  )
}

export default GeneralAlert
