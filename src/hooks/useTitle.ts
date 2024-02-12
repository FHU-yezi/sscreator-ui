import { useEffect } from "preact/hooks";

export default function useTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
