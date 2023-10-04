import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { MdOutlineInfo } from "react-icons/md";
import Row from "./layout/Row";
import Text from "./typography/Text";
import Icon from "./typography/Icon";

interface Props {
  children: ComponentChildren;
  className?: string;
  tooltip: string;
  isHideIcon?: boolean;
}

export default function Tooltip({
  children,
  className,
  tooltip,
  isHideIcon,
}: Props) {
  return (
    <div className={clsx(className, "relative group pointer-events-none")}>
      <div
        className={clsx(
          "pointer-events-none absolute bottom-full left-0 mb-1 select-none opacity-0 transition-opacity",
          "group-focus:(opacity-100 select-auto pointer-events-auto) group-hover:(opacity-100 select-auto pointer-events-auto)",
        )}
      >
        <Text
          className="max-w-sm rounded-md bg-zinc-800 p-2 shadow"
          color="text-zinc-50 dark:text-zinc-200"
        >
          {tooltip}
        </Text>
      </div>

      <Row
        className="pointer-events-auto w-fit cursor-pointer rounded-md px-2 py-1 hover:bg-zinc-100 hover:dark:bg-zinc-900"
        gap="gap-2"
        verticalCenter
      >
        {!isHideIcon && (
          <Icon>
            <MdOutlineInfo size={18} />
          </Icon>
        )}
        {children}
      </Row>
    </div>
  );
}
