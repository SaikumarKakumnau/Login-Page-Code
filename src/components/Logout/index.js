// Write your code here
import './index.css'

const Logout = props => {
  const {logOut} = props
  return (
    <button type="button" className="button" onClick={logOut}>
      Logout
    </button>
  )
}

export default Logout
