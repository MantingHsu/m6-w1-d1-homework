// src/InventoryList.js
import React, { Component } from "react";
import { Table, Button, Container } from "reactstrap";
import AppNavbar from "./Navbar";
import { Link } from "react-router-dom";

class InventoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/api/inventories");
    const data = await response.json();
    this.setState({ inventories: data, loading: false });
  }

  async remove(id) {
    await fetch(`http://localhost:8080/api/inventory/${id}`, { method: "DELETE" });
    const updated = this.state.inventories.filter((i) => i._id !== id);
    this.setState({ inventories: updated });
  }

  render() {
    const { inventories, loading } = this.state;

    if (loading) return <p>Loading...</p>;

    const inventoryList = inventories.map((inv) => (
      <tr key={inv._id}>
        <td>{inv.name}</td>
        <td>{inv.quantity}</td>
        <td>{inv.price}</td>
        <td>{inv.category}</td>
        <td>
          <Button tag={Link} to={`/inventory/${inv._id}`} color="warning" size="sm" className="me-2">
            Edit
          </Button>
          <Button color="danger" size="sm" onClick={() => this.remove(inv._id)}>
            Delete
          </Button>
        </td>
      </tr>
    ));

    return (
      <div>
        <AppNavbar />
        <Container className="mt-4">
          <Button color="success" tag={Link} to="/inventory/new" className="mb-3">
            Add Inventory
          </Button>
          <Table striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{inventoryList}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default InventoryList;

