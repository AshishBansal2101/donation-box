import React from "react";
import { Row, Col } from "antd";
// import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Donations</h2>
              <div>
                <a target="_blank " href="/donation/new">
                  Want Donation
                </a>
              </div>
              <div>
                <a target="_blank " href="/shipping">
                  Donate to a Needy
                </a>
              </div>
              <div>
                <a href="#">Why Donate</a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Books</h2>
              <div>
                <a href="/givebook">Donate a Book</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/wantbook">
                  Want a book
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://bookstore-efj1.onrender.com/"
                >
                  Softbook
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>About</h2>
              <div>
                <a href="/contact">Contact us</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/about">
                  About us
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/login">
                  Join us
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Account</h2>
              <div>
                <a href="/account">My Profile</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/me/update">
                  Edit Profile
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/password/update">
                  Edit Password
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="/orders">
                  My Donations
                </a>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Developers</h2>
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/AshishBansal2101"
                >
                  Ashish
                </a>
                <span> - </span>
                <span>Software Developer</span>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/AkshalRaina"
                >
                  Akshal Raina
                </a>
                <span> - </span>
                <span>Software Developer</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24} />
        <Col lg={18} sm={24}>
          {/* <span
            style={{
              lineHeight: "16px",
              paddingRight: 12,
              marginRight: 11,
              borderRight: "1px solid rgba(255, 255, 255, 0.55)"
            }}
          >
            
          </span> */}
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Donation-Box
            </a>
          </span>
          <span style={{ marginRight: 12 }}></span>
          <span style={{ marginRight: 12 }}>
            {" "}
            Made with ❤️ By{" "}
            <a href="https://www.dcrustm.ac.in/" target="black">
              <strong> Dcrust</strong>
            </a>{" "}
            Copyright © 2022. All Rights Reserved.
          </span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
