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
    console.log(`● All this boilerplate has already been pushed to ${this.repoUrl}`.cyan);
  }

  // Firebase
  if (this.features.crashlytics) {
    console.log(
      '  (*) Remember to ask your team lead for the google services file, this file must be replaced for the corresponding application of https://console.firebase.google.com'
        .cyan
    );
  }
  if (this.features.pushnotifications) {
    // Push Notifications SetUp
    console.log(
      '● The push notification config has been added to the project but you still need to manually link the ios library.'
        .cyan
    );
    console.log(`  Further instructions can be found here: ${PUSH_NOTIFICATIONS_SETUP_LINK.underline}`.cyan);
  }

  if (this.features.loginandsignup) {
    // Login and SignUp next steps
    console.log('● A basic login feature has been added. The probably next steps there are:'.cyan);
    console.log('  Add proper validations and styles to the login form'.cyan);
    console.log('  Integrate login and logout with API'.cyan);
    console.log('  Sign up?'.cyan);
  }

  console.log('\n\n');
};
