import { Link } from "react-router-dom";
import avatar1 from "../../images/avatar1.jpg";
import avatar2 from "../../images/avatar2.jpg";
import web1 from "../../images/web1.jpg";
import web2 from "../../images/web2.jpg";
import web3 from "../../images/web3.webp";
export const assets = "https://gw.alipayobjects.com/os/s/prod/antv/assets";

const base = "/";
export const pageExtra = {
  title: "自然好用的设计",
  children: [
    {
      title: "设计价值观",
      content: "Design Values",
      src: "https://gw.alipayobjects.com/zos/rmsportal/KtRzkMmxBuWCVjPbBgRY.svg",
      color: "#EB2F96",
      shadowColor: "rgba(166, 55, 112, 0.08)",
      link: "https://ant.design/docs/spec/values-cn",
    },
    {
      title: "视觉",
      content: "Visual",
      src: "https://gw.alipayobjects.com/zos/rmsportal/qIcZMXoztWjrnxzCNTHv.svg",
      color: "#1890FF",
      shadowColor: "rgba(15, 93, 166, 0.08)",
      link: "https://ant.design/docs/spec/colors-cn",
    },
    {
      title: "可视化",
      content: "Visualisation",
      src: "https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg",
      color: "#AB33F7",
      shadowColor: "rgba(112, 73, 166, 0.08)",
      link: "https://antv.alipay.com/zh-cn/vis/index.html",
    },
  ],
};
export const page1 = [
  {
    img: `${assets}/image/icon/g2-c94ef.svg`,
    href: `/shipping`,
    title: (
      <Link to="/shipping" className="hmbk1">
        Donate Now
      </Link>
    ),
    description: "A Small step can lead to a big change.",
  },
  {
    img: `${assets}/image/icon/g6-b4554.svg`,
    title: (
      <Link to="/donation/new" className="hmbk1">
        Request For Donation
      </Link>
    ),
    href: `/donation/new`,
    description:
      "Fill the form for your application,we would like to help you.",
  },
  {
    img: `${assets}/image/icon/f2-d360c.svg`,
    title: (
      <Link to="/why/donate" className="hmbk1">
        Why Donate
      </Link>
    ),
    href: `/why/donate`,
    description: "Why should you donate us",
  },
];

export const page3 = [
  {
    img: `${assets}/image/home/features-simple-9617c.svg`,
    // title: "Clear and Transparent",
    title: (
      <Link to="/wantbook" className="hmbk">
        Request Book
      </Link>
    ),
    description: "Need A Hardbook?",
  },
  {
    img: `${assets}/image/home/features-professional-1c6d1.svg`,
    title: (
      <Link to="/givebook" className="hmbk">
        Donate Book
      </Link>
    ),
    description: "Want to Donate!!",
  },
  {
    img: `${assets}/image/home/features-powerful-243e3.svg`,
    title: (
      <a
        href="https://bookstore-efj1.onrender.com/"
        className="hmbk"
        target="_blank"
      >
        Soft Book
      </a>
    ),
    description: "Need SoftBooks ?",
  },
];

export const page4 = [
  {
    name: "Ashish Bansal",
    profile: "Software-Developer at Veersa Technologies",
    avatar: avatar1,
    comment:
      "A little contribution can’t change the world but it can change someone’s world. Nothing will provide you more satisfaction than charity.",
  },
  {
    name: "Akshal Raina",
    profile: "Software-Developer at Proso",
    avatar: avatar2,
    comment:
      "Great things are done by a series of small things brought together.Help others so in bad times others can help you",
  },
];

export const page5 = [
  //   web1,
  "https://www.gofundme.com/c/wp-content/uploads/2021/04/gofundme-logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqIFt-7sH7DjpbWapSyupQ4hbLRhzVMMrwQ&usqp=CAU",
  "https://www.donatekart.com/_next/static/images/dkLogo-7bd516182c5479fca3d1dc9589226d4d.webp",
  "https://s.wildapricot.net/StaticImages/v7/Logo/WildApricot.png",
  "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1422884033/uvmzqa7q8bkrtukqvtxz.png",
  "https://donately.org/wp-content/uploads/2021/09/donately-logo_Color-Logo-Dark.png",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqIFt-7sH7DjpbWapSyupQ4hbLRhzVMMrwQ&usqp=CAU",

  "https://worldwish.org/wp-content/uploads/2022/05/MAW_International_RGB.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/JustGiving.svg/1024px-JustGiving.svg.png",
  //   "https://www.inf.org/wp/wp-content/uploads/2015/09/CanadaHelps-Logo.png",
  //   "https://www.gofundme.com/c/wp-content/uploads/2021/04/gofundme-logo.png",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqIFt-7sH7DjpbWapSyupQ4hbLRhzVMMrwQ&usqp=CAU",

  //   `${assets}/image/home/mybank-da103.png`,
  //   `${assets}/image/home/jd-23e52.png`,
  //   `${assets}/image/home/yunos-2edef.png`,
  //   `${assets}/image/home/cainiao-40fc8.png`,
];
