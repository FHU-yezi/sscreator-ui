/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { Signal } from "@preact/signals";
import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { useEffect, useMemo } from "preact/hooks";
import { MdOutlineClose } from "react-icons/md";
import OutlineIconButton from "./button/OutlineIconButton";
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
  isOpen: Signal<boolean>;
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
  isOpen,
  title,
  backgroundColor = "bg-zinc-50 dark:bg-zinc-900",
  padding = "px-6 pb-8 pt-4",
  rounded = "sm:rounded-lg",
  hideCloseButton,
  preventCloseByClickMask = false,
  preventCloseByPressEsc = false,
}: Props) {
  const onClose = () => {
    isOpen.value = false;
    document.body.style.overflowY = "";
  };
  const onKeyDown = useMemo(
    () =>
      !preventCloseByPressEsc ? closeModalWhenEscPressed(onClose) : undefined,
    [preventCloseByPressEsc],
  );

  //  Modal 展示时禁止下层元素滚动
  useEffect(() => {
    if (isOpen.value) {
      document.body.style.overflowY = "hidden";
    }
  }, [isOpen.value]);

  // 如果没有显式禁止，允许用户通过按下 Esc 关闭 Modal
  useEffect(() => {
    if (!preventCloseByPressEsc) {
      if (isOpen.value) {
        document.addEventListener("keydown", onKeyDown!);
      } else {
        document.removeEventListener("keydown", onKeyDown!);
      }
    }
  }, [isOpen.value]);
  return (
    <>
      {/* 遮罩层 */}
      <div
        className={clsx(
          "fixed left-0 top-0 z-20 h-screen w-screen transition-opacity",
          {
            "pointer-events-none opacity-0": !isOpen.value,
            "bg-black dark:bg-white opacity-20": isOpen.value,
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
            "pointer-events-none opacity-0": !isOpen.value,
            "opacity-100": isOpen.value,
          },
        )}
      >
        <Column>
          <Row className="items-center justify-between">
            <Text isLarge isBold>
              {title}
            </Text>
            {!hideCloseButton && (
              <OutlineIconButton onClick={onClose} label="关闭" isBorderLess>
                <MdOutlineClose size={24} />
              </OutlineIconButton>
            )}
          </Row>
          {children}
        </Column>
      </div>
    </>
  );
}