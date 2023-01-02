import React from "react";
import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

export default function Page2() {
  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 key="title">Donation-Box</h2>
        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">
          <p className="main-info" key="1">
            Fully Secure ,Fast and Quick , Easy to donate and much more....
          </p>
          <p className="main-info" key="2">
            We echo the thought of the Government of India wherein in we are
            collectively looking at nurturing an education system rooted in
            Indian ethos that contributes directly to transforming India, that
            is Bharat, sustainably into an equitable and vibrant knowledge
            society, by providing high-quality education to all, and thereby
            making India a global knowledge superpower
          </p>
        </QueueAnim>
      </QueueAnim>
    </OverPack>
  );
}
