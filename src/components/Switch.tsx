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
              "flex-1 border-y-2 p-2 even:border-x-2 transition-colors first:(border-l-2 rounded-l) last:(border-r-2 rounded-r)",
              {
                "border-zinc-200 dark:border-zinc-700":
                  item.value !== value.value,
                "bg-zinc-700 border-zinc-700 dark:(bg-zinc-600 border-zinc-600)":
                  item.value === value.value,
              },
            )}
            onClick={() => (value.value = item.value)}
          >
            <Center>
              <Row gap="gap-1" verticalCenter>
                <Text
                  color={
                    item.value === value.value ? "text-zinc-50" : undefined
                  }
                >
                  {item.leftIcon}
                </Text>
                <Text
                  className="whitespace-nowrap"
                  color={
                    item.value === value.value ? "text-zinc-50" : undefined
                  }
                >
                  {item.label}
                </Text>
              </Row>
            </Center>
          </button>
        ))}
      </Row>
    </InputWrapper>
  );
}
