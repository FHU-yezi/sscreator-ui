import clsx from "clsx";
import type { ComponentChild, ComponentChildren } from "preact";
import { MdInfoOutline } from "react-icons/md";
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

export default function InfoAlert({
  children,
  className,
  leftIcon = <MdInfoOutline size={28} />,
  padding,
  margin,
  rounded,
  backgroundColor = "bg-blue-50 dark:bg-blue-950",
  borderColor = "border-blue-500 dark:border-blue-600",
  shadowColor = "shadow-blue-500/20 dark:shadow-blue-600/20",
  iconColor = "text-blue-500 dark:text-blue-600",
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
