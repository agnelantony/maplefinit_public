// React Basic and Bootstrap
import React, { useEffect, useState } from "react";
// , { Component }
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import components
import SectionTitle from "../../components/Shared/SectionTitle";
import KeyFeatureBox from "../../components/Shared/KeyFeatureBox1";
import TeamBox from "../../components/Shared/TeamBox";

// import images
import about from "../../assets/images/about.jpg";
import team1 from "../../assets/images/client/01.jpg";
import team2 from "../../assets/images/client/02.jpg";
import team3 from "../../assets/images/client/03.jpg";
import team4 from "../../assets/images/client/04.jpg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// class PageAboutUs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {     
//       keyfeatures: [
//         { icon: "monitor", title: "Fully Responsive" },
//         { icon: "heart", title: "Browser Compatibility" },
//         { icon: "eye", title: "Retina Ready" },
//         { icon: "bold", title: "Based On Bootstrap 5" },
//         { icon: "feather", title: "Feather Icons" },
//         { icon: "code", title: "Built With SASS" },
//         { icon: "user-check", title: "W3c Valid Code" },
//         { icon: "git-merge", title: "Flaticon Icons" },
//         { icon: "settings", title: "Easy to customize" },
//       ],
//       candidates: [
//         {
//           id: 1,
//           image: team1,
//           name: "Ronny Jofra",
//           designation: "C.E.O",
//           link: "",
//           socialIds: [
//             { icon: "facebook", link: "#" },
//             { icon: "instagram", link: "#" },
//             { icon: "twitter", link: "#" },
//             { icon: "linkedin", link: "#" },
//           ],
//         },
//         {
//           id: 2,
//           image: team4,
//           name: "Micheal Carlo",
//           designation: "Director",
//           link: "",
//           socialIds: [
//             { icon: "facebook", link: "#" },
//             { icon: "instagram", link: "#" },
//             { icon: "twitter", link: "#" },
//             { icon: "linkedin", link: "#" },
//           ],
//         },
//         {
//           id: 3,
//           image: team2,
//           name: "Aliana Rosy",
//           designation: "Manager",
//           link: "",
//           socialIds: [
//             { icon: "facebook", link: "#" },
//             { icon: "instagram", link: "#" },
//             { icon: "twitter", link: "#" },
//             { icon: "linkedin", link: "#" },
//           ],
//         },
//         {
//           id: 4,
//           image: team3,
//           name: "Sofia Razaq",
//           designation: "Developer",
//           link: "",
//           socialIds: [
//             { icon: "facebook", link: "#" },
//             { icon: "instagram", link: "#" },
//             { icon: "twitter", link: "#" },
//             { icon: "linkedin", link: "#" },
//           ],
//         },
//       ],
//       isOpen: false,
//     };
//     this.openModal = this.openModal.bind(this);
//   }
//   openModal() {
//     this.setState({ isOpen: true });
//   }

//   componentDidMount() {
//     document.body.classList = "";
//     document.querySelector(".shoppingbtn").classList.add("btn-primary");
//     window.addEventListener("scroll", this.scrollNavigation, true);
//   }

//   // Make sure to remove the DOM listener when the component is unmounted.
//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.scrollNavigation, true);
//   }

//   scrollNavigation = () => {
//     var doc = document.documentElement;
//     const navBar = document.getElementById("topnav");
//     var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
//     if (navBar != null) {
//       if (top > 80) {
//         navBar.classList.add("nav-sticky");
//       } else {
//         navBar.classList.remove("nav-sticky");
//         document.querySelector(".shoppingbtn").classList.add("btn-primary");
//         document.querySelector(".shoppingbtn").classList.remove("btn-light");
//         document.querySelector(".settingbtn").classList.add("btn-soft-primary");
//       }
//     }
//   };

//   render() {
//     return (
//       <React.Fragment>
//         {/* breadcrumb */}
//         <section className="bg-half-170 bg-light d-table w-100">
//           <Container>
//             <Row className="mt-5 justify-content-center">
//               <Col lg={12} className="text-center">
//                 <div className="pages-heading">
//                   <h4 className="title mb-0"> About us </h4>
//                 </div>
//               </Col>
//             </Row>

//             <div className="position-breadcrumb">
//               <nav aria-label="breadcrumb" className="d-inline-block">
//                 <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
//                   <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
//                   <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
//                   <li className="breadcrumb-item active" aria-current="page">About Us</li>
//                 </ul>
//               </nav>
//             </div>
//           </Container>
//         </section>
//         <div className="position-relative">
//           <div className="shape overflow-hidden text-white">
//             <svg
//               viewBox="0 0 2880 48"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
//                 fill="currentColor"
//               ></path>
//             </svg>
//           </div>
//         </div>

//         <ModalVideo
//           channel="youtube"
//           isOpen={this.state.isOpen}
//           videoId="L61p2uyiMSo"
//           onClose={() => this.setState({ isOpen: false })}
//         />

//         <section className="section">
//           <Container>
//             <Row className="align-items-center">
//               <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
//                 <div className="position-relative">
//                   <img
//                     src={about}
//                     className="rounded img-fluid mx-auto d-block"
//                     alt=""
//                   />
//                   <div className="play-icon">
//                     <Link
//                       onClick={this.openModal}
//                       to="#"
//                       className="play-btn lightbox border-0"
//                     >
//                       <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </Col>

//               <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
//                 <div className="section-title ms-lg-4">
//                   <h4 className="title mb-4">Our Story</h4>
//                   <p className="text-muted">
//                     Start working with{" "}
//                     <span className="text-primary fw-bold">
//                       Landrick
//                     </span>{" "}
//                     that can provide everything you need to generate awareness,
//                     drive traffic, connect. Dummy text is text that is used in
//                     the publishing industry or by web designers to occupy the
//                     space which will later be filled with 'real' content. This
//                     is required when, for example, the final text is not yet
//                     available. Dummy texts have been in use by typesetters since
//                     the 16th century.
//                   </p>
//                   <Link to="#" className="btn btn-primary mt-3">Buy Now <i className="uil uil-angle-right-b"></i></Link>
//                 </div>
//               </Col>
//             </Row>
//           </Container>

//           <Container className="mt-100 mt-60">
//             {/* Render Section Title */}
//             <SectionTitle
//               title="Key Features"
//               desc="that can provide everything you need to generate awareness, drive traffic, connect."
//             />

//             <Row>
//               {/* key features */}
//               <KeyFeatureBox keyfeatures={this.state.keyfeatures} />

//               <Col xs={12} className="text-center mt-4 pt-2">
//                 <Link to="#" className="btn btn-primary">
//                   See More <i className="mdi mdi-arrow-right"></i>
//                 </Link>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <section className="section bg-light">
//           <Container>
//             {/* Render Section Title */}
//             <SectionTitle
//               title="Our Greatest Minds"
//               desc="that can provide everything you need to generate awareness, drive traffic, connect."
//             />

//             <Row>
//               {/* teambox */}
//               <TeamBox
//                 candidates={this.state.candidates}
//                 isTransparent={true}
//               />
//             </Row>
//           </Container>

//           <Container className="mt-100 mt-60">
//             <Row className="justify-content-center">
//               <Col className="text-center">
//                 <div className="section-title">
//                   <h4 className="title mb-4">
//                     See everything about your employee at one place.
//                   </h4>
//                   <p className="text-muted para-desc mx-auto">
//                     Start working with{" "}
//                     <span className="text-primary fw-bold">
//                       Landrick
//                     </span>{" "}
//                     that can provide everything you need to generate awareness,
//                     drive traffic, connect.
//                   </p>
//                   <div className="mt-4">
//                     <Link to="#" className="btn btn-primary mt-2 me-2">
//                       Get Started Now
//                     </Link>
//                     &nbsp;
//                     <Link to="#" className="btn btn-outline-primary mt-2">
//                       Free Trial
//                     </Link>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
        
//       </React.Fragment>
//     );
//   }
// }

const PageAboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    document.body.classList = '';
    document.querySelector('.shoppingbtn').classList.add('btn-primary');
    window.addEventListener('scroll', scrollNavigation, true);

    return () => {
      window.removeEventListener('scroll', scrollNavigation, true);
    };
  }, []);

  const scrollNavigation = () => {
    const doc = document.documentElement;
    const navBar = document.getElementById('topnav');
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar !== null) {
      if (top > 80) {
        navBar.classList.add('nav-sticky');
      } else {
        navBar.classList.remove('nav-sticky');
        document.querySelector('.shoppingbtn').classList.add('btn-primary');
        document.querySelector('.shoppingbtn').classList.remove('btn-light');
        document.querySelector('.settingbtn').classList.add('btn-soft-primary');
      }
    }
  };

  const keyfeatures = [
    { icon: 'monitor', title: 'Fully Responsive' },
    { icon: 'heart', title: 'Browser Compatibility' },
    { icon: 'eye', title: 'Retina Ready' },
    { icon: 'bold', title: 'Based On Bootstrap 5' },
    { icon: 'feather', title: 'Feather Icons' },
    { icon: 'code', title: 'Built With SASS' },
    { icon: 'user-check', title: 'W3c Valid Code' },
    { icon: 'git-merge', title: 'Flaticon Icons' },
    { icon: 'settings', title: 'Easy to customize' },
  ];

  const candidates = [
    {
      id: 1,
      image: team1,
      name: 'Ronny Jofra',
      designation: 'C.E.O',
      link: '',
      socialIds: [
        { icon: 'facebook', link: '#' },
        { icon: 'instagram', link: '#' },
        { icon: 'twitter', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
    {
      id: 2,
      image: team4,
      name: 'Micheal Carlo',
      designation: 'Director',
      link: '',
      socialIds: [
        { icon: 'facebook', link: '#' },
        { icon: 'instagram', link: '#' },
        { icon: 'twitter', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
    {
      id: 3,
      image: team2,
      name: 'Aliana Rosy',
      designation: 'Manager',
      link: '',
      socialIds: [
        { icon: 'facebook', link: '#' },
        { icon: 'instagram', link: '#' },
        { icon: 'twitter', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
    {
      id: 4,
      image: team3,
      name: 'Sofia Razaq',
      designation: 'Developer',
      link: '',
      socialIds: [
        { icon: 'facebook', link: '#' },
        { icon: 'instagram', link: '#' },
        { icon: 'twitter', link: '#' },
        { icon: 'linkedin', link: '#' },
      ],
    },
  ];

  return (
    <React.Fragment>
      {/* breadcrumb */}
      <section className="bg-half-170 bg-light d-table w-100">
        <Container>
          <Row className="mt-5 justify-content-center">
            <Col lg={12} className="text-center">
              <div className="pages-heading">
                <h4 className="title mb-0"> About us </h4>
              </div>
            </Col>
          </Row>

          <div className="position-breadcrumb">
            <nav aria-label="breadcrumb" className="d-inline-block">
              <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                <li className="breadcrumb-item"><Link to="/">Landrick</Link></li>{" "}
                <li className="breadcrumb-item"><Link to="#">Page</Link></li>{" "}
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
              </ul>
            </nav>
          </div>
        </Container>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setIsOpen(false)}
      />

      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="position-relative">
                <img
                  src={about}
                  className="rounded img-fluid mx-auto d-block"
                  alt=""
                />
                <div className="play-icon">
                  <Link
                    onClick={openModal}
                    to="#"
                    className="play-btn lightbox border-0"
                  >
                    <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title ms-lg-4">
                <h4 className="title mb-4">Our Story</h4>
                <p className="text-muted">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect. Dummy text is text that is used in
                  the publishing industry or by web designers to occupy the
                  space which will later be filled with 'real' content. This
                  is required when, for example, the final text is not yet
                  available. Dummy texts have been in use by typesetters since
                  the 16th century.
                </p>
                <Link to="#" className="btn btn-primary mt-3">Buy Now <i className="uil uil-angle-right-b"></i></Link>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          {/* Render Section Title */}
          <SectionTitle
            title="Key Features"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            {/* key features */}
            <KeyFeatureBox keyfeatures={keyfeatures} />

            <Col xs={12} className="text-center mt-4 pt-2">
              <Link to="#" className="btn btn-primary">
                See More <i className="mdi mdi-arrow-right"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          {/* Render Section Title */}
          <SectionTitle
            title="Our Greatest Minds"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            {/* teambox */}
            <TeamBox
              candidates={candidates}
              isTransparent={true}
            />
          </Row>
        </Container>

        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col className="text-center">
              <div className="section-title">
                <h4 className="title mb-4">
                  See everything about your employee at one place.
                </h4>
                <p className="text-muted para-desc mx-auto">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-primary mt-2 me-2">
                    Get Started Now
                  </Link>
                  &nbsp;
                  <Link to="#" className="btn btn-outline-primary mt-2">
                    Free Trial
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </React.Fragment>
  );
}


export default PageAboutUs;
