import { useColorModes } from "@coreui/react";

/**
 * Custom hook for managing color modes in the application.
 * Provides an abstraction over the CoreUI useColorModes hook.
 *
 * @returns {Object} Contains the current colorMode and a setColorMode function.
 */

const useAppColorMode = () => {
  // Use the CoreUI useColorModes hook with a default theme key.
  const { colorMode, setColorMode } = useColorModes(
    "coreui-free-react-admin-template-theme"
  );

  return { colorMode, setColorMode };
};

export default useAppColorMode;
