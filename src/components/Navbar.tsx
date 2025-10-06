import { FaBars } from "react-icons/fa"
import Logo from "./Logo"


const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-lg  " >
  <div className="container">
    <Logo/>
    
    
    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
    <div className="d-flex">
      <button className="btn btn-sm btn-outline-light mx-1">Login</button>
      <button className="btn btn-sm btn-outline-light mx-1">Logout</button>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <FaBars color="white"/>
    </button>
    </div>
  </div>
  
</nav>
  )
}

export default Navbar
