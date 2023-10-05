import { TbLoader2 } from "react-icons/tb";
import Center from "../components/layout/Center";
import Icon from "../components/typography/Icon";

export default function LoadingPage() {
  return (
    <Center className="h-screen">
      <Icon className="motion-safe:animate-spin">
        <TbLoader2 size={64} />
      </Icon>
    </Center>
  );
}
