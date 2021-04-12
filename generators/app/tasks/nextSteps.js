require('colors');

const { PUSH_NOTIFICATIONS_SETUP_LINK } = require('../constants');

module.exports = function nextSteps() {
  console.log(`\n       ${'NEXT STEPS!'.bold.underline.white}       \n`);
  // Introduction message
  console.log(
    `● Your project folder has been created and it already includes the kickoff commit. ${
      `cd ${this.projectName}/`.italic
    }`.cyan
  );
  if (this.repoUrl) {
    // Remote repository initialized
    console.log(
      `● All this boilerplate has already been pushed to ${this.repoUrl}`.cyan
    );
  }
  console.log('\n\n');
  console.log(
    '● FASTLANE - fastline files was added to the project on android and iOS folders'
      .cyan
  );
  console.log(
    '  to start tu use it you need to replace some values on fastlane env files'
      .cyan
  );
  console.log('\n');
  console.log('● CONFIG - react native config was added to the project'.cyan);
  console.log(
    '  Probably you should add you API_URL and other env variables on root .env files'
      .cyan
  );
  console.log('\n');
  // Detox
  console.log('● Detox - Detox was added to the project'.cyan);
  console.log(
    '  Check the .detoxrc.json file and replace the "avdName" to one of your emulators to run e2e tests'
      .cyan
  );
  console.log('\n');
  // Firebase
  if (this.features.hasFirebase) {
    console.log(
      '● FIREBASE - Firebase features were added to the project.'.cyan
    );
    console.log(
      '  google services files was autogenerated but you still need to replace him with the'
        .cyan
    );
    console.log(
      '  corresponding application of https://console.firebase.google.com for each environment'
        .cyan
    );
    console.log('\n');
  }
  if (this.features.pushnotifications) {
    // Push Notifications SetUp
    console.log(
      '● PUSH NOTIFICATIONS - The push notification config has been added to the project but'
        .cyan
    );
    console.log('  but you still need to manually link the ios library.'.cyan);
    console.log(
      `  Further instructions can be found here: ${PUSH_NOTIFICATIONS_SETUP_LINK.underline}`
        .cyan
    );
    console.log('\n');
  }
  if (this.features.loginandsignup) {
    // Login and SignUp next steps
    console.log(
      '● LOGIN - A basic login feature has been added. The probably next steps there are:'
        .cyan
    );
    console.log('  Add proper validations and styles to the login form'.cyan);
    console.log('  Integrate login and logout with API'.cyan);
    console.log('  style or remove Sign up'.cyan);
    console.log('\n');
  }

  if (this.features.socialloginbuttons) {
    // Social networks login buttons
    console.log(
      '● SOCIAL BUTTONS - Each social button added has a readme file'.cyan
    );
    console.log('  Please check each one to finish the socials setup'.cyan);
    console.log('\n');
  }

  if (this.features.camera) {
    // Social networks login buttons
    console.log(
      '● CAMERA - Camera photo and video features has been added'.cyan
    );
    console.log('  Check and change iOS Info plist usage description'.cyan);
    console.log(
      "  Don't forget to update write Android permissions text from mediaFile Service"
        .cyan
    );
    console.log('\n');
  }

  console.log('\n\n');
};
