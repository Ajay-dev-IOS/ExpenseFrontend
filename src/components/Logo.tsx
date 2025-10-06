import itunes from "../assets/itunes.png"

const Logo = () => {
  return (
    <a className="navbar-brand" href="#">
      <img src={itunes} alt="Logo" width={48} height={48} className="rounded-circle"/>
    </a>
  )
}

export default Logo
