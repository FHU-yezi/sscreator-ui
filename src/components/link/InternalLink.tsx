import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import { useLocation } from "wouter-preact";
import type { UnsetColorType } from "../../types/colorSchemeTypes";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  children: ComponentChildren;
  className?: string;
  path: string;
  colorScheme?: UnsetColorType;
}

export default function InternalLink({
  children,
  className,
  path,
  colorScheme,
  ...props
}: Props) {
  const [, setLocation] = useLocation();

  return (
    <a
      className={clsx("underline", className, {
        "text-blue-600 dark:text-blue-400": !colorScheme,
      })}
      href={path}
      onClick={(event) => {
        event.preventDefault();
        setLocation(path);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
