import React from "react";
import NavigationLink from "../../molecules/NavigationLink";
import "./styles.css";

const Footer = () => {
  const Links = [
    {
      link: "/guidelines",
      text: "Guidelines",
    },
    {
      link: "/faq",
      text: "FAQ",
    },
    {
      link: "mailto:hn@ycombinator.com",
      text: "Support",
      external: true,
    },
    {
      link: "https://github.com/HackerNews/API",
      text: "API",
      external: true,
    },
    {
      link: "/security",
      text: "Security",
    },
    {
      link: "/lists",
      text: "Lists",
    },
    {
      link: "/bookmarklet",
      text: "Bookmarklet",
    },
    {
      link: "http://www.ycombinator.com/legal/",
      text: "Legal",
      external: true,
    },
    {
      link: "http://www.ycombinator.com/apply/",
      text: "Apply to YC",
      external: true,
    },
    {
      link: "mailto:hn@ycombinator.com",
      text: "Contact",
      external: true,
    },
  ];

  return (
    <footer className="footer-container">
      {Links.map((item: any, index: number) => {
        return (
          <>
            <NavigationLink {...item} />
            {index < Links.length - 1 && "|"}
          </>
        );
      })}
    </footer>
  );
};

export default Footer;
