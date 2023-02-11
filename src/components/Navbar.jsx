import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

// changing css of mui Appbar, Navlink using styled component

const Header = styled(AppBar)`
  background: #111111;
  color: #20b2aa;
`;

const Tab = styled(NavLink)`
  background: #111111;
  color: #20b2aa;
  margin-right: 30px;
  text-decoration: none;
  :hover {
    color: #ffffff;
  }
`;

const Navbar = () => {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Tab to="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CRUD App
            </Typography>
          </Tab>

          <Tab to="/allusers">All Users</Tab>
          <Tab to="/adduser">Add User</Tab>
        </Toolbar>
      </Header>
    </div>
  );
};

export default Navbar;
