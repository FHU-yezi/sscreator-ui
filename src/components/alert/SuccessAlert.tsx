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
  backgroundColor?: string;
  borderColor?: string;
  shadowColor?: string;
  iconColor?: string;
}

export default function SuccessAlert({
  children,
  className,
  leftIcon = <MdDone size={28} />,
  padding,
  margin,
  rounded,
  backgroundColor = "bg-green-50 dark:bg-green-950",
  borderColor = "border-green-500 dark:border-green-700",
  shadowColor = "shadow-green-500/30 dark:shadow-green-700/30",
  iconColor = "text-green-500 text-green-700",
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
