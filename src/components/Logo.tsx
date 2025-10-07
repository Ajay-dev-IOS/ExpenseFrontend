import { Link } from "react-router-dom"
import itunes from "../assets/itunes.png"
Link
const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img src={itunes} alt="Logo" width={48} height={48} className="rounded-circle"/>
    </Link>
  )
}

export default Logo
