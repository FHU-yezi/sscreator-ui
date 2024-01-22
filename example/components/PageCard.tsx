import { MdKeyboardArrowRight } from "react-icons/md";
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
        <Icon icon={<MdKeyboardArrowRight size={24} />} />
      </Card>
    </button>
  );
}
