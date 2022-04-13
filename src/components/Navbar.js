import React, { useState} from "react";
import { Link } from "react-router-dom";


export const Navbar = ({ isLoggedIn, Logout }) => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  

  return (
    <nav>

        <div>
          <Link to="/">
            A box of Questions!
          </Link>
        </div>

        <div>
          {!isLoggedIn ? (
            <>
              <Link to="/register">
                Sign up
              </Link>
              <Link to="/login">
                Log in
              </Link>
            </>
          ) : (
          <>
          <div>
            <div onClick={toggleNav}>
              Menu
            </div>
              {(toggleMenu && (
            <div>
              <div>
              <Link to='/userquestions'>My Questions</Link>
            </div>
            <div>
              <Link to="/useranswers">My Answers</Link>
              </div>
            </div>
              )
              )}
              </div>
            <Link to="/logout" onClick={Logout}>
              Log Out
            </Link>
            </>
          )}
        </div>

    </nav>
  )
}