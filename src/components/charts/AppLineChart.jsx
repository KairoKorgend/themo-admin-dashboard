import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle } from "@coreui/utils";

export const AppLineChart = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const updateChartColors = () => {
      if (chartRef.current) {
        setTimeout(() => {
          const { scales } = chartRef.current.options;
          scales.x.grid.borderColor = getStyle(
            "--cui-border-color-translucent"
          );
          scales.x.grid.color = getStyle("--cui-border-color-translucent");
          scales.x.ticks.color = getStyle("--cui-body-color");
          scales.y.grid.borderColor = getStyle(
            "--cui-border-color-translucent"
          );
          scales.y.grid.color = getStyle("--cui-border-color-translucent");
          scales.y.ticks.color = getStyle("--cui-body-color");
          chartRef.current.update();
        });
      }
    };

    document.documentElement.addEventListener(
      "ColorSchemeChange",
      updateChartColors
    );
    return () => {
      document.documentElement.removeEventListener(
        "ColorSchemeChange",
        updateChartColors
      );
    };
  }, [chartRef]);

  const defaultOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: getStyle("--cui-border-color-translucent"),
          drawOnChartArea: false,
        },
        ticks: {
          color: getStyle("--cui-body-color"),
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: getStyle("--cui-border-color-translucent"),
        },
        max: 140000,
        ticks: {
          color: getStyle("--cui-body-color"),
          maxTicksLimit: 5,
          stepSize: Math.ceil(150000 / 5),
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
  };

  return (
    <CChartLine
      ref={chartRef}
      style={{ height: "300px", marginTop: "40px" }}
      data={data}
      options={{ ...defaultOptions, ...options }}
    />
  );
};

AppLineChart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

export default AppLineChart;
