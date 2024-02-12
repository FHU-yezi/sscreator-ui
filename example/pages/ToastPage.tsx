import {
  SolidButton,
  toastDanger,
  toastSuccess,
  toastWarning,
} from "../../src/main";

export default function ToastPage() {
  return (
    <>
      <SolidButton color="success" onClick={() => toastSuccess("Success")}>
        Success
      </SolidButton>
      <SolidButton color="warning" onClick={() => toastWarning("Warning")}>
        Warning
      </SolidButton>
      <SolidButton color="danger" onClick={() => toastDanger("Danger")}>
        Danger
      </SolidButton>
    </>
  );
}
