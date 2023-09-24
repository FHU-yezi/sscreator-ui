import type { Signal } from "@preact/signals";
import clsx from "clsx";
import { MdDone } from "react-icons/md";
import { whenEnterOrSpace } from "../utils/keyHelper";
import Center from "./layout/Center";
import Column from "./layout/Column";
import Row from "./layout/Row";
import Text from "./typography/Text";

interface Props {
  label: string;
  value: Signal<boolean>;
  description?: string;
  borderColor?: string;
}

export default function Checkbox({
  label,
  value,
  description,
  borderColor = "border-zinc-200 dark:border-zinc-700",
}: Props) {
  return (
    <Column gap="gap-1.5">
      <Row className="w-fit items-center" gap="gap-2">
        <button
          type="button"
          role="checkbox"
          className={clsx(
            "h-5 w-5 border rounded shadow transition-colors",
            borderColor,
            {
              "bg-white hover:bg-zinc-100 dark:(bg-zinc-800 hover:bg-zinc-900)":
                !value.value,
              "bg-zinc-900 hover:bg-zinc-950": value.value,
            },
          )}
          onClick={() => (value.value = !value.value)}
          onKeyUp={(event) =>
            whenEnterOrSpace(event, () => (value.value = !value.value))
          }
          aria-checked={value.value}
        >
          <Text
            className={clsx("transition-opacity", {
              "opacity-0": !value.value,
            })}
            color="text-zinc-50"
          >
            <Center>
              <MdDone aria-label={`${label}，单选框`} size={18} />
            </Center>
          </Text>
        </button>
        <Text>{label}</Text>
      </Row>
      <Text small gray>
        {description}
      </Text>
    </Column>
  );
}
