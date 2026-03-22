import type { Preview } from "@storybook/nextjs";

import "../theme/index.css";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i } },
  },
};

export default preview;
