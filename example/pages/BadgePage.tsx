import { Badge } from "../../src/main";

export default function BadgePage() {
  return (
    <>
      <Badge>测试 Badge</Badge>
      <Badge colorScheme="success" leftIcon="i-mdi-tick-circle">
        测试 Badge Success
      </Badge>
      <Badge colorScheme="info">测试 Badge Info</Badge>
      <Badge colorScheme="warning">测试 Badge Warning</Badge>
      <Badge colorScheme="danger" rightIcon="i-mdi-close-circle">
        测试 Badge Danger
      </Badge>
    </>
  );
}
