import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

//const URL = "http://localhost:4000/";
const URL = "https://smartfarmgig.herokuapp.com/";

class NewProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productCategory: "",
      productName: "",
      productType: "",
      quantity: "",
      userId: "",
      id: "",
      idNum: Number,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addProduct = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = localStorage.getItem("user");
    let product = {
      productId: Math.floor(Math.random() * 100000) + 1,
      userId: id,
      productCategory: this.state.productCategory,
      productName: this.state.productName,
      productType: this.state.productType,
      quantity: this.state.quantity,
    };

    //post product
    axios.post(URL + "product", product).then((data) => {
      if (data) {
        this.setState({
          productCategory: "",
          productName: "",
          productType: "",
          quantity: "",
        });
      }
    });
  };

  render() {
    return (
      
          <div className="mx-auto mt-3">
            <h4>Add New Crop</h4>
            <form type="form" className="form" onSubmit={this.addProduct}>
              <div className="row">
              <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cropName"
                      value={this.state.cropName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label >Title</label>
                    <select
                      className="form-control"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    >
                      <option>Select</option>
                      <option>Land Preparation</option>
                      <option>Seed planting</option>
                      <option>Seed planting</option>
                      <option>Manure/Fertilize</option>
                      <option>Weeding</option>
                      <option>Harvesting</option>
                      <option>Storage</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12 mx-auto">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      type="textarea"
                      row="10"
                      className="form-control"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        
    );
  }
}

export default withRouter(NewProduct);
