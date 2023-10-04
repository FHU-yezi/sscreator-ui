/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { useEffect, useMemo } from "preact/hooks";
import { MdOutlineClose } from "react-icons/md";
import GhostButton from "./button/GhostButton";
import Column from "./layout/Column";
import Row from "./layout/Row";
import Text from "./typography/Text";

function closeModalWhenEscPressed(onClose: () => void) {
  return (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
}

interface Props {
  children: ComponentChildren;
  className?: string;
  open: Signal<boolean>;
  title?: string;
  backgroundColor?: string;
  padding?: string;
  rounded?: string;
  hideCloseButton?: boolean;
  preventCloseByClickMask?: boolean;
  preventCloseByPressEsc?: boolean;
}

export default function Modal({
  children,
  className,
  open,
  title,
  backgroundColor = "bg-zinc-50 dark:bg-zinc-900",
  padding = "px-6 pb-8 pt-4",
  rounded = "sm:rounded-lg",
  hideCloseButton,
  preventCloseByClickMask = false,
  preventCloseByPressEsc = false,
}: Props) {
  const onClose = () => {
    open.value = false;
    document.body.style.overflowY = "";
  };
  const onKeyDown = useMemo(
    () =>
      !preventCloseByPressEsc ? closeModalWhenEscPressed(onClose) : undefined,
    [preventCloseByPressEsc],
  );

  //  Modal 展示时禁止下层元素滚动
  useEffect(() => {
    if (open.value) {
      document.body.style.overflowY = "hidden";
    }
  }, [open.value]);

  // 如果没有显式禁止，允许用户通过按下 Esc 关闭 Modal
  useEffect(() => {
    if (!preventCloseByPressEsc) {
      if (open.value) {
        document.addEventListener("keydown", onKeyDown!);
      } else {
        document.removeEventListener("keydown", onKeyDown!);
      }
    }
  }, [open.value]);
  return (
    <>
      {/* 遮罩层 */}
      <div
        className={clsx(
          "fixed left-0 top-0 z-20 h-screen w-screen transition-opacity",
          {
            "pointer-events-none opacity-0": !open.value,
            "bg-black dark:bg-white opacity-20": open.value,
          },
        )}
        onClick={!preventCloseByClickMask ? onClose : undefined}
      />

      {/* 模态窗 */}
      <div
        className={clsx(
          className,
          "fixed left-0 top-0 h-screen w-screen z-30 transition-opacity",
          "sm:(h-fit w-[90vw] max-w-4xl left-[50vw] top-[50vh] -translate-1/2 shadow rounded-lg)",
          backgroundColor,
          padding,
          rounded,
          {
            "pointer-events-none opacity-0": !open.value,
            "opacity-100": open.value,
          },
        )}
      >
        <Column>
          <Row className="items-center justify-between">
            <Text large bold>
              {title}
            </Text>
            {!hideCloseButton && (
              <GhostButton
                onClick={onClose}
                textColor="text-zinc-950 dark:text-zinc-50"
                hoverBackgroundColor="hover:bg-zinc-200 dark:hover:bg-zinc-800"
                ariaLabel="关闭"
                iconOnly
              >
                <MdOutlineClose size={24} />
              </GhostButton>
            )}
          </Row>
          {children}
        </Column>
      </div>
    </>
  );
}
