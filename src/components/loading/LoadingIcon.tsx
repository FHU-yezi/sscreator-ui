import type {
  GrayColorType,
  SemanticColorType,
  UnsetColorType,
} from "../../types/colorTypes";
import Icon from "../Icon";

interface Props {
  className?: string;
  color?: UnsetColorType | SemanticColorType | GrayColorType;
}

export default function LoadingIcon({ className, color }: Props) {
  return (
    <Icon
      className={className}
      color={color}
      icon="i-line-md-loading-twotone-loop"
    />
  );
}
