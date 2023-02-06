import React from "react";

function Footer() {
  return (
    <div>
      <div className="mt-5 p-4 bg-dark text-white text-center">
          <div className="footer-clean">
            <footer>
              <div className="container">
                <div>
                  <div className="row justify-content-center address">
                    <div className="col-sm-4 col-md-3 item ">
                      <span>
                        <h4>CAR FYX</h4>
                      </span>
                      <p>
                        3rd ,Floor ,Land Mark Tower
                        <br />
                        North City ,Loha Gaon,Pune
                      </p>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                      <ul>
                        <li>
                          <a href="/">Email</a>
                        </li>
                        <li>
                          <a href="/">Phone Number</a>
                        </li>
                        <li>
                          <a href="/">Working Days</a>
                        </li>
                        <li>
                          <a href="/">Working Hours</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                      <ul>
                        <li>
                          <a href="/">car.fyx@gmail.com</a>
                        </li>
                        <li>
                          <a href="/">99999999999</a>
                        </li>
                        <li>
                          <a href="/">Monday - Sunday</a>
                        </li>
                        <li>
                          <a href="/">8AM TO 9PM</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item social">
                  <a href="/">
                    <i className="icon ion-social-facebook"></i>
                  </a>
                  <a href="/">
                    <i className="icon ion-social-twitter"></i>
                  </a>
                  <a href="/">
                    <i className="icon ion-social-snapchat"></i>
                  </a>
                  <a href="/">
                    <i className="icon ion-social-instagram"></i>
                  </a>
                  <p className="copyright">
                    Car Fyx Pvt. Ltd. © 2023 . All rights reserved
                  </p>
                </div>
              </div>
            </footer>
          </div>
      </div>
    </div>
  );
}

export default Footer;
