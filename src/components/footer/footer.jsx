import React, { Component } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (  
      <div className=" d-flex justify-content-center pt-4 my-md-5 pt-md-5 footer ">
        <div className="row row-footer ">
          <div className="col-12 col-md">
            <small className="-block mb-3 text-muted">&copy; 2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to="/" className="text-muted">
                  Team
                </Link>
              </li>

              <li>
                <Link to="/" className="text-muted">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to="/" className="text-muted">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md ">
            <h5>Follow Us</h5>
            <ul className="list-unstyled text-small">
              <li>  
                <Link
                  to="/"
                  target="_blank"
                  className="footer-img"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  to="/"    
                  target="_blank"
                  className="footer-img"
                >
                  <FaTwitter />
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  target="_blank"
                  className="footer-img"
                >
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
