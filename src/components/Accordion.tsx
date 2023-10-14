import { useSignal } from "@preact/signals";
import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Card from "./Card";
import Column from "./layout/Column";
import Row from "./layout/Row";
import Icon from "./typography/Icon";
import Text from "./typography/Text";

interface Props {
  children: ComponentChildren;
  cardClassName?: string;
  title: string;
  initialOpen?: boolean;
}

export default function Accordion({
  children,
  cardClassName,
  title,
  initialOpen = false,
}: Props) {
  const isOpened = useSignal(initialOpen);

  return (
    <Card className={clsx(cardClassName)}>
      <Column gap="gap-0">
        <button
          type="button"
          onClick={() => (isOpened.value = !isOpened.value)}
        >
          <Row className="justify-between" verticalCenter>
            <Text large bold>
              {title}
            </Text>
            <Icon>
              <MdOutlineKeyboardArrowUp
                className={clsx("transition-transform duration-300", {
                  "-rotate-180": isOpened.value,
                })}
                size={24}
              />
            </Icon>
          </Row>
        </button>
        <div
          className={clsx("overflow-y-hidden", {
            "h-0": !isOpened.value,
            "h-auto pt-4": isOpened.value,
          })}
        >
          {children}
        </div>
      </Column>
    </Card>
  );
}
