import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useColorScheme } from "../utils/colorSchemeHelper";
import OutlineIconButton from "./button/OutlineIconButton";
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
      <OutlineIconButton
        className={isLight ? "bg-zinc-700" : undefined}
        label="浅色模式"
        hoverColor=""
        borderColor={isLight ? "border-zinc-700" : undefined}
        isBorderLess
        onClick={isDark ? toggleColorScheme : undefined}
      >
        <Text color={isLight ? "text-zinc-50" : undefined}>
          <MdOutlineLightMode />
        </Text>
      </OutlineIconButton>
      <OutlineIconButton
        className={isDark ? "bg-zinc-600" : undefined}
        label="深色模式"
        hoverColor=""
        borderColor={isDark ? "border-zinc-600" : undefined}
        isBorderLess
        onClick={isLight ? toggleColorScheme : undefined}
      >
        <Text color={isDark ? "text-zinc-50" : undefined}>
          <MdOutlineDarkMode />
        </Text>
      </OutlineIconButton>
    </Row>
  );
}
