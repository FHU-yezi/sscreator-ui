import { Text } from "../../src/main";

interface Props {
  error: Error;
}

export default function ErrorFallback({ error }: Props) {
  // eslint-disable-next-line no-console
  console.error(`${error.name}: ${error.message}\n${error.stack}`);

  return (
    <div>
      <Text>发生意外错误</Text>
      <Text>{error.toString()}</Text>
    </div>
  );
}
