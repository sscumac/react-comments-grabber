import NavItem from './NavItem';
import '../component-styles/Navbar.css';

function Navbar() {
    return (
      <nav>
        <ul>
          <NavItem item="LiveEO" tolink="https://live-eo.com/" ></NavItem>
          <NavItem item="Map" tolink="/map" ></NavItem>
          <NavItem item="Tasks" tolink="/tasks" ></NavItem>
          <NavItem item="Dashboard" tolink="/dashboard" ></NavItem>
          <NavItem item="Comments" tolink="/comments" ></NavItem>
          <NavItem item="Admin" tolink="/admin" ></NavItem>
          <NavItem item="L" tolink="/user" ></NavItem>
        </ul>
      </nav>
    )
}


export default Navbar