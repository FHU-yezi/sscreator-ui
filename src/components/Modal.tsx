import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { MdClose } from "react-icons/md";
import type { SemanticColorType } from "../utils/colorSchemeTypes";
import TextButton from "./button/TextButton";
import Row from "./layout/Row";
import LargeText from "./text/LargeText";

interface Props {
  children: ComponentChildren;
  open: Signal<boolean>;
  title: string;
  notCloseable?: boolean;
  colorScheme?: SemanticColorType;
  zIndex?: number;
}

export default function Modal({
  children,
  open,
  title,
  notCloseable = false,
  colorScheme,
  zIndex = 20,
}: Props) {
  return (
    <>
      {/* 遮罩层 */}
      <div
        className={clsx(
          "fixed left-0 top-0 h-screen w-screen bg-black dark:bg-white transition-opacity",
          {
            "pointer-events-none opacity-0": !open.value,
            "opacity-20": open.value,
          },
        )}
        onClick={!notCloseable ? () => (open.value = false) : undefined}
        style={{
          zIndex: zIndex - 1,
        }}
        aria-hidden
      />

      {/* 模态窗 */}
      <div
        className={clsx(
          "fixed left-[50vw] top-[50vh] rounded w-[90vw] max-w-2xl bg-white p-4 dark:bg-zinc-900 transition-opacity -translate-1/2 max-h-[90vh] overflow-y-auto",
          {
            "pointer-events-none opacity-0": !open.value,
          },
        )}
        style={{
          zIndex,
        }}
        aria-hidden={!open.value}
      >
        <Row className="mb-3 justify-between" itemsCenter>
          <LargeText colorScheme={colorScheme} bold>
            {title}
          </LargeText>
          {!notCloseable && (
            <TextButton
              colorScheme="secondary"
              leftIcon={<MdClose size={28} />}
              onClick={() => (open.value = false)}
            />
          )}
        </Row>
        {children}
      </div>
    </>
  );
}
