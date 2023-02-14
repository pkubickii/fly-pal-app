import React from 'react'
import PropTypes from 'prop-types'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import AddCity from '../components/AdminPanel'

const Profile = () => {
  const { username, email, role, auth } = useContext(UserContext)

  return (
    <main className="bg-info">
      {auth ? (
        <div className="mx-9 p-5 card bg-primary mt-5 text-dark">
          <p className="h4">Welcome {username}!</p>
          <p className="h4">Profile info:</p>
          <p className="h4">email: {email}</p>
          <h3> role: {role}</h3>
        </div>
      ) : (
        <div>
          <h2 className="text-danger text-center pt-5">
            You&apos;re not logged in!
          </h2>
        </div>
      )}
      {role === 'admin' && (
        <div className="pt-3">
          <AddCity />
        </div>
      )}
    </main>
  )
}

Profile.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
}

export default Profile
