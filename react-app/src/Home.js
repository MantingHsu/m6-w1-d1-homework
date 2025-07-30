// src/Home.js
import React from "react";
import AppNavbar from "./Navbar";
import { Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <AppNavbar />
      <Container className="text-center mt-5">
        <h1>Welcome to the Inventory App</h1>
        <Button color="primary" onClick={() => navigate("/inventories")} className="mt-4">
          Manage Inventory List
        </Button>
      </Container>
    </div>
  );
}
