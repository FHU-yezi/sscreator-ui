import type { StorybookConfig } from "@storybook/preact-vite";

const config: StorybookConfig = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/preact-vite",
    options: {},
  },
};
export default config;
