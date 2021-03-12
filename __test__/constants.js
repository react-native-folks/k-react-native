const path = require('path');

const CASES = [
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      'drawer',
      /*'socialloginbuttons',*/
      'googlemaps',
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    // socialButtons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      'drawer',
      'socialloginbuttons',
      'googlemaps',
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    socialButtons: ['facebook', 'twitter'],
    stateManagement: 'recoil'
  },
  { features: [], socialButtons: [], stateManagement: 'redux' },
  { features: [], socialButtons: [], stateManagement: 'recoil' },
  { features: ['loginandsignup'], socialButtons: [], stateManagement: 'redux' },
  { features: ['onboarding'], socialButtons: [], stateManagement: 'recoil' },
  { features: ['tabs'], socialButtons: [], stateManagement: 'redux' },
  { features: ['drawer'], socialButtons: [], stateManagement: 'recoil' },
  {
    features: [/*'socialloginbuttons',*/ 'landscape'],
    // socialButtons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  { features: ['googlemaps'], socialButtons: [], stateManagement: 'recoil' },
  { features: ['firebase '], socialButtons: [], stateManagement: 'redux' },
  { features: ['firebase'], socialButtons: [], stateManagement: 'recoil' },
  {
    features: ['pushnotifications'],
    socialButtons: [],
    stateManagement: 'recoil'
  },
  {
    features: [
      'loginandsignup',
      /*'socialloginbuttons',*/
      'pushnotifications',
      'landscape'
    ],
    // socialButtons: ['facebook', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      /*'socialloginbuttons',*/
      'pushnotifications',
      'landscape'
    ],
    // socialButtons: ['facebook', 'google', 'twitter'],
    stateManagement: 'recoil'
  },
  {
    features: [
      'loginandsignup',
      'tabs',
      /*'socialloginbuttons',*/
      'firebase',
      'pushnotifications'
    ],
    // socialButtons: ['apple', 'google'],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      'tabs',
      /*'socialloginbuttons',*/
      'firebase',
      'pushnotifications'
    ],
    // socialButtons: ['apple', 'google'],
    stateManagement: 'recoil'
  },
  {
    features: [
      'tabs',
      'drawer',
      /*'socialloginbuttons',*/
      'googlemaps',
      'firebase',
      'landscape'
    ],
    // socialButtons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  {
    features: [
      'tabs',
      'drawer',
      /*'socialloginbuttons',*/
      'googlemaps',
      'firebase',
      'landscape'
    ],
    // socialButtons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'recoil'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      'drawer',
      'firebase',
      'pushnotifications'
    ],
    socialButtons: [],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      'drawer',
      'firebase',
      'pushnotifications'
    ],
    socialButtons: [],
    stateManagement: 'recoil'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      /*'socialloginbuttons',*/
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    // socialButtons: ['facebook', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      /*'socialloginbuttons',*/
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    // socialButtons: ['facebook', 'google', 'twitter'],
    stateManagement: 'recoil'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      /*'socialloginbuttons',*/
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    // socialButtons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'redux'
  },
  {
    features: [
      'loginandsignup',
      'onboarding',
      'tabs',
      /*'socialloginbuttons',*/
      'firebase',
      'pushnotifications',
      'landscape'
    ],
    // socialButtons: ['facebook', 'apple', 'google', 'twitter'],
    stateManagement: 'recoil'
  }
].map((v, i) => {
  const reduceToObject = array =>
    array ? array.reduce((p, c) => ({ ...p, [c]: true }), {}) : undefined;

  v.features = reduceToObject(v.features);
  v.socialButtons =
    v.features.socialloginbuttons === true
      ? reduceToObject(v.socialButtons)
      : undefined;

  return [i + 1, v];
});

const TEMP_FOLDER = path.join(__dirname, '../../tmp');
const PROJECT_NAME = 'kaminorn';
const GENERATOR_TIMEOUT = 720000; // 12 min

module.exports = {
  CASES,
  GENERATOR_TIMEOUT,
  PROJECT_NAME,
  TEMP_FOLDER
};
