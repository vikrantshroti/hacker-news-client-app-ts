import React from "react";
import NavigationLink from "../../molecules/NavigationLink";
import LogoWithText from "../../molecules/LogoWithText";
import logo from "../../../logo.svg";
import "./styles.css";

const Header = () => {
  const Links = [
    {
      link: "/newest",
      text: "new",
    },
    {
      link: "/ask",
      text: "ask",
    },
    {
      link: "/show",
      text: "show",
    },
    {
      link: "/jobs",
      text: "jobs",
    },
  ];
  return (
    <table className="header-container">
      <tbody>
        <tr>
          <td className="header-container-nl-lwt">
            <NavigationLink link="/">
              <LogoWithText
                src={logo}
                height={18}
                width={18}
                text={"Hacker News"}
              />
            </NavigationLink>
          </td>
          {Links.map((item, key) => {
            console.log("Header links item", Links, item);

            return (
              <td key={key}>
                <NavigationLink
                  activeClassName={"header-container-nl-acn"}
                  link={item.link}
                  text={item.text}
                  className="header-container-nl"
                />
                {key < Links.length - 1 && "|"}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Header;
