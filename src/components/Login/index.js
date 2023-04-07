// Write your code here

import './index.css'

const Login = props => {
  const {logIn} = props

  return (
    <button type="button" className="button" onClick={logIn}>
      Login
    </button>
  )
}

export default Login
