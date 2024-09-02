import React from "react";
import PropTypes from "prop-types";
import { CWidgetStatsF } from "@coreui/react";

/**
 * AppWidgetStatsF wraps the CWidgetStatsF component to provide consistent styling
 * and a simplified interface throughout the application.
 *
 * @param {Object} props - Component props.
 * @returns {JSX.Element} The AppWidgetStatsF component.
 */

const AppWidgetStatsF = ({
  className = "",
  color = "primary",
  icon = null,
  title = "Widget title",
  value = "0",
  ...rest
}) => {
  return (
    <CWidgetStatsF
      className="mb-3"
      color={color}
      icon={icon}
      padding={false}
      title={title}
      value={value}
      {...rest}
    />
  );
};

AppWidgetStatsF.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  value: PropTypes.string,
};

export default AppWidgetStatsF;
