import type { Preview } from "@storybook/react";

import "../theme/index.css";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i } },
  },
};

export default preview;
