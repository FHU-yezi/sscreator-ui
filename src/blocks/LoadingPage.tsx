import LoadingIcon from "../components/LoadingIcon";
import Center from "../components/layout/Center";

export default function LoadingPage() {
  return (
    <Center className="h-screen">
      <LoadingIcon size={64} />
    </Center>
  );
}
