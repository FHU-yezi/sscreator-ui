import { useColorScheme } from "../hooks/useColorScheme";
import TextButton from "./button/TextButton";

export default function ColorSchemeSwitch() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <TextButton
      className="text-2xl"
      color="gray"
      leftIcon={
        colorScheme === "light"
          ? "i-mdi-white-balance-sunny"
          : "i-mdi-moon-and-stars"
      }
      onClick={toggleColorScheme}
      aria-label="切换颜色主题"
    />
  );
}
