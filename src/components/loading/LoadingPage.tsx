import { TbLoader2 } from "react-icons/tb";
import Icon from "../Icon";
import Center from "../layout/Center";

export default function LoadingPage() {
  return (
    <Center className="h-screen">
      <Icon
        className="motion-safe:animate-spin"
        icon={<TbLoader2 size={64} />}
      />
    </Center>
  );
}
