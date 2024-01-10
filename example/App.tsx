import { toast } from "react-hot-toast";
import {
  OutlineButton,
  SolidButton,
  Text,
  TextButton,
  useColorScheme,
} from "../src/main";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <div className="w-fit mx-auto my-8 flex flex-col gap-4">
      <Text>SSCreator UI</Text>
      <SolidButton
        type="primary"
        onClick={() => toast("Hello World!")}
        fullWidth
      >
        Click Me
      </SolidButton>
      <Text>Current Color Scheme: {colorScheme}</Text>
      <SolidButton type="secondary" onClick={toggleColorScheme} small>
        Toggle Color Scheme
      </SolidButton>
      <Text>Solid 按钮</Text>
      <div className="flex gap-2">
        <SolidButton type="primary" onClick={() => toast("Primary")}>
          Primary
        </SolidButton>
        <SolidButton type="secondary" onClick={() => toast("Secondary")}>
          Secondary
        </SolidButton>
        <SolidButton type="success" onClick={() => toast("Success")}>
          Success
        </SolidButton>
        <SolidButton type="warning" onClick={() => toast("Warning")}>
          Warning
        </SolidButton>
        <SolidButton type="danger" onClick={() => toast("Danger")}>
          Danger
        </SolidButton>
      </div>
      <div className="flex gap-2">
        <SolidButton type="primary" onClick={() => toast("Primary")} disabled>
          DisabledPrimary
        </SolidButton>
        <SolidButton
          type="secondary"
          onClick={() => toast("Secondary")}
          disabled
        >
          DisabledSecondary
        </SolidButton>
        <SolidButton type="success" onClick={() => toast("Success")} disabled>
          DisabledSuccess
        </SolidButton>
        <SolidButton type="warning" onClick={() => toast("Warning")} disabled>
          DisabledWarning
        </SolidButton>
        <SolidButton type="danger" onClick={() => toast("Danger")} disabled>
          DisabledDanger
        </SolidButton>
      </div>
      <div className="flex gap-2">
        <SolidButton type="primary" onClick={() => toast("Primary")} loading>
          LoadingPrimary
        </SolidButton>
        <SolidButton
          type="secondary"
          onClick={() => toast("Secondary")}
          loading
        >
          LoadingSecondary
        </SolidButton>
        <SolidButton type="success" onClick={() => toast("Success")} loading>
          LoadingSuccess
        </SolidButton>
        <SolidButton type="warning" onClick={() => toast("Warning")} loading>
          LoadingWarning
        </SolidButton>
        <SolidButton type="danger" onClick={() => toast("Danger")} loading>
          LoadingDanger
        </SolidButton>
      </div>
      <div className="flex gap-2">
        <SolidButton type="primary" onClick={() => toast("Primary")} small>
          SmallPrimary
        </SolidButton>
        <SolidButton type="secondary" onClick={() => toast("Secondary")} small>
          SmallSecondary
        </SolidButton>
        <SolidButton type="success" onClick={() => toast("Success")} small>
          SmallSuccess
        </SolidButton>
        <SolidButton type="warning" onClick={() => toast("Warning")} small>
          SmallWarning
        </SolidButton>
        <SolidButton type="danger" onClick={() => toast("Danger")} small>
          SmallDanger
        </SolidButton>
      </div>
      <div className="flex flex-col gap-2">
        <SolidButton type="primary" onClick={() => toast("Primary")} fullWidth>
          fullWidthPrimary
        </SolidButton>
        <SolidButton
          type="secondary"
          onClick={() => toast("Secondary")}
          fullWidth
        >
          fullWidthSecondary
        </SolidButton>
        <SolidButton type="success" onClick={() => toast("Success")} fullWidth>
          fullWidthSuccess
        </SolidButton>
        <SolidButton type="warning" onClick={() => toast("Warning")} fullWidth>
          fullWidthWarning
        </SolidButton>
        <SolidButton type="danger" onClick={() => toast("Danger")} fullWidth>
          fullWidthDanger
        </SolidButton>
      </div>
      <Text>Outline 按钮</Text>
      <div className="flex gap-2">
        <OutlineButton type="primary" onClick={() => toast("Primary")}>
          Primary
        </OutlineButton>
        <OutlineButton type="secondary" onClick={() => toast("Secondary")}>
          Secondary
        </OutlineButton>
        <OutlineButton type="success" onClick={() => toast("Success")}>
          Success
        </OutlineButton>
        <OutlineButton type="warning" onClick={() => toast("Warning")}>
          Warning
        </OutlineButton>
        <OutlineButton type="danger" onClick={() => toast("Danger")}>
          Danger
        </OutlineButton>
      </div>
      <div className="flex gap-2">
        <OutlineButton type="primary" onClick={() => toast("Primary")} disabled>
          DisabledPrimary
        </OutlineButton>
        <OutlineButton
          type="secondary"
          onClick={() => toast("Secondary")}
          disabled
        >
          DisabledSecondary
        </OutlineButton>
        <OutlineButton type="success" onClick={() => toast("Success")} disabled>
          DisabledSuccess
        </OutlineButton>
        <OutlineButton type="warning" onClick={() => toast("Warning")} disabled>
          DisabledWarning
        </OutlineButton>
        <OutlineButton type="danger" onClick={() => toast("Danger")} disabled>
          DisabledDanger
        </OutlineButton>
      </div>
      <div className="flex gap-2">
        <OutlineButton type="primary" onClick={() => toast("Primary")} loading>
          LoadingPrimary
        </OutlineButton>
        <OutlineButton
          type="secondary"
          onClick={() => toast("Secondary")}
          loading
        >
          LoadingSecondary
        </OutlineButton>
        <OutlineButton type="success" onClick={() => toast("Success")} loading>
          LoadingSuccess
        </OutlineButton>
        <OutlineButton type="warning" onClick={() => toast("Warning")} loading>
          LoadingWarning
        </OutlineButton>
        <OutlineButton type="danger" onClick={() => toast("Danger")} loading>
          LoadingDanger
        </OutlineButton>
      </div>
      <div className="flex gap-2">
        <OutlineButton type="primary" onClick={() => toast("Primary")} small>
          SmallPrimary
        </OutlineButton>
        <OutlineButton
          type="secondary"
          onClick={() => toast("Secondary")}
          small
        >
          SmallSecondary
        </OutlineButton>
        <OutlineButton type="success" onClick={() => toast("Success")} small>
          SmallSuccess
        </OutlineButton>
        <OutlineButton type="warning" onClick={() => toast("Warning")} small>
          SmallWarning
        </OutlineButton>
        <OutlineButton type="danger" onClick={() => toast("Danger")} small>
          SmallDanger
        </OutlineButton>
      </div>
      <div className="flex flex-col gap-2">
        <OutlineButton
          type="primary"
          onClick={() => toast("Primary")}
          fullWidth
        >
          fullWidthPrimary
        </OutlineButton>
        <OutlineButton
          type="secondary"
          onClick={() => toast("Secondary")}
          fullWidth
        >
          fullWidthSecondary
        </OutlineButton>
        <OutlineButton
          type="success"
          onClick={() => toast("Success")}
          fullWidth
        >
          fullWidthSuccess
        </OutlineButton>
        <OutlineButton
          type="warning"
          onClick={() => toast("Warning")}
          fullWidth
        >
          fullWidthWarning
        </OutlineButton>
        <OutlineButton type="danger" onClick={() => toast("Danger")} fullWidth>
          fullWidthDanger
        </OutlineButton>
      </div>
      <Text>Text 按钮</Text>
      <div className="flex gap-2">
        <TextButton type="primary" onClick={() => toast("Primary")}>
          Primary
        </TextButton>
        <TextButton type="secondary" onClick={() => toast("Secondary")}>
          Secondary
        </TextButton>
        <TextButton type="success" onClick={() => toast("Success")}>
          Success
        </TextButton>
        <TextButton type="warning" onClick={() => toast("Warning")}>
          Warning
        </TextButton>
        <TextButton type="danger" onClick={() => toast("Danger")}>
          Danger
        </TextButton>
      </div>
      <div className="flex gap-2">
        <TextButton type="primary" onClick={() => toast("Primary")} disabled>
          DisabledPrimary
        </TextButton>
        <TextButton
          type="secondary"
          onClick={() => toast("Secondary")}
          disabled
        >
          DisabledSecondary
        </TextButton>
        <TextButton type="success" onClick={() => toast("Success")} disabled>
          DisabledSuccess
        </TextButton>
        <TextButton type="warning" onClick={() => toast("Warning")} disabled>
          DisabledWarning
        </TextButton>
        <TextButton type="danger" onClick={() => toast("Danger")} disabled>
          DisabledDanger
        </TextButton>
      </div>
      <div className="flex gap-2">
        <TextButton type="primary" onClick={() => toast("Primary")} loading>
          LoadingPrimary
        </TextButton>
        <TextButton type="secondary" onClick={() => toast("Secondary")} loading>
          LoadingSecondary
        </TextButton>
        <TextButton type="success" onClick={() => toast("Success")} loading>
          LoadingSuccess
        </TextButton>
        <TextButton type="warning" onClick={() => toast("Warning")} loading>
          LoadingWarning
        </TextButton>
        <TextButton type="danger" onClick={() => toast("Danger")} loading>
          LoadingDanger
        </TextButton>
      </div>
    </div>
  );
}
