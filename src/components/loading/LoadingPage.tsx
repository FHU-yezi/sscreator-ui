import { VscLoading } from "react-icons/vsc";
import Icon from "../Icon";
import Center from "../layout/Center";

export default function LoadingPage() {
  return (
    <Center className="h-screen">
      <Icon
        className=""
        icon={
          <VscLoading className="h-[10vh] max-w-[72px] w-[10vw] motion-safe:animate-spin" />
        }
      />
    </Center>
  );
}
