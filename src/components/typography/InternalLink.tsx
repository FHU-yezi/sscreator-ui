import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { MdOutlineArrowOutward } from "react-icons/md";
import Icon from "./Icon";

interface Props {
  children?: ComponentChildren;
  className?: string;
  onClick(): void;
  path: string;
  hideIcon?: boolean;
  textColor?: string;
}

export default function InternalLink({
  children,
  className,
  onClick,
  path,
  hideIcon = false,
  textColor = "text-blue-600 dark:text-blue-400",
}: Props) {
  return (
    <a
      className={clsx(className, textColor, "inline hover:underline break-all")}
      href={path}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
      {!hideIcon && (
        <Icon className="align-super" iconColor={textColor}>
          <MdOutlineArrowOutward size={14} />
        </Icon>
      )}
    </a>
  );
}
