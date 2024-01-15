import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "wouter-preact";
import { Icon, Text } from "../../src/main";

interface Props {
  name: string;
  path: string;
}

export default function PageCard({ name, path }: Props) {
  const [, setLocation] = useLocation();

  return (
    <button
      type="button"
      className="flex items-center justify-between border border-zinc-300 rounded p-4 dark:border-zinc-700"
      onClick={() => setLocation(path)}
    >
      <Text bold>{name}</Text>
      <Icon icon={<MdKeyboardArrowRight size={24} />} />
    </button>
  );
}
