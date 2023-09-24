import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useColorScheme } from "../utils/colorSchemeHelper";
import GhostButton from "./button/GhostButton";
import Row from "./layout/Row";
import Text from "./typography/Text";

export default function ColorSchemeSwitch() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isLight = colorScheme === "light";
  const isDark = colorScheme === "dark";

  return (
    <Row
      gap="gap-0"
      className="w-fit border border-zinc-200 rounded-lg shadow dark:border-zinc-700"
    >
      <GhostButton
        className={isLight ? "bg-zinc-700" : undefined}
        onClick={toggleColorScheme}
        ariaLabel="浅色模式"
        iconOnly
      >
        <Text color={isLight ? "text-zinc-50" : undefined}>
          <MdOutlineLightMode />
        </Text>
      </GhostButton>
      <GhostButton
        className={isDark ? "bg-zinc-600" : undefined}
        onClick={toggleColorScheme}
        ariaLabel="深色模式"
        iconOnly
      >
        <Text color={isDark ? "text-zinc-50" : undefined}>
          <MdOutlineDarkMode />
        </Text>
      </GhostButton>
    </Row>
  );
}
