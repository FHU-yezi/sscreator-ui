import clsx from "clsx";
import type { ComponentChild, ComponentChildren } from "preact";
import { MdErrorOutline } from "react-icons/md";
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

export default function WarningAlert({
  children,
  className,
  leftIcon = <MdErrorOutline size={28} />,
  padding,
  margin,
  rounded,
  iconGap,
  backgroundColor = "bg-orange-50 dark:bg-orange-950",
  borderColor = "border-orange-400 dark:border-orange-600",
  IconColor = "text-orange-400 dark:text-orange-600",
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
