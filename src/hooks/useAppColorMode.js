import { useEffect } from "react";
import { useColorModes } from "@coreui/react";

const useAppColorMode = () => {
  const { colorMode, setColorMode } = useColorModes("color-mode");

  useEffect(() => {
    const body = document.body;
    body.classList.remove("light-mode", "dark-mode", "auto-mode");

    if (colorMode === "dark") {
      body.classList.add("dark-mode");
    } else if (colorMode === "light") {
      body.classList.add("light-mode");
    } else {
      body.classList.add("auto-mode");
    }
  }, [colorMode]);

  return { colorMode, setColorMode };
};

export default useAppColorMode;
