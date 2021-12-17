import React from "react";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import { IProps } from "./types";

const LogoWithText = ({ width, height, src, text }: IProps) => {
  return (
    <>
      <Image height={height} width={width} src={src} />
      <Text text={text} />
    </>
  );
};

export default LogoWithText;
