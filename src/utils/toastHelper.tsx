// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from "react-hot-toast";
import { MdCheck, MdClose, MdWarningAmber } from "react-icons/md";
import Icon from "../components/Icon";
import Text from "../components/text/Text";

interface ToastFunctionProps {
  message: string;
  duration?: number;
}

export function toastSuccess({ message, duration = 2000 }: ToastFunctionProps) {
  toast(
    <Text colorScheme="success" bold>
      {message}
    </Text>,
    {
      duration,
      icon: <Icon colorScheme="success" icon={<MdCheck />} />,

      className: "dark:bg-zinc-900",
    },
  );
}

export function toastWarning({ message, duration = 4000 }: ToastFunctionProps) {
  toast(
    <Text colorScheme="warning" bold>
      {message}
    </Text>,
    {
      duration,
      icon: <Icon colorScheme="warning" icon={<MdWarningAmber />} />,

      className: "dark:bg-zinc-900",
    },
  );
}

export function toastError({ message, duration = 4000 }: ToastFunctionProps) {
  toast(
    <Text colorScheme="danger" bold>
      {message}
    </Text>,
    {
      duration,
      icon: <Icon colorScheme="danger" icon={<MdClose />} />,

      className: "dark:bg-zinc-900",
    },
  );
}