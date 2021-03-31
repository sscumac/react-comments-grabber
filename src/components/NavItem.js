import { Link } from "react-router-dom";
import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    return (
      <li>
        <Link to={this.props.tolink}> {/* this a js function and creates a prop called "tolink here*/}
          {this.props.item}
        </Link> 
      </li>
    )
  }
}


export default NavItem