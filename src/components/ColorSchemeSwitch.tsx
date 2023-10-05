import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useColorScheme } from "../utils/colorSchemeHelper";
import GhostButton from "./button/GhostButton";
import Row from "./layout/Row";
import Icon from "./typography/Icon";

export default function ColorSchemeSwitch() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isLight = colorScheme === "light";

  return (
    <Row
      gap="gap-0"
      className="w-fit border border-zinc-100 rounded-lg shadow dark:border-zinc-800"
    >
      <GhostButton
        hoverBackgroundColor={
          isLight
            ? "bg-zinc-700 hover:bg-zinc-600"
            : "bg-black hover:bg-zinc-900"
        }
        textColor="text-zinc-50"
        onClick={toggleColorScheme}
        ariaLabel="浅色模式"
        iconOnly
      >
        <Icon>
          <MdOutlineLightMode />
        </Icon>
      </GhostButton>
      <GhostButton
        hoverBackgroundColor={
          isLight
            ? "bg-white hover:bg-zinc-100"
            : "bg-zinc-800 hover:bg-zinc-700"
        }
        textColor="text-zinc-950 dark:text-zinc-50"
        onClick={toggleColorScheme}
        ariaLabel="深色模式"
        iconOnly
      >
        <Icon>
          <MdOutlineDarkMode />
        </Icon>
      </GhostButton>
    </Row>
  );
}
