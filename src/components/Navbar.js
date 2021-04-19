import NavItem from './NavItem';
import '../component-styles/Navbar.css';

function Navbar() {
    return (
      <nav>
        <ul>
          <NavItem item="My React Comments Grabber" tolink="/" ></NavItem>
          <NavItem item="Map" tolink="/map" ></NavItem>
          <NavItem item="Edit" tolink="/edit" ></NavItem>
          <NavItem item="About" tolink="/about" ></NavItem>
          <NavItem item="Comments" tolink="/comments" ></NavItem>
        </ul>
      </nav>
    )
}


export default Navbar