import React from "react";
import classNames from "classnames";
import Link from "../../atoms/Link";
import Text from "../../atoms/Text";
import { NavLink } from "react-router-dom";
import { IProps } from "./types";
import "./styles.css";

const NavigationLink = ({
  external = false,
  link,
  text,
  activeClassName,
  className,
  children,
  textClassName,
}: IProps) => {
  return external ? (
    <Link href={link} text={text} />
  ) : (
    <NavLink activeClassName={activeClassName} className={className} to={link}>
      {children}
      {text && (
        <Text text={text} className={classNames("nl-text", textClassName)} />
      )}
    </NavLink>
  );
};

export default NavigationLink;
