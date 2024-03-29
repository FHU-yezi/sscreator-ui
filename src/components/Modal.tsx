import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import type { SemanticColorType } from "../types/colorTypes";
import TextButton from "./button/TextButton";
import Row from "./layout/Row";
import LargeText from "./text/LargeText";

interface Props {
  children: ComponentChildren;
  open: Signal<boolean>;
  title: string;
  notCloseable?: boolean;
  color?: SemanticColorType;
  zIndex?: number;
}

export default function Modal({
  children,
  color,
  open,
  title,
  notCloseable = false,
  zIndex = 20,
}: Props) {
  const onEsc = useCallback((event: KeyboardEvent) => {
    if (event.code === "Escape") {
      open.value = false;
    }
  }, []);

  // 如果 Modal 被设置为可以关闭，则支持 Esc 关闭
  useEffect(() => {
    document.removeEventListener("keyup", onEsc);

    if (!notCloseable && open.value) {
      document.addEventListener("keyup", onEsc);
    }

    return () => document.removeEventListener("keyup", onEsc);
  }, [notCloseable, open.value]);

  // Modal 弹出时禁止页面滚动
  useEffect(() => {
    if (open.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open.value]);

  return (
    <>
      {/* 遮罩层 */}
      <div
        className={clsx(
          "fixed left-0 top-0 h-screen w-screen bg-black transition-opacity",
          {
            "pointer-events-none opacity-0": !open.value,
            "opacity-30": open.value,
          },
        )}
        onClick={
          !notCloseable
            ? () => {
                open.value = false;
              }
            : undefined
        }
        onKeyUp={
          !notCloseable
            ? () => {
                open.value = false;
              }
            : undefined
        }
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
          <LargeText color={color} bold>
            {title}
          </LargeText>
          {!notCloseable && (
            <TextButton
              className="text-2xl"
              color="black"
              leftIcon="i-mdi-close"
              onClick={() => {
                open.value = false;
              }}
            />
          )}
        </Row>
        {children}
      </div>
    </>
  );
}
