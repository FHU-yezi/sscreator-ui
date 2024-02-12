import { signal } from "@preact/signals";
import { Checkbox, LoadingArea, LoadingIcon, Row, Text } from "../../src/main";

const isLoading = signal(true);

export default function LoadingAreaPage() {
  return (
    <>
      <Row>
        <LoadingIcon />
        <LoadingIcon color="gray" />
        <LoadingIcon color="success" />
        <LoadingIcon color="info" />
        <LoadingIcon color="warning" />
        <LoadingIcon color="danger" />
      </Row>

      <Checkbox id="is-loading" label="Loading" value={isLoading} />
      <LoadingArea className="h-36" loading={isLoading.value}>
        <Text>Some Data</Text>
      </LoadingArea>
    </>
  );
}
