const { copyFile, copyTemplateFile } = require('../utils');
const {
  FASTLANE_ANDROID_PATH,
  GEMFILE_PATH,
  UTILS_PATH,
  GLOBAL_INTERFACES,
  NAVIGATION_INTERFACES,
  REACTOTRON_INTERFACES,
  REACT_NATIVE_CONFIG,
  FONTS,
  COMPONENTS,
  AUTH_CONSTANTS,
  API_CONFIG,
  CONFIG,
  MAIN,
  APP_NAVIGATOR_NAVIGATOR,
  CUSTOM_TEXT_PATH,
  CUSTOM_TEXT_INPUT_PATH,
  CUSTOM_BUTTON_PATH,
  CUSTOM_SHADOW_VIEW_PATH,
  LOADABLE_IMAGE_PATH,
  LOADABLE_PATH,
  PLATFORM_CONSTANTS,
  COLORS_CONSTANTS,
  ROUTES_CONSTANTS,
  FONTS_CONSTANTS,
  STATUS_BAR_CONSTANTS,
  FONTS_CONFIG,
  HOME,
  HOME_STYLES,
  HOME_TRANSLATIIONS,
  README,
  REDUX_STORE,
  REACTOTRON_CONFIG,
  I18N_CONFIG,
  INDEX,
  APP,
  NAVIGATION_CONFIG,
  APP_I18N,
  MOCKS,
  TESTS_STORE,
  TESTS_RESPONSES_PATH,
  TSCONFIG_FILE,
  INDEX_D_FILE,
  ESLINTRC_FILE,
  ESLINT_IGNORE_FILE,
  JEST_CONFIG_FILE,
  NAVIGATION_HELPER,
  APP_NAVIGATOR,
  AUTH_ACTIONS,
  AUTH_REDUCER,
  CUSTOM_STATUS_BAR,
  REDUX_INTERFACES
} = require('../files');

const FILES = [
  FASTLANE_ANDROID_PATH,
  GEMFILE_PATH,
  UTILS_PATH,
  GLOBAL_INTERFACES,
  NAVIGATION_INTERFACES,
  REACTOTRON_INTERFACES,
  REACT_NATIVE_CONFIG,
  FONTS,
  COMPONENTS,
  AUTH_CONSTANTS,
  API_CONFIG,
  CONFIG,
  CUSTOM_TEXT_PATH,
  CUSTOM_TEXT_INPUT_PATH,
  CUSTOM_BUTTON_PATH,
  CUSTOM_SHADOW_VIEW_PATH,
  LOADABLE_IMAGE_PATH,
  LOADABLE_PATH,
  PLATFORM_CONSTANTS,
  COLORS_CONSTANTS,
  FONTS_CONSTANTS,
  STATUS_BAR_CONSTANTS,
  I18N_CONFIG,
  FONTS_CONFIG,
  HOME_STYLES,
  MOCKS,
  TESTS_STORE,
  TESTS_RESPONSES_PATH,
  TSCONFIG_FILE,
  ESLINT_IGNORE_FILE,
  JEST_CONFIG_FILE,
  NAVIGATION_HELPER,
  CUSTOM_STATUS_BAR
];

const TEMPLATE_FILES = [
  README,
  REDUX_STORE,
  ROUTES_CONSTANTS,
  REACTOTRON_CONFIG,
  INDEX,
  APP,
  APP_NAVIGATOR,
  APP_NAVIGATOR_NAVIGATOR,
  HOME,
  HOME_TRANSLATIIONS,
  NAVIGATION_CONFIG,
  APP_I18N,
  MAIN,
  INDEX_D_FILE,
  ESLINTRC_FILE,
  AUTH_ACTIONS,
  AUTH_REDUCER,
  REDUX_INTERFACES
];

module.exports = function baseFilesTemplate() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
  FILES.forEach(copyFile.bind(this));
};
