// eslint-disable-next-line import/no-extraneous-dependencies
import toast from "react-hot-toast";
import {
  Heading1,
  OutlineButton,
  SolidButton,
  TextButton,
} from "../../src/main";

export default function ButtonPage() {
  return (
    <>
      <Heading1>Solid 按钮</Heading1>
      <div className="flex gap-2">
        <SolidButton colorScheme="primary" onClick={() => toast("Primary")}>
          Primary
        </SolidButton>
        <SolidButton colorScheme="secondary" onClick={() => toast("Secondary")}>
          Secondary
        </SolidButton>
        <SolidButton colorScheme="success" onClick={() => toast("Success")}>
          Success
        </SolidButton>
        <SolidButton colorScheme="warning" onClick={() => toast("Warning")}>
          Warning
        </SolidButton>
        <SolidButton colorScheme="danger" onClick={() => toast("Danger")}>
          Danger
        </SolidButton>
      </div>
      <div className="flex gap-2">
        <SolidButton
          colorScheme="primary"
          onClick={() => toast("Primary")}
          disabled
        >
          DisabledPrimary
        </SolidButton>
        <SolidButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          disabled
        >
          DisabledSecondary
        </SolidButton>
        <SolidButton
          colorScheme="success"
          onClick={() => toast("Success")}
          disabled
        >
          DisabledSuccess
        </SolidButton>
        <SolidButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          disabled
        >
          DisabledWarning
        </SolidButton>
        <SolidButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          disabled
        >
          DisabledDanger
        </SolidButton>
      </div>
      <div className="flex gap-2">
        <SolidButton
          colorScheme="primary"
          onClick={() => toast("Primary")}
          loading
        >
          LoadingPrimary
        </SolidButton>
        <SolidButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          loading
        >
          LoadingSecondary
        </SolidButton>
        <SolidButton
          colorScheme="success"
          onClick={() => toast("Success")}
          loading
        >
          LoadingSuccess
        </SolidButton>
        <SolidButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          loading
        >
          LoadingWarning
        </SolidButton>
        <SolidButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          loading
        >
          LoadingDanger
        </SolidButton>
      </div>
      <div className="flex gap-2">
        <SolidButton
          colorScheme="primary"
          onClick={() => toast("Primary")}
          small
        >
          SmallPrimary
        </SolidButton>
        <SolidButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          small
        >
          SmallSecondary
        </SolidButton>
        <SolidButton
          colorScheme="success"
          onClick={() => toast("Success")}
          small
        >
          SmallSuccess
        </SolidButton>
        <SolidButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          small
        >
          SmallWarning
        </SolidButton>
        <SolidButton colorScheme="danger" onClick={() => toast("Danger")} small>
          SmallDanger
        </SolidButton>
      </div>
      <div className="flex flex-col gap-2">
        <SolidButton
          colorScheme="primary"
          onClick={() => toast("Primary")}
          fullWidth
        >
          fullWidthPrimary
        </SolidButton>
        <SolidButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          fullWidth
        >
          fullWidthSecondary
        </SolidButton>
        <SolidButton
          colorScheme="success"
          onClick={() => toast("Success")}
          fullWidth
        >
          fullWidthSuccess
        </SolidButton>
        <SolidButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          fullWidth
        >
          fullWidthWarning
        </SolidButton>
        <SolidButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          fullWidth
        >
          fullWidthDanger
        </SolidButton>
      </div>

      <Heading1>Outline 按钮</Heading1>
      <div className="flex gap-2">
        <OutlineButton colorScheme="primary" onClick={() => toast("Primary")}>
          Primary
        </OutlineButton>
        <OutlineButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
        >
          Secondary
        </OutlineButton>
        <OutlineButton colorScheme="success" onClick={() => toast("Success")}>
          Success
        </OutlineButton>
        <OutlineButton colorScheme="warning" onClick={() => toast("Warning")}>
          Warning
        </OutlineButton>
        <OutlineButton colorScheme="danger" onClick={() => toast("Danger")}>
          Danger
        </OutlineButton>
      </div>
      <div className="flex gap-2">
        <OutlineButton
          colorScheme="primary"
          onClick={() => toast("Primary")}
          disabled
        >
          DisabledPrimary
        </OutlineButton>
        <OutlineButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          disabled
        >
          DisabledSecondary
        </OutlineButton>
        <OutlineButton
          colorScheme="success"
          onClick={() => toast("Success")}
          disabled
        >
          DisabledSuccess
        </OutlineButton>
        <OutlineButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          disabled
        >
          DisabledWarning
        </OutlineButton>
        <OutlineButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          disabled
        >
          DisabledDanger
        </OutlineButton>
      </div>
      <div className="flex gap-2">
        <OutlineButton
          colorScheme="primary"
          onClick={() => toast("Primary")}
          loading
        >
          LoadingPrimary
        </OutlineButton>
        <OutlineButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          loading
        >
          LoadingSecondary
        </OutlineButton>
        <OutlineButton
          colorScheme="success"
          onClick={() => toast("Success")}
          loading
        >
          LoadingSuccess
        </OutlineButton>
        <OutlineButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          loading
        >
          LoadingWarning
        </OutlineButton>
        <OutlineButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          loading
        >
          LoadingDanger
        </OutlineButton>
      </div>
      <div className="flex gap-2">
        <OutlineButton
          colorScheme="primary"
          onClick={() => toast("Primary")}
          small
        >
          SmallPrimary
        </OutlineButton>
        <OutlineButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          small
        >
          SmallSecondary
        </OutlineButton>
        <OutlineButton
          colorScheme="success"
          onClick={() => toast("Success")}
          small
        >
          SmallSuccess
        </OutlineButton>
        <OutlineButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          small
        >
          SmallWarning
        </OutlineButton>
        <OutlineButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          small
        >
          SmallDanger
        </OutlineButton>
      </div>
      <div className="flex flex-col gap-2">
        <OutlineButton
          colorScheme="primary"
          onClick={() => toast("Primary")}
          fullWidth
        >
          fullWidthPrimary
        </OutlineButton>
        <OutlineButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          fullWidth
        >
          fullWidthSecondary
        </OutlineButton>
        <OutlineButton
          colorScheme="success"
          onClick={() => toast("Success")}
          fullWidth
        >
          fullWidthSuccess
        </OutlineButton>
        <OutlineButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          fullWidth
        >
          fullWidthWarning
        </OutlineButton>
        <OutlineButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          fullWidth
        >
          fullWidthDanger
        </OutlineButton>
      </div>

      <Heading1>Text 按钮</Heading1>
      <div className="flex gap-2">
        <TextButton colorScheme="primary" onClick={() => toast("Primary")}>
          Primary
        </TextButton>
        <TextButton colorScheme="secondary" onClick={() => toast("Secondary")}>
          Secondary
        </TextButton>
        <TextButton colorScheme="success" onClick={() => toast("Success")}>
          Success
        </TextButton>
        <TextButton colorScheme="warning" onClick={() => toast("Warning")}>
          Warning
        </TextButton>
        <TextButton colorScheme="danger" onClick={() => toast("Danger")}>
          Danger
        </TextButton>
      </div>
      <div className="flex gap-2">
        <TextButton
          colorScheme="primary"
          onClick={() => toast("Primary")}
          disabled
        >
          DisabledPrimary
        </TextButton>
        <TextButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          disabled
        >
          DisabledSecondary
        </TextButton>
        <TextButton
          colorScheme="success"
          onClick={() => toast("Success")}
          disabled
        >
          DisabledSuccess
        </TextButton>
        <TextButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          disabled
        >
          DisabledWarning
        </TextButton>
        <TextButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          disabled
        >
          DisabledDanger
        </TextButton>
      </div>
      <div className="flex gap-2">
        <TextButton
          colorScheme="primary"
          onClick={() => toast("Primary")}
          loading
        >
          LoadingPrimary
        </TextButton>
        <TextButton
          colorScheme="secondary"
          onClick={() => toast("Secondary")}
          loading
        >
          LoadingSecondary
        </TextButton>
        <TextButton
          colorScheme="success"
          onClick={() => toast("Success")}
          loading
        >
          LoadingSuccess
        </TextButton>
        <TextButton
          colorScheme="warning"
          onClick={() => toast("Warning")}
          loading
        >
          LoadingWarning
        </TextButton>
        <TextButton
          colorScheme="danger"
          onClick={() => toast("Danger")}
          loading
        >
          LoadingDanger
        </TextButton>
      </div>
    </>
  );
}
