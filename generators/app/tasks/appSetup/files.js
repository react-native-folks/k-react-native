// BASE FOLDERS
module.exports.MOCKS = '__mocks__';
module.exports.TESTS = '__tests__';
module.exports.E2E_PATH = 'e2e';
module.exports.FONTS = 'assets/fonts';
module.exports.APP_PATH = 'src/app';
module.exports.CONFIG_PATH = 'src/config';
module.exports.CONSTANTS_PATH = 'src/constants';
module.exports.NAVIGATION_PATH = 'src/app/navigation';
module.exports.HOOKS_PATH = 'src/hooks';
module.exports.INTERFACES_PATH = 'src/interfaces';
module.exports.REDUX_PATH = 'src/redux';
module.exports.RECOIL_PATH = 'src/recoilState';
module.exports.SERVICES_PATH = 'src/services';
module.exports.UTILS_PATH = 'src/utils';
module.exports.ANDROID_APP_PATH = 'android/app';
module.exports.FASTLANE_PATH = 'fastlane';

// BASE FILES'
module.exports.ESLINT_IGNORE_FILE = '.eslintignore';
module.exports.ESLINTRC_FILE = '.eslintrc.js';
module.exports.MAIN = 'App.js';
module.exports.INDEX_D_FILE = 'index.d.ts';
module.exports.INDEX = 'index.js';
module.exports.JEST_CONFIG_FILE = 'jest.config.js';
module.exports.DETOX_FILE = '.detoxrc.json';
module.exports.REACT_NATIVE_CONFIG = 'react-native.config.js';
module.exports.README = 'README.md';
module.exports.TSCONFIG_FILE = 'tsconfig.json';
module.exports.GEMFILE = 'Gemfile';
module.exports.ANDROID_VERSION_GRADLE = `${module.exports.ANDROID_APP_PATH}/version.gradle`;
module.exports.ANDROID_SECURITY_NETWORK_FILE = `${module.exports.ANDROID_APP_PATH}/src/main/res/xml/network_security_config.xml`;
module.exports.E2E_CONFIG_FILE = `${module.exports.E2E_PATH}/config.json`;
module.exports.E2E_ENVIRONMENT_FILE = `${module.exports.E2E_PATH}/environment.js`;
module.exports.E2E_UTILS = `${module.exports.E2E_PATH}/utils`;
// TESTS
module.exports.TESTS_REDUX_PATH = `${module.exports.TESTS}/redux`;
module.exports.TESTS_RESPONSES_PATH = `${module.exports.TESTS}/responses`;
module.exports.TESTS_SCREENS_PATH = `${module.exports.TESTS}/screens`;
module.exports.GOOGLE_SIGNIN_MOCK = `${module.exports.MOCKS}/@react-native-community/google-signin.js`;

module.exports.E2E_NAVIGATION_TEST_PATH = `${module.exports.E2E_PATH}/appNavigationTest.e2e.js`;
module.exports.E2E_AUTH_TEST_PATH = `${module.exports.E2E_PATH}/authTest.e2e.js`;
module.exports.E2E_HOME_TEST_PATH = `${module.exports.E2E_PATH}/homeTest.e2e.js`;
module.exports.E2E_CAMERA_TEST_PATH = `${module.exports.E2E_PATH}/cameraTest.e2e.js`;
module.exports.E2E_MAPS_TEST_PATH = `${module.exports.E2E_PATH}/mapsTest.e2e.js`;
module.exports.E2E_ONBOARDING_TEST_PATH = `${module.exports.E2E_PATH}/onboardingTest.e2e.js`;
module.exports.E2E_UTILS_HOME_NAVIGATION = `${module.exports.E2E_UTILS}/homeNavigation.js`;
module.exports.E2E_UTILS_LOGIN = `${module.exports.E2E_UTILS}/login.js`;
module.exports.E2E_UTILS_ONBOARDING = `${module.exports.E2E_UTILS}/onboarding.js`;
module.exports.E2E_UTILS_SIGNUP = `${module.exports.E2E_UTILS}/signup.js`;
module.exports.E2E_UTILS_TESTING_DATA = `${module.exports.E2E_UTILS}/testingData.js`;
module.exports.E2E_UTILS_TESTING_ELEMENTS = `${module.exports.E2E_UTILS}/testingElements.js`;
module.exports.E2E_UTILS_NAVIGATION = `${module.exports.E2E_UTILS}/navigation.js`;

// TESTS - REDUX
module.exports.TESTS_STORE = `${module.exports.TESTS_REDUX_PATH}/store.js`;
module.exports.TESTS_UTILS = `${module.exports.TESTS_REDUX_PATH}/utils.js`;
module.exports.TESTS_AUTH_ACTIONS_PATH = `${module.exports.TESTS_REDUX_PATH}/auth/actions.js`;
module.exports.TESTS_AUTH_SLICE_PATH = `${module.exports.TESTS_REDUX_PATH}/auth/slice.js`;

// APP
module.exports.COMPONENTS_PATH = `${module.exports.APP_PATH}/components`;
module.exports.SCREENS_PATH = `${module.exports.APP_PATH}/screens`;
module.exports.APP_I18N = `${module.exports.APP_PATH}/i18n.ts`;
module.exports.APP = `${module.exports.APP_PATH}/index.tsx`;
module.exports.COMPONENTS = `${module.exports.COMPONENTS_PATH}/index.ts`;

// APP COMPONENTS - APP NAVIGATION
module.exports.NAVIGATION_UTILS = `${module.exports.NAVIGATION_PATH}/utils.tsx`;
module.exports.STATUS_BAR_CONSTANTS = `${module.exports.NAVIGATION_PATH}/config/statusBar.ts`;
module.exports.NAVIGATION_AUTH_STACK = `${module.exports.NAVIGATION_PATH}/stacks/AuthStack.tsx`;
module.exports.NAVIGATION_ONBOARDING_STACK = `${module.exports.NAVIGATION_PATH}/stacks/OnboardingStack.tsx`;
module.exports.APP_NAVIGATOR_PATH = `${module.exports.NAVIGATION_PATH}/navigator.tsx`;
module.exports.APP_NAVIGATION_INDEX = `${module.exports.NAVIGATION_PATH}/index.tsx`;
module.exports.NAVIGATION_ROUTES = `${module.exports.NAVIGATION_PATH}/routes.ts`;
module.exports.NAVIGATION_CONFIG = `${module.exports.NAVIGATION_PATH}/config/screensOptions.tsx`;
module.exports.NAVIGATION_APP_STACK = `${module.exports.NAVIGATION_PATH}/stacks/AppStack.tsx`;
module.exports.NAVIGATION_STACK_INDEX = `${module.exports.NAVIGATION_PATH}/stacks/index.ts`;

// APP COMPONENTS - BUTTON
module.exports.BUTTON_PATH = `${module.exports.COMPONENTS_PATH}/Button`;
// APP COMPONENTS - CUSTOM SHADOW VIEW
module.exports.CUSTOM_SHADOW_VIEW_PATH = `${module.exports.COMPONENTS_PATH}/CustomShadowView`;
// APP COMPONENTS - LOADABLE IMAGE
module.exports.LOADABLE_IMAGE_PATH = `${module.exports.COMPONENTS_PATH}/LoadableImage`;
// APP COMPONENTS - CUSTOM STATUS BAR
module.exports.CUSTOM_STATUS_BAR = `${module.exports.COMPONENTS_PATH}/CustomStatusBar`;
// APP COMPONENTS - CUSTOM TEXT
module.exports.TEXT_PATH = `${module.exports.COMPONENTS_PATH}/Text`;
// APP COMPONENTS - TEXT INPUT
module.exports.TEXT_INPUT_PATH = `${module.exports.COMPONENTS_PATH}/TextInput`;
// APP COMPONENTS - SOCIAL BUTTONS
module.exports.SOCIAL_APPLE_BUTTON = `${module.exports.COMPONENTS_PATH}/SocialButton/AppleButton`;
module.exports.SOCIAL_FACEBOOK_BUTTON = `${module.exports.COMPONENTS_PATH}/SocialButton/FacebookButton`;
module.exports.SOCIAL_GOOGLE_BUTTON = `${module.exports.COMPONENTS_PATH}/SocialButton/GoogleButton`;
module.exports.SOCIAL_TWITTER_BUTTON = `${module.exports.COMPONENTS_PATH}/SocialButton/TwitterButton`;
module.exports.CUSTOM_SOCIAL_BUTTON_STYLE = `${module.exports.COMPONENTS_PATH}/SocialButton/Button/styles.ts`;
module.exports.CUSTOM_SOCIAL_BUTTON_INDEX = `${module.exports.COMPONENTS_PATH}/SocialButton/Button/index.tsx`;
module.exports.SOCIAL_BUTTON = `${module.exports.COMPONENTS_PATH}/SocialButton/index.tsx`;
module.exports.SOCIAL_CONSTANTS = `${module.exports.COMPONENTS_PATH}/SocialButton/constants.ts`;
// APP COMPONENTS - GOOGLE MAPS
module.exports.MAPS_COMPONENT_PATH = `${module.exports.COMPONENTS_PATH}/Maps`;
// APP COMPONENTS - LOADABLE
module.exports.LOADABLE_PATH = `${module.exports.COMPONENTS_PATH}/LoadableView`;

// AUTH SCREENS - LOGIN AND SIGNUP
module.exports.AUTH_PATH = `${module.exports.SCREENS_PATH}/Auth`;
module.exports.AUTH_CONSTANTS = `${module.exports.AUTH_PATH}/constants.ts`;

// APP SCREENS - LOGIN
module.exports.LOGIN_PATH = `${module.exports.AUTH_PATH}/screens/Login`;
module.exports.LOGIN = `${module.exports.LOGIN_PATH}/index.tsx`;
module.exports.LOGIN_STYLE = `${module.exports.LOGIN_PATH}/styles.ts`;
module.exports.LOGIN_I18N = `${module.exports.LOGIN_PATH}/i18n.ts`;
module.exports.LOGIN_TEST = `${module.exports.LOGIN_PATH}/index.test.tsx`;

// APP SCREENS - SIGN UP
module.exports.AUTH_PATH_SIGNUP = `${module.exports.AUTH_PATH}/screens/SignUp`;

// APP SCREENS - HOME
module.exports.HOME_PATH = `${module.exports.SCREENS_PATH}/Home`;
module.exports.HOME = `${module.exports.HOME_PATH}/index.tsx`;
module.exports.HOME_STYLES = `${module.exports.HOME_PATH}/styles.ts`;
module.exports.HOME_TRANSLATIIONS = `${module.exports.HOME_PATH}/i18n.ts`;
module.exports.HOME_THEME_SELECTOR_COMPONENT = `${module.exports.HOME_PATH}/components/ThemeSelector`;

// APP SCREENS - CAMERA
module.exports.CAMERA_FLOW_PATH = `${module.exports.SCREENS_PATH}/Camera`;

// APP SCREENS - ONBOARDING
module.exports.ONBOARDING_PATH = `${module.exports.SCREENS_PATH}/Onboarding`;
module.exports.ONBOARDING_COMPONENTS_PATH = `${module.exports.SCREENS_PATH}/Onboarding/components`;
module.exports.ONBOARDING_INDEX_PATH = `${module.exports.SCREENS_PATH}/Onboarding/index.tsx`;
module.exports.ONBOARDING_TEST_PATH = `${module.exports.SCREENS_PATH}/Onboarding/index.test.tsx`;
module.exports.ONBOARDING_I18N_PATH = `${module.exports.SCREENS_PATH}/Onboarding/i18n.ts`;

// APP SCREENS - GOOGLE MAPS
module.exports.GOOGLE_MAPS_PATH = `${module.exports.SCREENS_PATH}/MapView`;

// APP STATE MANAGEMENT - RECOIL
module.exports.RECOIL_AUTH_ATOMS_PATH = `${module.exports.RECOIL_PATH}/auth/atoms.ts`;
module.exports.RECOIL_AUTH_SELECTORS_PATH = `${module.exports.RECOIL_PATH}/auth/selectors.ts`;

// CONFIG
module.exports.API_CONFIG = `${module.exports.CONFIG_PATH}/api.ts`;
module.exports.CONFIG = `${module.exports.CONFIG_PATH}/index.ts`;
module.exports.REACTOTRON_CONFIG = `${module.exports.CONFIG_PATH}/reactotron.ts`;
module.exports.I18N_CONFIG = `${module.exports.CONFIG_PATH}/i18n.ts`;
module.exports.FONTS_CONFIG = `${module.exports.CONFIG_PATH}/fonts.ts`;
module.exports.THEME_CONFIG = `${module.exports.CONFIG_PATH}/theme.ts`;

// CONSTANTS
module.exports.PLATFORM_CONSTANTS = `${module.exports.CONSTANTS_PATH}/platform.ts`;
module.exports.COLORS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/colors.ts`;
module.exports.ANIMATIONS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/animations.ts`;

// HOOKS
module.exports.REDUX_HOOKS = `${module.exports.HOOKS_PATH}/redux.ts`;
module.exports.FETCH_HOOKS = `${module.exports.HOOKS_PATH}/useFetch.ts`;
module.exports.THEME_HOOKS = `${module.exports.HOOKS_PATH}/theme.tsx`;

// INTERFACES
module.exports.AUTH_INTERFACES = `${module.exports.INTERFACES_PATH}/auth.ts`;
module.exports.GLOBAL_INTERFACES = `${module.exports.INTERFACES_PATH}/global.ts`;
module.exports.NAVIGATION_INTERFACES = `${module.exports.INTERFACES_PATH}/navigation.ts`;
module.exports.REACTOTRON_INTERFACES = `${module.exports.INTERFACES_PATH}/reactotron.ts`;
module.exports.REDUX_INTERFACES = `${module.exports.INTERFACES_PATH}/redux.ts`;
module.exports.THEME_INTERFACES = `${module.exports.INTERFACES_PATH}/theme.ts`;
module.exports.SOCIALS_INTERFACES = `${module.exports.INTERFACES_PATH}/socials.ts`;

// REDUX
module.exports.REDUX_STORE = `${module.exports.REDUX_PATH}/store.ts`;
module.exports.REDUX_UTILS = `${module.exports.REDUX_PATH}/utils.ts`;
// REDUX - AUTH
module.exports.AUTH_REDUX_PATH = `${module.exports.REDUX_PATH}/auth`;
module.exports.AUTH_REDUX_ACTIONS = `${module.exports.AUTH_REDUX_PATH}/actions.ts`;
module.exports.AUTH_REDUX_INDEX = `${module.exports.AUTH_REDUX_PATH}/index.ts`;
module.exports.AUTH_REDUX_SLICE = `${module.exports.AUTH_REDUX_PATH}/slice.ts`;
// REDUX - MIDDLEWARES
module.exports.ANALYTICS_MIDDLEWARE = `${module.exports.REDUX_PATH}/middlewares/analytics.ts`;

// SERVICES
module.exports.AUTH_SERVICE = `${module.exports.SERVICES_PATH}/auth.ts`;
module.exports.ONBOARDING_SERVICE = `${module.exports.SERVICES_PATH}/onboarding.ts`;
module.exports.PREFERENCES_SERVICE = `${module.exports.SERVICES_PATH}/preferences.ts`;
module.exports.PUSH_NOTIFICATIONS_SERVICE = `${module.exports.SERVICES_PATH}/notifications.ts`;
module.exports.MEDIA_FILE_SERVICE = `${module.exports.SERVICES_PATH}/mediaFile.ts`;
