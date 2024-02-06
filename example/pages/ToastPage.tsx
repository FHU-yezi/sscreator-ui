import {
  SolidButton,
  toastDanger,
  toastSuccess,
  toastWarning,
} from "../../src/main";

export default function ToastPage() {
  return (
    <>
      <SolidButton
        colorScheme="success"
        onClick={() => toastSuccess("Success")}
      >
        Success
      </SolidButton>
      <SolidButton
        colorScheme="warning"
        onClick={() => toastWarning("Warning")}
      >
        Warning
      </SolidButton>
      <SolidButton colorScheme="danger" onClick={() => toastDanger("Danger")}>
        Danger
      </SolidButton>
    </>
  );
}
