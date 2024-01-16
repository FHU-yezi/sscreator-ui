import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import {
  MdCheck,
  MdClose,
  MdInfoOutline,
  MdWarningAmber,
} from "react-icons/md";
import type { SemanticColorType } from "../utils/colorSchemeTypes";
import Icon from "./Icon";
import Row from "./layout/Row";
import LargeText from "./text/LargeText";

interface CustomStyle {
  backgroundColor?: string;
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ComponentChildren;
  title?: string;
  colorScheme?: SemanticColorType;
  customStyle?: CustomStyle;
}

export default function Notice({
  children,
  title,
  colorScheme,
  customStyle = {},
  ...props
}: Props) {
  return (
    <div
      className={clsx("p-4 rounded-lg shadow", {
        "bg-green-100 dark:bg-green-950": colorScheme === "success",
        "bg-blue-100 dark:bg-blue-950": colorScheme === "info",
        "bg-orange-100 dark:bg-orange-950": colorScheme === "warning",
        "bg-red-100 dark:bg-red-950": colorScheme === "danger",
        [customStyle.backgroundColor ?? ""]: colorScheme === undefined,
      })}
      {...props}
    >
      <Row className="mb-1" gap="gap-1" itemsCenter nowrap>
        {colorScheme && (
          <Icon
            className="inline-block"
            icon={
              {
                success: <MdCheck size={26} />,
                info: <MdInfoOutline size={26} />,
                warning: <MdWarningAmber size={26} />,
                danger: <MdClose size={26} />,
              }[colorScheme]
            }
            colorScheme={colorScheme}
          />
        )}
        {title && (
          <LargeText colorScheme={colorScheme} bold>
            {title}
          </LargeText>
        )}
      </Row>
      {children}
    </div>
  );
}
