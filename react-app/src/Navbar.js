// src/Navbar.js
import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default function AppNavbar() {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Inventory App</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/inventories">Inventory List</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
