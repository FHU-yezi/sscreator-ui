import { signal } from "@preact/signals";
import { Accordion, Text } from "../../src/main";

const isOpened = signal(false);

export default function AccordionPage() {
  return (
    <Accordion label="测试 Accordion" open={isOpened}>
      <Text>测试行 1</Text>
    </Accordion>
  );
}
