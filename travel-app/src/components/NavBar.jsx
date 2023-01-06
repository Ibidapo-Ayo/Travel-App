import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../src/index.css";
import "./styles/style.css";
import { FaTelegramPlane } from "react-icons/fa";

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="../../src/assets/images/Logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navBar-Link-ml">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Destination
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tours
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn book-btn" type="submit">
              Book Now <FaTelegramPlane />
            </button>
          </form>
        </div>
      </div>
    </nav>
    {/* // Banner area */}

    <section className="banner-name">
    <div className="container">
    <div className="row d-flex justify-content-between align-items-center">
    <div className="col-md-6">
    <h1 className="banner_title">Discover the Best Lovely Places</h1>
    <p className="banner_text">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
    </div>
    <div className="col-md-6">
    <img src="../../src/assets/images/landing_image.png" />
    </div>
    </div>
    </div>
    </section>
    </>
  );
}

export default NavBar;