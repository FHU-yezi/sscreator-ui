import type { Preview } from "@storybook/preact";
import "@unocss/reset/tailwind.css";
import "uno.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on.*" },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#09090b",
        },
      ],
    },
  },
};

export default preview;
