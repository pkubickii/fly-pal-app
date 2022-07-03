import React from 'react'
import PropTypes from 'prop-types'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import AddCity from '../components/AdminPanel'

const Profile = () => {
    const { username, email, role, auth } = useContext(UserContext)

    return (
        <>
            <div className="bg-primary pt-3">
                {auth ? (
                    <div className="mx-9 p-5 card bg-info text-dark">
                        <p className="h4">name: {username}</p>
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
            </div>
        </>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    email: PropTypes.string,
}

export default Profile
