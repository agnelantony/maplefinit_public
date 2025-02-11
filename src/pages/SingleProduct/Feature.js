// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

///Import Components
import FeatureBoxSmall from "./FeatureBoxSmall";

// Import images
import cameraImg from "../../assets/images/icon/camera.svg";
import speedometer from "../../assets/images/icon/speedometer.svg";
import lowBattery from "../../assets/images/icon/low-battery.svg";
import game from "../../assets/images/icon/game.svg";
import cameraSingle from "../../assets/images/single/camera.png";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { image: cameraImg, title: "Camera", desc: "48 mp at 60mtr" },
        { image: speedometer, title: "Speed", desc: "50 kph" },
        { image: lowBattery, title: "Battery", desc: "1 hour and 30 min" },
        { image: game, title: "Control", desc: "20 km Range" },
      ],
      features_lines: [
        { title: "Digital Marketing Solutions for Tomorrow" },
        { title: "Create your own skin to match your brand" },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row>{<FeatureBoxSmall features={this.state.features} />}</Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <img src={cameraSingle} className="img-fluid" alt="" />
              </Col>

              <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-3">
                  <h4 className="title mb-4">DJI 48MP Camera</h4>
                  <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                    <li className="mb-1"><span className="text-primary h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                  </ul>
                  <Link to="#" className="mt-3 text-primary">Read more <i className="uil uil-angle-right-b"></i></Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
