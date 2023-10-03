import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useLocation } from "wouter-preact";
import Icon from "./Icon";

interface Props {
  children?: ComponentChildren;
  className?: string;
  path: string;
  hideIcon?: boolean;
}

export default function InternalLink({
  children,
  className,
  path,
  hideIcon = false,
}: Props) {
  const [, setLocation] = useLocation();

  return (
    <a
      className={clsx(
        className,
        "inline w-fit hover:underline text-blue-600 dark:text-blue-400 break-all",
      )}
      href={path}
      onClick={(event) => {
        event.preventDefault();
        setLocation(path);
      }}
    >
      {children ?? path}
      {!hideIcon && (
        <Icon className="ml-1" color="text-blue-600 dark:text-blue-400">
          <MdOutlineArrowOutward size={18} />
        </Icon>
      )}
    </a>
  );
}
