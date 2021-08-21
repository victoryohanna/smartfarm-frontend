import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/farmerDashboard.css";
import Footer from "../footer/footer"

import CropList from "./crops";
import NewProduct from "./addProduct";
// import Preserve from "../farmers/storage";
import EditProduct from "./editProduct";   
// import StorageTips from "./productStorageTips";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDashboard: true,
      isNewProduct: false,
      isProducts: true,
      isPreserve: false,
      isTransactions: false,
      user: "",
    };
    this.showProducts = this.showProducts.bind(this);
    this.showNewProduct = this.showNewProduct.bind(this);
    // this.showPreserve = this.showPreserve.bind(this);
    this.showEditProduct = this.showEditProduct.bind(this);
    this.showStorageTips = this.showStorageTips.bind(this);
  }
  showProducts = () => {
    this.setState({
      isProducts: true,
      isNewProduct: false,
      isStorage: false,
      isEdit: false,
      user: localStorage.getItem("user"),
    });
  };
  showNewProduct = () => {
    this.setState({
      isProducts: false,
      isPreserve: false,
      isEdit: false,
      isNewProduct: true,
    });
  };

  showStorageTips = () => {
    this.setState({
      isProducts: false,
      isEdit: false,
      isNewProduct: false,
      isStorage: true,
    });
     this.props.history.push("/storage")
  };

  showEditProduct = () => {
    this.setState({
      isProducts: false,
      isNewProduct: false,
      isPreserve: false,
      isEdit: true,
    });
  };

  render() {
    return (
      <>
      <div className="container">
        <div className="row">
          {this.state.isDashboard && (
            <aside className="col-sm-4 mt-1">
              <div className="card card-filter">
                <header className="card-header">
                  <a
                    className=""
                    aria-expanded="true"
                    href="/"
                    data-toggle="collapse"
                    data-target="#collapse22"
                  >
                    <i className="icon-action fa fa-chevron-down"></i>
                    <h6 className="title">Quick Links</h6>
                  </a>
                </header>
                <div className="filter-content collapse show" id="collapse22">
                  <div className="card-body aside">
                    <form className="pb-6">
                      <div className="input-group">
                        <input
                          className="form-control"
                          placeholder="Search"
                          type="text"
                          name="searchItem"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-filter" type="button">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                    <ul className="list-unstyled list-lg">
                      <li>
                        <button
                          className="btn-link"
                          onClick={this.showProducts}
                          
                        >
                          All Crops
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn-link"
                          onClick={this.showNewProduct}
                        >
                           Add Crop
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn-link"
                          onClick={this.showEditProduct}
                        >
                          Edit Crop
                        </button>
                      </li>
                      <button
                          className="btn-link"
                          onClick={this.showStorageTips}
                        >
                          Delete Crop
                        </button>
                      <li>
                        <Link
                          to="/settings"
                          className="link d-flex justify-content-center"
                        >
                          Settings
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          )}
          {this.state.isProducts && (
            <div className="col-md">
             
              <CropList />
            </div>
          )}
          {this.state.isNewProduct && (
            <div className="col-md">
             
              <NewProduct />
            </div>
          )}
          {this.state.isStorage && (
            <div className="col-md-8 mt-5">
              <h1>Comming Soon!!!!</h1>
              {/* <Preserve /> */}
            </div>
          )}
          {this.state.isEdit && (
            <div className="col-md-8 mt-5">
              
              <EditProduct />
            </div>
          )}
        </div>
      </div>
      <div className="section-footer">
        <Footer />
      </div>
      </>
    );
  }
}

export default Admin;
