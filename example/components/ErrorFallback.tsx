import type { FallbackComponentProps } from "../../src/components/ErrorBoundary";
import { Center, Text } from "../../src/main";

export default function ErrorFallback({ error }: FallbackComponentProps) {
  return (
    <Center className="h-screen">
      <Text isBold>发生意外错误</Text>
      <Text isGray>{error.toString()}</Text>
    </Center>
  );
}
