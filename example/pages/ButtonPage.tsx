import { signal } from "@preact/signals";
import { toast } from "react-hot-toast";
import {
  Checkbox,
  Column,
  Grid,
  Heading1,
  OutlineButton,
  SolidButton,
  TextButton,
} from "../../src/main";

const isLoading = signal(false);
const isDisabled = signal(false);
const isSmall = signal(false);
const isFullWidth = signal(false);

export default function ButtonPage() {
  return (
    <>
      <Grid cols="grid-cols-2">
        <Checkbox id="is-loading" label="Loading" value={isLoading} />
        <Checkbox id="is-disabled" label="Disabled" value={isDisabled} />
        <Checkbox id="is-small" label="Small" value={isSmall} />
        <Checkbox id="is-full-width" label="Full Width" value={isFullWidth} />
      </Grid>

      <Heading1>Solid 按钮</Heading1>
      <Column>
        <SolidButton
          onClick={() => toast("Primary")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Primary
        </SolidButton>
        <SolidButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Secondary
        </SolidButton>
        <SolidButton
          colorScheme="success"
          onClick={() => toast("Success")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Success
        </SolidButton>
        <SolidButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Warning
        </SolidButton>
        <SolidButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Danger
        </SolidButton>
      </Column>

      <Heading1>Outline 按钮</Heading1>
      <Column>
        <OutlineButton
          onClick={() => toast("Primary")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Primary
        </OutlineButton>
        <OutlineButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Secondary
        </OutlineButton>
        <OutlineButton
          colorScheme="success"
          onClick={() => toast("Success")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Success
        </OutlineButton>
        <OutlineButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Warning
        </OutlineButton>
        <OutlineButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Danger
        </OutlineButton>
      </Column>

      <Heading1>Text 按钮</Heading1>
      <Column>
        <TextButton
          onClick={() => toast("Primary")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
        >
          Primary
        </TextButton>
        <TextButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
        >
          Secondary
        </TextButton>
        <TextButton
          colorScheme="success"
          onClick={() => toast("Success")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
        >
          Success
        </TextButton>
        <TextButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
        >
          Warning
        </TextButton>
        <TextButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
        >
          Danger
        </TextButton>
      </Column>
    </>
  );
}
