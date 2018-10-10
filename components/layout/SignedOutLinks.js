import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <li>
                <li><NavLink to='/'>Signup</NavLink></li>
                <li><NavLink to='/'>Logout</NavLink></li>
            </li>
        </ul>
    )
}

export default SignedOutLinks