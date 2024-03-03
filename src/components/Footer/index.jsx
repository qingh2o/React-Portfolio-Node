import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3 border-bottom">
          <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
            <p className="fs-6 mb-0">&copy; Qing Qing Yang 2024.</p>
          </div>
          <ul className="social col-md-4 fs-4 justify-content-end list-unstyled d-flex">
            <li><a className="link-body-emphasis mx-2" href="https://www.linkedin.com/in/qing-qing-yang-designer/" aria-label="Browse Linkedin"><i className="bi bi-linkedin"></i></a></li>
            <li><a className="link-body-emphasis mx-2" href="https://github.com/qingh2o" aria-label="Browse Github"><i className="bi bi-github"></i></a></li>
            <li><a className="link-body-emphasis mx-2" href="https://github.com/qingh2o" aria-label="Browse Facebook"><i className="bi bi-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
