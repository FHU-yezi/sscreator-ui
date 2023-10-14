import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { ComponentChild } from "preact";
import InputWrapper from "./input/InputWrapper";
import Center from "./layout/Center";
import Row from "./layout/Row";
import Text from "./typography/Text";

interface DataItem<T> {
  label: string;
  value: T;
  leftIcon?: ComponentChild;
}

interface Props<T> {
  label?: string;
  value: Signal<T>;
  description?: string;
  data: DataItem<T>[];
  backgroundColor?: string;
}

export default function Switch<T extends ComponentChild>({
  label,
  value,
  description,
  data,
  backgroundColor = "bg-zinc-50 dark:bg-zinc-900",
}: Props<T>) {
  return (
    <InputWrapper label={label} description={description}>
      <Row
        className={clsx(
          "space-between flex-nowrap overflow-x-auto",
          backgroundColor,
        )}
        gap="gap-0"
      >
        {data.map((item) => (
          <button
            type="button"
            className={clsx(
              "flex-1 border-y p-2 even:border-x transition-colors first:(border-l rounded-l) last:(border-r rounded-r) border-zinc-200 dark:border-zinc-700",
              {
                "bg-blue-600 dark:bg-blue-700": item.value === value.value,
              },
            )}
            onClick={() => (value.value = item.value)}
          >
            <Center>
              <Text
                color={item.value === value.value ? "text-zinc-50" : undefined}
                nowrap
              >
                {item.leftIcon}
                {item.label}
              </Text>
            </Center>
          </button>
        ))}
      </Row>
    </InputWrapper>
  );
}
