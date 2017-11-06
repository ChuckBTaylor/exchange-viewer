import { withRouter } from 'react-router-dom'
import React from 'react'
// this also works with react-router-native

const TestButton = withRouter(({ history}) => (
  <button
    type='button'
    onClick={() => { history.push('/DKK') }}
  >
    Click Me!
  </button>
))

export default TestButton
