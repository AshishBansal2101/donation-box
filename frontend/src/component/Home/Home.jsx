import React from "react";
import DocumentTitle from "react-document-title";
import { enquireScreen } from "enquire-js";
import Header from "../layout/Header/Header";
// import Footer from "../layout/Footer/Footer";
import Banner from "./Banner";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
// import  PageExtra  from "./PageExtra.jsx";
// import "antd/dist/antd.css";
import Footer from "../layout/Footer/Footer.jsx";
// import "./static/style";
import { Button } from "antd";
import "../../styles/Home.scss";

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === "leave" });
  };
  render() {
    return [
      //   <Button> cknk</Button>,
      //   <Button type="primary">Primary Button</Button>,
      <Banner
        key="banner"
        isMobile={this.state.isMobile}
        navToShadow={this.navToShadow}
      />,
      <Page1 key="page1" />,
      <Page2 key="page2" />,
      <Page3 key="page3" />,
      <Page4 key="page4" isMobile={this.state.isMobile} />,
      <Page5 key="page5" />,
      <DocumentTitle title="Donation-Box" />,
      <Footer />,
    ];
  }
}

export default Home;
