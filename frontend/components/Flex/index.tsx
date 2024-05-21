import React from "react";
import styles from "./Flex.module.scss";
import type Flex from "./types";
import cx from "classnames";

interface FlexProps extends Flex {
  children?: React.ReactNode;
}

const FlexElement: React.FC<FlexProps> = (props) => {
  const { children, w, h, bg, m, p, direction, justify, align, wrap } = props;

  const flexClasses = cx(styles.flexContainer, {
    [styles.row]: direction === "row",
    [styles.column]: direction === "column",
    [styles["justify-center"]]: justify === "center",
    [styles["justify-start"]]: justify === "start",
    [styles["justify-end"]]: justify === "end",
    [styles["justify-around"]]: justify === "around",
    [styles["justify-between"]]: justify === "between",
    [styles["justify-evenly"]]: justify === "evenly",
    [styles["align-center"]]: align === "center",
    [styles["align-start"]]: align === "start",
    [styles["align-end"]]: align === "end",
    [styles["align-stretch"]]: align === "stretch",
    [styles["wrap"]]: wrap === "wrap",
    [styles["wrap-reverse"]]: wrap === "wrap-reverse",
  });

  return (
    <div
      className={flexClasses}
      style={{
        width: w || "auto",
        height: h || "auto",
        backgroundColor: bg || "transparent",
        margin: m || "auto",
        padding: p || "0",
      }}
    >
      {children}
    </div>
  );
};

export default FlexElement;
