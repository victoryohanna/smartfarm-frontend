import React, { Component } from "react";
// import FacebookLogin from "react-facebook-login";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "../../styles/login.css";
import Footer from "../footer/footer";
import AuthService from "../../services/auth.service";

const URL = "http://localhost:5000/";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      inValid: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    AuthService.login(this.state.email, this.state.password).then(
      (response) => {
        if (response.status === 200) {

            this.props.history.push("/dashboard")

          this.setState({
            email: "",
            password: "",
          });

          
        }
      }
    );
  };

  render() {
    const valide = this.state.inValid;
    return (
      <>
      
          <div className="card mx-auto loginCard">
            
            <div className="card-body">
              <form type="form" onSubmit={this.handleSubmit}>
                <span>{valide}</span>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr />
          <div className="section-footer">
            <Footer />
          </div>
        
      </>
    );
  }
}

export default withRouter(Login);
