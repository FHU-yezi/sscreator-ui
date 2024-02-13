import { Signal, useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

export default function useDebouncedSignal<T>(
  signal: Signal<T>,
  debounceTime: number,
) {
  const debouncedSignal = useSignal<T>(signal.value);
  const timerRef = useRef<number | undefined>();

  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      debouncedSignal.value = signal.value;
    }, debounceTime);
  }, [signal.value, debounceTime]);

  return debouncedSignal;
}
