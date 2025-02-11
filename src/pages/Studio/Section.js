import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "reactstrap";

// Import images
import img3 from "../../assets/images/3.jpg";

const Section = () => {  
    return (
      <React.Fragment>
        {/* Hero Start */}
        <section
          className="bg-half-170 d-table w-100"
          style={{ background: `url(${img3}) center center` }}
          id="home"
        >
          <Container>
            <Row className="position-relative align-items-center pt-4">
              <Col lg={7} className="offset-lg-5">
                <Card className="title-heading studio-home rounded shadow mt-5">
                  <h1 className="heading mb-3">
                    Present Your Work With{" "}
                    <span className="text-primary">Landrick</span> Studio
                  </h1>
                  <p className="para-desc text-muted">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap v5 html
                    page.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/page-contact-one"
                      className="btn btn-primary mt-2 me-2"
                    >
                      <i className="uil uil-phone"></i> Get Started
                    </Link>{" "}
                    <Link
                      to="/documentation"
                      className="btn btn-outline-primary mt-2"
                    >
                      <i className="uil uil-book-alt"></i> Documentation
                    </Link>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );  
}

export default Section;
