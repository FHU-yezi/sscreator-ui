import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type { SemanticColorType, UnsetColorType } from "../types/colorTypes";
import Card from "./Card";
import Icon from "./Icon";
import Row from "./layout/Row";
import LargeText from "./text/LargeText";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ComponentChildren;
  className?: string;
  color: UnsetColorType | SemanticColorType;
  title?: string;
}

export default function Notice({
  children,
  className,
  color,
  title,
  ...props
}: Props) {
  return (
    <Card
      className={clsx("flex flex-col gap-1 p-4", className, {
        "bg-green-100 dark:bg-green-950": color === "success",
        "bg-blue-100 dark:bg-blue-950": color === "info",
        "bg-orange-100 dark:bg-orange-950": color === "warning",
        "bg-red-100 dark:bg-red-950": color === "danger",
      })}
      borderless
      {...props}
    >
      <Row gap="gap-1" itemsCenter>
        {color !== "unset" && (
          <Icon
            className="text-2xl"
            icon={
              {
                success: "i-mdi-tick-circle",
                info: "i-mdi-information",
                warning: "i-mdi-warning",
                danger: "i-mdi-close-circle",
              }[color]
            }
            color={color}
          />
        )}
        {title && (
          <LargeText color={color} bold>
            {title}
          </LargeText>
        )}
      </Row>
      {children}
    </Card>
  );
}
