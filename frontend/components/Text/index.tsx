import React from "react";
import styles from "./Text.module.scss";
import type Text from "./types";
import cx from "classnames";

interface TextProps extends Text {
  children?: React.ReactNode;
}

const TextElement: React.FC<TextProps> = (props) => {
  const { children, w, h, bg, m, p, fz, fw } = props;

  const TextClasses = cx(styles.root, {
    [styles["xxxs"]]: fz === "xxxs",
    [styles["xxs"]]: fz === "xxs",
    [styles["xs"]]: fz === "xs",
    [styles["sm"]]: fz == "sm",
    [styles["md"]]: fz == "md",
    [styles["lg"]]: fz == "lg",
    [styles["xl"]]: fz == "xl",
    [styles["xxl"]]: fz == "xxl",
    [styles["xxxl"]]: fz == "xxxl",
  });

  return (
    <div
      className={TextClasses}
      style={{
        width: w || "auto",
        height: h || "auto",
        backgroundColor: bg || "transparent",
        margin: m || "auto",
        padding: p || "0",
        fontWeight: fw || "normal",
      }}
    >
      {children}
    </div>
  );
};

export default TextElement;
