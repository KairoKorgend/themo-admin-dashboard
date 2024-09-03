import { useEffect } from "react";
import { useColorModes } from "@coreui/react";

const useAppColorMode = () => {
  const { colorMode, setColorMode } = useColorModes("color-mode");

  useEffect(() => {
    const body = document.body;
    const storedColorMode = localStorage.getItem("color-mode");

    if (storedColorMode) {
      body.setAttribute("data-coreui-theme", storedColorMode);
    } else {
      body.setAttribute("data-coreui-theme", colorMode);
    }

    if (colorMode === "dark") {
      body.setAttribute("data-coreui-theme", "dark");
    } else if (colorMode === "light") {
      body.setAttribute("data-coreui-theme", "light");
    } else {
      body.setAttribute("data-coreui-theme", "auto");
    }
  }, [colorMode]);

  return { colorMode, setColorMode };
};

export default useAppColorMode;
