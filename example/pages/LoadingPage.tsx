import { signal } from "@preact/signals";
import { Checkbox, LoadingArea, LoadingIcon, Row, Text } from "../../src/main";

const isLoading = signal(true);

export default function LoadingAreaPage() {
  return (
    <>
      <Row>
        <LoadingIcon size={36} />
        <LoadingIcon colorScheme="gray" size={36} />
        <LoadingIcon colorScheme="success" size={36} />
        <LoadingIcon colorScheme="info" size={36} />
        <LoadingIcon colorScheme="warning" size={36} />
        <LoadingIcon colorScheme="danger" size={36} />
      </Row>

      <Checkbox id="is-loading" label="Loading" value={isLoading} />
      <LoadingArea className="h-36" loading={isLoading.value}>
        <Text>Some Data</Text>
      </LoadingArea>
    </>
  );
}
