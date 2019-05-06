import React from 'react';
import {
  Col,
  Container,
  Row
} from 'reactstrap';

import Navbar from './navbar';
import Footer from './footer';

class Layout extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-default");
  }

  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }

  render() {
    return (
      <>
        <div className="main-content">
          <Navbar/>
          <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col lg="5" md="6">
                    <h1 className="text-white">Welcome to PK.js!</h1>
                    <p className="text-lead text-light">
                      The world's most powerful Persistent Kingdoms script set.
                      Free & Open Source for your convenience.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
          {/* Page content */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              {this.props.children}
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

export default Layout;