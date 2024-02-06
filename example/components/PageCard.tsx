import { useLocation } from "wouter-preact";
import { Card, Icon, Text } from "../../src/main";

interface Props {
  name: string;
  path: string;
}

export default function PageCard({ name, path }: Props) {
  const [, setLocation] = useLocation();

  return (
    <button type="button" onClick={() => setLocation(path)}>
      <Card className="flex justify-between" withPadding>
        <Text bold>{name}</Text>
        <Icon className="text-2xl" icon="i-mdi-keyboard-arrow-right" />
      </Card>
    </button>
  );
}
