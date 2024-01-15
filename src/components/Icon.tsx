import clsx from "clsx";
import type { ComponentChild } from "preact";
import type {
  GrayColorType,
  SemanticColorType,
} from "../utils/colorSchemeTypes";

interface CustomStyle {
  textColor?: string;
}

interface Props {
  icon: ComponentChild;
  className?: string;
  colorScheme?: SemanticColorType | GrayColorType;
  customStyle?: CustomStyle;
}

export default function Icon({
  icon,
  className,
  colorScheme,
  customStyle = { textColor: "text-zinc-950 dark:text-zinc-50" },
}: Props) {
  return (
    <span
      className={clsx(className, "inline-block align-middle", {
        "text-zinc-500 dark:text-zinc-400": colorScheme === "gray",
        "text-green-600 dark:text-green-400": colorScheme === "success",
        "text-blue-600 dark:text-blue-400": colorScheme === "info",
        "text-orange-600 dark:text-orange-400": colorScheme === "warning",
        "text-red-600 dark:text-red-400": colorScheme === "danger",
        [customStyle.textColor ?? ""]: colorScheme === undefined,
      })}
    >
      {icon}
    </span>
  );
}
