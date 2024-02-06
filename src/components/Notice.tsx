import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  SemanticColorType,
  UnsetColorType,
} from "../utils/colorSchemeTypes";
import Card from "./Card";
import Icon from "./Icon";
import Row from "./layout/Row";
import LargeText from "./text/LargeText";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ComponentChildren;
  className?: string;
  title?: string;
  colorScheme: UnsetColorType | SemanticColorType;
}

export default function Notice({
  children,
  className,
  title,
  colorScheme,
  ...props
}: Props) {
  return (
    <Card
      className={clsx("flex flex-col gap-1 p-4", className, {
        "bg-green-100 dark:bg-green-950": colorScheme === "success",
        "bg-blue-100 dark:bg-blue-950": colorScheme === "info",
        "bg-orange-100 dark:bg-orange-950": colorScheme === "warning",
        "bg-red-100 dark:bg-red-950": colorScheme === "danger",
      })}
      borderless
      {...props}
    >
      <Row gap="gap-1" itemsCenter>
        {colorScheme !== "unset" && (
          <Icon
            className="text-2xl"
            icon={
              {
                success: "i-mdi-tick-circle",
                info: "i-mdi-information",
                warning: "i-mdi-warning",
                danger: "i-mdi-close-circle",
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
    </Card>
  );
}
