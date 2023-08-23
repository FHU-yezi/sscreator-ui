import { TbLoader2 } from "react-icons/tb";
import Text from "./typography/Text";

interface Props {
  className?: string;
  size?: number;
  noWrapInText?: boolean;
}

export default function LoadingIcon({
  className,
  size,
  noWrapInText = false,
}: Props) {
  if (noWrapInText) {
    return <TbLoader2 className="motion-safe:animate-spin" size={size} />;
  }

  return (
    <Text className={className}>
      <TbLoader2 className="motion-safe:animate-spin" size={size} />
    </Text>
  );
}
