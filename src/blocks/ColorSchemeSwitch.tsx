import { BiMoon, BiSun } from "react-icons/bi";
import OutlineIconButton from "../components/button/OutlineIconButton";
import Row from "../components/layout/Row";
import Text from "../components/typography/Text";
import { useColorScheme } from "../utils/colorSchemeHelper";

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
        hoverColor=""
        borderColor={isLight ? "border-zinc-700" : undefined}
        isBorderLess
        onClick={isDark ? toggleColorScheme : undefined}
      >
        <Text color={isLight ? "text-zinc-50" : undefined}>
          <BiSun />
        </Text>
      </OutlineIconButton>
      <OutlineIconButton
        className={isDark ? "bg-zinc-600" : undefined}
        hoverColor=""
        borderColor={isDark ? "border-zinc-600" : undefined}
        isBorderLess
        onClick={isLight ? toggleColorScheme : undefined}
      >
        <Text color={isDark ? "text-zinc-50" : undefined}>
          <BiMoon />
        </Text>
      </OutlineIconButton>
    </Row>
  );
}
