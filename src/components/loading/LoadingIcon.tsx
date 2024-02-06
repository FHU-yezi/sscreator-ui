import type {
  GrayColorType,
  SemanticColorType,
  UnsetColorType,
} from "../../utils/colorSchemeTypes";
import Icon from "../Icon";

interface Props {
  className?: string;
  colorScheme?: UnsetColorType | SemanticColorType | GrayColorType;
}

export default function LoadingIcon({ className, colorScheme }: Props) {
  return (
    <Icon
      className={className}
      colorScheme={colorScheme}
      icon="i-line-md-loading-twotone-loop"
    />
  );
}
