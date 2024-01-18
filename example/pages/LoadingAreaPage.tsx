import { signal } from "@preact/signals";
import { Checkbox, LoadingArea, Text } from "../../src/main";

const isLoading = signal(true);

export default function LoadingAreaPage() {
  return (
    <>
      <Checkbox id="is-loading" label="Loading" value={isLoading} />
      <LoadingArea className="h-36" loading={isLoading.value}>
        <Text>Some Data</Text>
      </LoadingArea>
    </>
  );
}
