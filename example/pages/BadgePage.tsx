import { MdCheck, MdClose } from "react-icons/md";
import { Badge } from "../../src/main";

export default function BadgePage() {
  return (
    <>
      <Badge>测试 Badge</Badge>
      <Badge colorScheme="success" leftIcon={<MdCheck size={24} />}>
        测试 Badge Success
      </Badge>
      <Badge colorScheme="info">测试 Badge Info</Badge>
      <Badge colorScheme="warning">测试 Badge Warning</Badge>
      <Badge colorScheme="danger" rightIcon={<MdClose size={24} />}>
        测试 Badge Danger
      </Badge>
    </>
  );
}
