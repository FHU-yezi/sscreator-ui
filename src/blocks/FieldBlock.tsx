import clsx from "clsx";
import type { ComponentChildren } from "preact";
import Column from "../components/layout/Column";
import Text from "../components/typography/Text";
import LoadingIcon from "../components/LoadingIcon";

interface Props {
  rowClassName?: string;
  fieldTextClassName?: string;
  children: ComponentChildren;
  fieldName: string;
  loading?: boolean;
}

export default function FieldBlock({
  rowClassName,
  fieldTextClassName,
  children,
  fieldName,
  loading = false,
}: Props) {
  return (
    <Column className={clsx(rowClassName, "w-fit")} gap="gap-1">
      <Text className={fieldTextClassName} small gray>
        {fieldName}
      </Text>
      {!loading ? (
        children
      ) : (
        <Text large>
          <LoadingIcon className="mr-1" size={18} />
          加载中...
        </Text>
      )}
    </Column>
  );
}
