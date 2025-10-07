import { FaBars } from "react-icons/fa"
import Logo from "./Logo"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-lg  " >
  <div className="container">
    <Logo/>
    
    
    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " to="/">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/new">New Expenses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Reports">Reports</NavLink>
        </li>
      </ul>
    </div>
    <div className="d-flex">
      <NavLink className="btn btn-sm btn-outline-light mx-1" to = '/login'>Login</NavLink>
      <NavLink className="btn btn-sm btn-outline-light mx-1" to = '/register'>Register</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <FaBars color="white"/>
    </button>
    </div>
  </div>
  
</nav>
  )
}

export default Navbar
