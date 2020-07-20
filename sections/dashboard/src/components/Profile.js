import React from 'react'
import {Link} from 'gatsby'
import {useIdentityContext} from 'react-netlify-identity'

const Profile = ({showModal}) => {
  const identity = useIdentityContext()
  console.log(identity)
  const isLoggedIn = identity && identity.isLoggedIn
  const name =
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.full_name

  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link to="/dashboard/secret" activeClassName="active">
            Secret Stuff
          </Link>
          <Link to="/dashboard/base" activeClassName="active">
            see your base
          </Link>
        </nav>
        <span>
          Logged in as {name}.
          <br />
          <button onClick={showModal}>log out</button>
        </span>
      </div>
    )
  )
}
export default Profile
