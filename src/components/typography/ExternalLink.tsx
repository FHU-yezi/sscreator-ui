import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { BiLinkExternal } from "react-icons/bi";

interface Props {
  children?: ComponentChildren;
  className?: string;
  href: string;
  openInCurrentTab?: boolean;
  hideIcon?: boolean;
}

export default function ExternalLink({
  children,
  className,
  href,
  openInCurrentTab = false,
  hideIcon = false,
}: Props) {
  return (
    <a
      className={clsx(
        className,
        "inline w-fit hover:underline text-blue-600 dark:text-blue-400 break-all",
      )}
      href={href}
      target={openInCurrentTab ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {children ?? href}
      {!hideIcon && (
        <BiLinkExternal className={clsx(className, "ml-1 inline")} />
      )}
    </a>
  );
}
