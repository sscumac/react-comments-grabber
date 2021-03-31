import NavItem from './NavItem';

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
          <NavItem item="User" tolink="/user" ></NavItem>
        </ul>
      </nav>
    )
}


export default Navbar