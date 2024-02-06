import { toast } from "react-hot-toast";
import Icon from "../components/Icon";
import Text from "../components/text/Text";

export function toastSuccess(message: string) {
  toast(
    <Text colorScheme="success" bold>
      {message}
    </Text>,
    {
      icon: (
        <Icon
          className="text-lg"
          colorScheme="success"
          icon="i-mdi-tick-circle"
        />
      ),
      className: "dark:bg-zinc-900",
    },
  );
}

export function toastWarning(message: string) {
  toast(
    <Text colorScheme="warning" bold>
      {message}
    </Text>,
    {
      icon: (
        <Icon className="text-lg" colorScheme="warning" icon="i-mdi-warning" />
      ),
      className: "dark:bg-zinc-900",
    },
  );
}

export function toastDanger(message: string) {
  toast(
    <Text colorScheme="danger" bold>
      {message}
    </Text>,
    {
      icon: (
        <Icon
          className="text-lg"
          colorScheme="danger"
          icon="i-mdi-close-circle"
        />
      ),
      className: "dark:bg-zinc-900",
    },
  );
}
