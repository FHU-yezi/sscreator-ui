import { signal } from "@preact/signals";
import {
  Checkbox,
  Column,
  Modal,
  OutlineButton,
  Row,
  SolidButton,
  Text,
} from "../../src/main";

const isOpened = signal(false);
const isNotCloseable = signal(false);

export default function ModalPage() {
  return (
    <>
      <Checkbox
        id="is-not-closeable"
        label="Not Closeable"
        value={isNotCloseable}
      />
      <SolidButton
        colorScheme="primary"
        onClick={() => (isOpened.value = true)}
      >
        Open Modal
      </SolidButton>

      <Modal
        open={isOpened}
        title="删除文集？"
        colorScheme="danger"
        notCloseable={isNotCloseable.value}
      >
        <Column>
          <Text>这将使该文集中的 18 篇文章进入默认文集。</Text>
          <Text>此操作不可撤销。</Text>
          <Row className="justify-end" gap="gap-2">
            <OutlineButton
              colorScheme="secondary"
              onClick={() => (isOpened.value = false)}
            >
              取消
            </OutlineButton>
            <SolidButton
              colorScheme="danger"
              onClick={() => (isOpened.value = false)}
            >
              删除文集
            </SolidButton>
          </Row>
        </Column>
      </Modal>
    </>
  );
}