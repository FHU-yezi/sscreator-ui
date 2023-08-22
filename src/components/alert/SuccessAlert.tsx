import clsx from "clsx";
import type { ComponentChild, ComponentChildren } from "preact";
import { MdDone } from "react-icons/md";
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
  IconColor?: string;
}

export default function SuccessAlert({
  children,
  className,
  leftIcon = <MdDone size={28} />,
  padding,
  margin,
  rounded,
  iconGap,
  backgroundColor = "bg-green-50 dark:bg-green-950",
  borderColor = "border-green-400 dark:border-green-600",
  IconColor = "text-green-400 dark:text-green-600",
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
        <Text color={IconColor} isBold>
          {leftIcon}
        </Text>
        {children}
      </Row>
    </Card>
  );
}
