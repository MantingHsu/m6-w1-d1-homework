// src/InventoryEdit.js
import React, { Component } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import AppNavbar from "./Navbar";
import { withRouter } from "./withRouter";

class InventoryEdit extends Component {
  emptyItem = { name: "", quantity: "", price: "", category: "" };

  constructor(props) {
    super(props);
    this.state = { item: this.emptyItem };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.params.id !== "new") {
      const response = await fetch(`http://localhost:8080/api/inventory/${this.props.params.id}`);
      const data = await response.json();
      this.setState({ item: data });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    const item = { ...this.state.item, [name]: value };
    this.setState({ item });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;

    await fetch("http://localhost:8080/api/inventory", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });

    this.props.navigate("/inventories");
  }

  render() {
    const { item } = this.state;
    const title = item._id ? "Edit Inventory" : "Add Inventory";

    return (
      <div>
        <AppNavbar />
        <Container>
          <h3 className="mt-3">{title}</h3>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="name">Product Name</Label>
              <Input name="name" id="name" value={item.name} onChange={this.handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="quantity">Quantity</Label>
              <Input name="quantity" id="quantity" value={item.quantity} onChange={this.handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input name="price" id="price" value={item.price} onChange={this.handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input name="category" id="category" value={item.category} onChange={this.handleChange} required />
            </FormGroup>
            <Button type="submit" color="primary">Save</Button>{" "}
            <Button color="secondary" onClick={() => this.props.navigate("/inventories")}>Cancel</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(InventoryEdit);
