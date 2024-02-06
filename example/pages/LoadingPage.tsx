import { signal } from "@preact/signals";
import { Checkbox, LoadingArea, LoadingIcon, Row, Text } from "../../src/main";

const isLoading = signal(true);

export default function LoadingAreaPage() {
  return (
    <>
      <Row>
        <LoadingIcon />
        <LoadingIcon colorScheme="gray" />
        <LoadingIcon colorScheme="success" />
        <LoadingIcon colorScheme="info" />
        <LoadingIcon colorScheme="warning" />
        <LoadingIcon colorScheme="danger" />
      </Row>

      <Checkbox id="is-loading" label="Loading" value={isLoading} />
      <LoadingArea className="h-36" loading={isLoading.value}>
        <Text>Some Data</Text>
      </LoadingArea>
    </>
  );
}
