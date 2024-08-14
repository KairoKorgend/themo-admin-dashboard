import React from "react";
import PropTypes from "prop-types";
import { CAvatar } from "@coreui/react";
import classNames from "classnames";

export const AppAvatar = ({
  size,
  src,
  color,
  textColor,
  className,
  ...rest
}) => {
  const avatarClass = classNames(className, {
    [`text-${textColor}`]: textColor,
  });

  return (
    <CAvatar
      size={size}
      src={src}
      color={color}
      className={avatarClass}
      {...rest}
    />
  );
};

AppAvatar.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  src: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};
