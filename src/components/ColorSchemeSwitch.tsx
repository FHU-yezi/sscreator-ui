import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useColorScheme } from "../hooks/useColorScheme";
import TextButton from "./button/TextButton";

export default function ColorSchemeSwitch() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <TextButton
      colorScheme="secondary"
      leftIcon={
        colorScheme === "light" ? (
          <MdLightMode size={24} />
        ) : (
          <MdDarkMode size={24} />
        )
      }
      onClick={toggleColorScheme}
    />
  );
}
