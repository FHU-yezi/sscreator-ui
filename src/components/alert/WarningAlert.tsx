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
  backgroundColor?: string;
  borderColor?: string;
  shadowColor?: string;
  iconColor?: string;
}

export default function WarningAlert({
  children,
  className,
  leftIcon = <MdErrorOutline size={28} />,
  padding,
  margin,
  rounded,
  backgroundColor = "bg-orange-50 dark:bg-orange-950",
  borderColor = "border-orange-500 dark:border-orange-700",
  shadowColor = "shadow-orange-500/30 dark:shadow-orange-700/30",
  iconColor = "text-orange-500 dark:text-orange-700",
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
        <Text color={iconColor} isBold>
          {leftIcon}
        </Text>
        {children}
      </Row>
    </Card>
  );
}
