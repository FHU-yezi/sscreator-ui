import { BiLoader } from "react-icons/bi";
import Center from "../components/layout/Center";
import Icon from "../components/typography/Icon";

export default function LoadingPage() {
  return (
    <Center className="h-screen">
      <Icon className="motion-safe:animate-spin">
        <BiLoader size={64} />
      </Icon>
    </Center>
  );
}
