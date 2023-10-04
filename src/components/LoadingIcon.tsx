import { TbLoader2 } from "react-icons/tb";
import Icon from "./typography/Icon";

interface Props {
  className?: string;
  size?: number;
  iconColor?: string;
}

export default function LoadingIcon({ className, size, iconColor }: Props) {
  return (
    <Icon className={className} iconColor={iconColor}>
      <TbLoader2 className="motion-safe:animate-spin" size={size} />
    </Icon>
  );
}
