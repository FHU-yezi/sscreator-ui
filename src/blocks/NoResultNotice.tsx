import clsx from "clsx";
import { BsDatabaseSlash } from "react-icons/bs";
import Column from "../components/layout/Column";
import Icon from "../components/typography/Icon";
import Text from "../components/typography/Text";

interface Props {
  className?: string;
  message?: string;
}

export default function NoResultNotice({
  className,
  message = "没有找到对应的数据",
}: Props) {
  return (
    <Column className={clsx(className, "items-center")}>
      <Icon>
        <BsDatabaseSlash size={36} />
      </Icon>
      <Text large bold>
        {message}
      </Text>
    </Column>
  );
}
