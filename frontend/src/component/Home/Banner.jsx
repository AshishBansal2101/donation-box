import React from "react";
import PropTypes from "prop-types";
import QueueAnim from "rc-queue-anim";
import { Button } from "antd";
import { Element } from "rc-scroll-anim";
import BannerImage from "./BannerImage";
import { assets } from "./data";
import { Link } from "react-router-dom";
class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  };
  static defaultProps = {
    className: "banner",
  };
  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <Element
        component="section"
        className={`${className}-wrapper page`}
        onChange={navToShadow}
      >
        <div className={className}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ? (
              <img
                width="50%"
                src={`https://cdn.buymeacoffee.com/uploads/project_updates/2019/05/a9275f108974abb34a1af0fa46a8f99f.gif`}
                alt=""
              />
            ) : (
              <img
                width="75%"
                src={
                  "https://cdn.buymeacoffee.com/uploads/project_updates/2019/05/a9275f108974abb34a1af0fa46a8f99f.gif"
                }
                alt=""
              />
            )}
          </div>
          <QueueAnim
            type={isMobile ? "bottom" : "right"}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <h1 key="h1">Spread Joy With A Donation </h1>
            <p className="main-info" key="p">
              Your contribution will ensure that under privileged children get a
              proper education and pave their way to a brighter future. Help
              India's children find their true potential.
            </p>
            {/* <a target="_blank" href="/shipping" key="a"> */}
            <button href="/shipping" className="bhead">
              <Link to="/shipping" className="custom-btn btn-7">
                Donate Now!
              </Link>
            </button>
            {/* </a> */}
          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;
