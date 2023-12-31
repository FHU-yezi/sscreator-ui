import clsx from "clsx";
import type { ComponentChild, ComponentChildren } from "preact";
import { MdOutlineClose } from "react-icons/md";
import Card from "../Card";
import Row from "../layout/Row";
import Icon from "../typography/Icon";

interface Props {
  children: ComponentChildren;
  className?: string;
  leftIcon?: ComponentChild;
  padding?: string;
  margin?: string;
  rounded?: string;
  backgroundColor?: string;
  borderColor?: string;
  shadowColor?: string;
  iconColor?: string;
}

export default function ErrorAlert({
  children,
  className,
  leftIcon = <MdOutlineClose size={28} />,
  padding,
  margin,
  rounded,
  backgroundColor = "bg-red-50 dark:bg-red-950",
  borderColor = "border-red-500 dark:border-red-700",
  shadowColor = "shadow-red-500/20 dark:shadow-red-700/20",
  iconColor = "text-red-500 dark:text-red-700",
}: Props) {
  return (
    <Card
      className={clsx(className, backgroundColor)}
      padding={padding}
      margin={margin}
      rounded={rounded}
      borderColor={borderColor}
      shadowColor={shadowColor}
    >
      <Row>
        <Icon className="font-semibold" iconColor={iconColor}>
          {leftIcon}
        </Icon>
        {children}
      </Row>
    </Card>
  );
}
