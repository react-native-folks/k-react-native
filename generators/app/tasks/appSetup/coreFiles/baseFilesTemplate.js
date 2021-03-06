const { copyFile, copyTemplateFile } = require('../utils');
const {
  ANDROID_VERSION_GRADLE,
  GEMFILE,
  FASTLANE_PATH,
  UTILS_PATH,
  GLOBAL_INTERFACES,
  NAVIGATION_INTERFACES,
  REACTOTRON_INTERFACES,
  REACT_NATIVE_CONFIG,
  FONTS,
  COMPONENTS,
  API_CONFIG,
  CONFIG,
  MAIN,
  TEXT_PATH,
  TEXT_INPUT_PATH,
  BUTTON_PATH,
  CUSTOM_SHADOW_VIEW_PATH,
  LOADABLE_IMAGE_PATH,
  LOADABLE_PATH,
  ANIMATIONS_CONSTANTS,
  PLATFORM_CONSTANTS,
  COLORS_CONSTANTS,
  FONTS_CONFIG,
  HOME,
  HOME_THEME_SELECTOR_COMPONENT,
  HOME_STYLES,
  HOME_TRANSLATIIONS,
  README,
  REACTOTRON_CONFIG,
  I18N_CONFIG,
  INDEX,
  APP,
  APP_I18N,
  TSCONFIG_FILE,
  INDEX_D_FILE,
  ESLINTRC_FILE,
  ESLINT_IGNORE_FILE,
  CUSTOM_STATUS_BAR,
  FETCH_HOOKS,
  NAVIGATION_UTILS,
  APP_NAVIGATOR_PATH,
  APP_NAVIGATION_INDEX,
  NAVIGATION_ROUTES,
  NAVIGATION_CONFIG,
  NAVIGATION_APP_STACK,
  NAVIGATION_STACK_INDEX,
  THEME_HOOKS,
  THEME_CONFIG,
  THEME_INTERFACES,
  PREFERENCES_SERVICE
} = require('../files');

const FILES = [
  GEMFILE,
  FASTLANE_PATH,
  UTILS_PATH,
  GLOBAL_INTERFACES,
  NAVIGATION_INTERFACES,
  REACTOTRON_INTERFACES,
  REACT_NATIVE_CONFIG,
  FONTS,
  API_CONFIG,
  CONFIG,
  TEXT_PATH,
  TEXT_INPUT_PATH,
  BUTTON_PATH,
  CUSTOM_SHADOW_VIEW_PATH,
  LOADABLE_IMAGE_PATH,
  LOADABLE_PATH,
  ANIMATIONS_CONSTANTS,
  PLATFORM_CONSTANTS,
  COLORS_CONSTANTS,
  I18N_CONFIG,
  FONTS_CONFIG,
  HOME_STYLES,
  HOME_THEME_SELECTOR_COMPONENT,
  TSCONFIG_FILE,
  ESLINT_IGNORE_FILE,
  CUSTOM_STATUS_BAR,
  FETCH_HOOKS,
  NAVIGATION_UTILS,
  THEME_HOOKS,
  THEME_CONFIG,
  THEME_INTERFACES,
  PREFERENCES_SERVICE
];

const TEMPLATE_FILES = [
  ANDROID_VERSION_GRADLE,
  README,
  REACTOTRON_CONFIG,
  INDEX,
  APP,
  COMPONENTS,
  HOME,
  HOME_TRANSLATIIONS,
  NAVIGATION_CONFIG,
  APP_I18N,
  MAIN,
  INDEX_D_FILE,
  ESLINTRC_FILE,
  APP_NAVIGATOR_PATH,
  APP_NAVIGATION_INDEX,
  NAVIGATION_ROUTES,
  NAVIGATION_APP_STACK,
  NAVIGATION_STACK_INDEX
];

module.exports = function baseFilesTemplate() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
