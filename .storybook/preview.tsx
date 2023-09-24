import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/preact";

import "@unocss/reset/tailwind.css";
import "uno.css";

const globalDecorator = (StoryFn) => {
  return (
    <div className="bg-white w-screen h-screen absolute top-0 left-0 p-8 dark:bg-zinc-950 transition-colors">
      <StoryFn />
    </div>
  );
};

export const decorators = [
  globalDecorator,
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

const preview: Preview = {};

export default preview;
