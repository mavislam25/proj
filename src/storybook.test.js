/**
 * Creates a snapshot test for every story. This helps developers to understand how their changes may affect other
 * components which depend on them
 */
import initStoryshots from "@storybook/addon-storyshots";

initStoryshots({
  storyKindRegex: /^((?!.*?[Slider]).)*$/,
});
