import { configure, addParameters } from "@storybook/react";
import packageJson from "../package.json";

function loadStories() {
  require("../stories/index.js");
}

addParameters({
  options: {
    name: "behive components",
    url: packageJson.repository,
    showPanel: false
  }
});

configure(loadStories, module);
