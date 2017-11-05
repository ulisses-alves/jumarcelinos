import { Link } from 'inferno-router'
import style from './style.styl'

export function Navigation(props) {
  return (
    <nav className={`${style.container} ${props.className}`}>
      <ul>
        <li>
          <Link to="/" activeClassName={style.active}>Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}