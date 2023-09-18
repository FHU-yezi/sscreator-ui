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
  iconGap?: string;
  backgroundColor?: string;
  borderColor?: string;
  iconColor?: string;
}

export default function ErrorAlert({
  children,
  className,
  leftIcon = <MdOutlineClose size={28} />,
  padding,
  margin,
  rounded,
  iconGap,
  backgroundColor = "bg-red-50 dark:bg-red-950",
  borderColor = "border-red-400 dark:border-red-600",
  iconColor = "text-red-400 dark:text-red-600",
}: Props) {
  return (
    <Card
      className={clsx(className, backgroundColor)}
      padding={padding}
      margin={margin}
      rounded={rounded}
      borderColor={borderColor}
    >
      <Row gap={iconGap}>
        <Text color={iconColor} isBold>
          {leftIcon}
        </Text>
        {children}
      </Row>
    </Card>
  );
}
