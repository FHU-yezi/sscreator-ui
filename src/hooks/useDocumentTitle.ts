import { useEffect } from "preact/hooks";

export default function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
