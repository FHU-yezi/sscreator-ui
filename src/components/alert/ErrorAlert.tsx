import clsx from "clsx";
import type { ComponentChild, ComponentChildren } from "preact";
import { MdOutlineClose } from "react-icons/md";
import Card from "../Card";
import Row from "../layout/Row";
import Text from "../typography/Text";

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
  shadowColor = "shadow-red-500/30 dark:shadow-red-700/30",
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
        <Text color={iconColor} bold>
          {leftIcon}
        </Text>
        {children}
      </Row>
    </Card>
  );
}
