import { Badge } from "../../src/main";

export default function BadgePage() {
  return (
    <>
      <Badge>测试 Badge</Badge>
      <Badge color="success" leftIcon="i-mdi-tick-circle">
        测试 Badge Success
      </Badge>
      <Badge color="info">测试 Badge Info</Badge>
      <Badge color="warning">测试 Badge Warning</Badge>
      <Badge color="danger" rightIcon="i-mdi-close-circle">
        测试 Badge Danger
      </Badge>
    </>
  );
}
