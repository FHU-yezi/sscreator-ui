import { BiLoader } from "react-icons/bi";
import Center from "../components/layout/Center";
import Text from "../components/typography/Text";

export default function LoadingPage() {
  return (
    <Center className="h-screen">
      <Text className="motion-safe:animate-spin">
        <BiLoader size={64} />
      </Text>
    </Center>
  );
}
