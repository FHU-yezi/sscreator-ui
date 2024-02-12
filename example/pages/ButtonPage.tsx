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
          color="black"
          onClick={() => toast("Black")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Black
        </SolidButton>
        <SolidButton
          color="success"
          onClick={() => toast("Success")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Success
        </SolidButton>
        <SolidButton
          color="warning"
          onClick={() => toast("Warning")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Warning
        </SolidButton>
        <SolidButton
          color="danger"
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
          color="black"
          onClick={() => toast("Black")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Black
        </OutlineButton>
        <OutlineButton
          color="success"
          onClick={() => toast("Success")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Success
        </OutlineButton>
        <OutlineButton
          color="warning"
          onClick={() => toast("Warning")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
          fullWidth={isFullWidth.value}
        >
          Warning
        </OutlineButton>
        <OutlineButton
          color="danger"
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
          color="black"
          onClick={() => toast("Black")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
        >
          Black
        </TextButton>
        <TextButton
          color="success"
          onClick={() => toast("Success")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
        >
          Success
        </TextButton>
        <TextButton
          color="warning"
          onClick={() => toast("Warning")}
          loading={isLoading.value}
          disabled={isDisabled.value}
          small={isSmall.value}
        >
          Warning
        </TextButton>
        <TextButton
          color="danger"
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
