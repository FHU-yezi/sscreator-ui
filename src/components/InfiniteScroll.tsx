import type { ComponentChildren } from "preact";
import { useEffect, useMemo, useRef } from "preact/hooks";
import Center from "./layout/Center";
import LoadingIcon from "./loading/LoadingIcon";

interface Props {
  children: ComponentChildren;
  onLoadMore(): void;
  hasMore: boolean;
  isLoading: boolean;
}

export default function InfiniteScroll({
  children,
  onLoadMore,
  hasMore,
  isLoading,
}: Props) {
  const detector = useRef<HTMLDivElement>(null);
  const observer = useMemo(
    () =>
      new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0) {
          onLoadMore();
        }
      }),
    [],
  );

  useEffect(() => {
    if (hasMore) {
      observer.observe(detector.current!);
    } else {
      observer.unobserve(detector.current!);
    }

    return () => observer.unobserve(detector.current!);
  }, [hasMore]);

  return (
    <div className="relative">
      {children}
      <div
        ref={detector}
        className="pointer-events-none absolute bottom-10 h-1 w-full"
        aria-hidden
      />
      {isLoading && (
        <Center className="mt-2">
          <LoadingIcon className="text-2xl" />
        </Center>
      )}
    </div>
  );
}
