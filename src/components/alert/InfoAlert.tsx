import clsx from "clsx";
import type { ComponentChild, ComponentChildren } from "preact";
import { MdInfoOutline } from "react-icons/md";
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

export default function InfoAlert({
  children,
  className,
  leftIcon = <MdInfoOutline size={28} />,
  padding,
  margin,
  rounded,
  iconGap,
  backgroundColor = "bg-blue-50 dark:bg-blue-950",
  borderColor = "border-blue-400 dark:border-blue-600",
  iconColor = "text-blue-400 dark:text-blue-600",
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
