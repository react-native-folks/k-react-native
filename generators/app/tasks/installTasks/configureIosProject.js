const runCommand = require('../runCommand');

module.exports = function configureIosProject() {
  return runCommand({
    command: [
      'ruby',
      [
        'scriptIosConfig.rb',
        this.projectName,
        process.cwd(),
        this.title,
        this.bundleId,
        this.features.hasFirebase
      ],
      { cwd: `${this.templatePath()}/../tasks/installTasks` }
    ],
    loadingMessage: 'Deleting targets and generating build configurations...',
    successMessage: 'Ios project configured!',
    failureMessage: 'Ios project was not configured',
    context: this.options
  }).catch(() => {});
};
