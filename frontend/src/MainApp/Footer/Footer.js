import React from "react";
import "./Footer.css"

const Footer = () =>{
    return (
            <footer className="text-center text-lg-start text-white bg-dark">
    <section className="d-flex justify-content-between p-4 footerColor3">
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
  
      <div>
        <a href="/" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">KAAM KAAJ</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto line3"/>
            <p>
              "In the world of Internet Customer Service, it’s important to remember your competitor is only one mouse click away.."
            </p>
          </div>
  
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">CATEGORIES</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto line3"/>
            <p>
              <a href="/" className="text-white">Plumber</a>
            </p>
            <p>
              <a href="/" className="text-white">Carpenter</a>
            </p>
            <p>
              <a href="/" className="text-white">Electrician</a>
            </p>
            <p>
              <a href="/" className="text-white">Movers</a>
            </p>
            <p>
              <a href="/" className="text-white">Renovater</a>
            </p>
            <p>
              <a href="/" className="text-white">Construction</a>
            </p>
  
  
          </div>
  
          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">HELP</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto line3"/>
            <p>
              <a href="/" className="text-white">Support</a>
            </p>
            <p>
              <a href="/" className="text-white">Our Impact</a>
            </p>
            <p>
              <a href="/" className="text-white">Privacy Policy</a>
            </p>
            <p>
              <a href="/" className="text-white">Reviews</a>
            </p>
          </div>
  
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact US</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto line3"/>
            <p><i className="fas fa-home mr-3"></i> UET Lahore</p>
            <p><i className="fas fa-envelope mr-3"></i> 2020cs3@student.uet.edu.pk</p>
            <p><i className="fas fa-phone mr-3"></i> 0320-5803580</p>
            <p><i className="fas fa-print mr-3"></i> +92(42)99250202</p>
          </div>
        </div>
      </div>
    </section>
    <div className="text-center p-3 footerCopyrightColor3">
      © 2022 Copyright:
      <a className="text-white" href="/">CHEEZAINProgrammmers.com</a>
    </div>
  </footer>
    )
}

export default Footer