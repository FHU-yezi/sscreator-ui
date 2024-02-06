import Icon from "../Icon";
import Center from "../layout/Center";

export default function LoadingPage() {
  return (
    <Center className="h-screen">
      <Icon
        className="h-[10vh] max-w-[72px] w-[10vw]"
        icon="i-line-md-loading-twotone-loop"
      />
    </Center>
  );
}
