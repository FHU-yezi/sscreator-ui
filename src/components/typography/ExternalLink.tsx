import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { MdOutlineArrowOutward } from "react-icons/md";
import Icon from "./Icon";

interface Props {
  children?: ComponentChildren;
  className?: string;
  href: string;
  openInCurrentTab?: boolean;
  hideIcon?: boolean;
  textColor?: string;
}

export default function ExternalLink({
  children,
  className,
  href,
  openInCurrentTab = false,
  hideIcon = false,
  textColor = "text-blue-600 dark:text-blue-400",
}: Props) {
  return (
    <a
      className={clsx(className, textColor, "inline hover:underline break-all")}
      href={href}
      target={openInCurrentTab ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {children ?? href}
      {!hideIcon && (
        <Icon className="align-super" iconColor={textColor}>
          <MdOutlineArrowOutward size={14} />
        </Icon>
      )}
    </a>
  );
}
