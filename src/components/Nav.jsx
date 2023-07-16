import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <h5>ARCHITECT</h5>
      </Link>
      <ul>
        <CustomLink to="/Main">home</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Slide">Work</CustomLink>
        <CustomLink to="/Project">Project</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
