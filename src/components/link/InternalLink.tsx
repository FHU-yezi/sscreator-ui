import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type { UnsetColorType } from "../../utils/colorSchemeTypes";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  children: ComponentChildren;
  className?: string;
  path: string;
  onClick(): void;
  colorScheme?: UnsetColorType;
}

export default function InternalLink({
  children,
  className,
  path,
  onClick,
  colorScheme,
  ...props
}: Props) {
  return (
    <a
      className={clsx("underline", className, {
        "text-blue-600 dark:text-blue-400": !colorScheme,
      })}
      href={path}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      {...props}
    >
      {children}
    </a>
  );
}
