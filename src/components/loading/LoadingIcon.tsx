import { VscLoading } from "react-icons/vsc";
import type {
  GrayColorType,
  SemanticColorType,
  UnsetColorType,
} from "../../utils/colorSchemeTypes";
import Icon from "../Icon";

interface Props {
  className?: string;
  colorScheme?: UnsetColorType | SemanticColorType | GrayColorType;
  size: number;
}

export default function LoadingIcon({ className, colorScheme, size }: Props) {
  return (
    <Icon
      className={className}
      colorScheme={colorScheme}
      icon={<VscLoading className="motion-safe:animate-spin" size={size} />}
    />
  );
}
