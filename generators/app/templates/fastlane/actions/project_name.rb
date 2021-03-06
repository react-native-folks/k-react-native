require 'xcodeproj'

module Fastlane
  module Actions
    class ProjectNameAction < Action

      PROJECT_EXTENSION_ENV_KEY = "PROJECT_EXTENSION".freeze
      PROJECT_NAME_ENV_KEY = "PROJECT_FILE_NAME".freeze

      DEFAULT_PROJECT_EXTENSION = ".xcodeproj".freeze

      # This script returns the project name.
      # It uses the .env configs.
      # Otherwise, it tries to infer it from file system;
      # if it can't, it fails.

      def self.run(params)
        environment_info = Actions::GetEnvironmentInfoAction.run({})
        environment_info[PROJECT_NAME_ENV_KEY] || default_project_name
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        []
      end

      # Available options default_value helpers

      # In case there is a single '.xcodeproj' in the default directory
      # it can be automatically inferred by the script
      # if no parameter project is received.
      def self.default_project
        extension = project_extension
        project_dir = Actions::GetProjectDirAction.run({})[:ios_dir]
        projects = Dir.entries(project_dir).select { |each| File.extname(each) == extension }
        if projects.length == 0
          UI.abort_with_message! "No projects with extension '#{extension}' found in root directory."
        end
        if projects.length > 1
          UI.abort_with_message! "Multiple projects with extension '#{extension}' found in root directory."
        end
        File.join(project_dir, projects.first)
      end

      # In case there is a scheme matching project's name
      # it can be automatically inferred by the script
      # if no parameter scheme is received.
      def self.matching_scheme
        default = default_project
        target = Xcodeproj::Project.open(default)
          .targets
          .find { |each| each.name == File.basename(default, File.extname(default)) }
        if target.nil?
          UI.abort_with_message! "No target matching project name '#{default}' found."
        end
        target.name
      end

      # Default name of the project, based onf filename project.
      def self.default_project_name
        default = default_project
        File.basename(default, File.extname(default))
      end

      # Default name of the project file.
      def self.default_project_filename
        default_project_name + project_extension
      end

      def self.project_filename
        env_info = Actions::GetEnvironmentInfoAction.run({})
        project_dir = Actions::GetProjectDirAction.run({})[:ios_dir]
        if env_info[PROJECT_NAME_ENV_KEY]
          project_dir + "/" + env_info[PROJECT_NAME_ENV_KEY] + (env_info[PROJECT_EXTENSION_ENV_KEY] || DEFAULT_PROJECT_EXTENSION)
        else
          default_project
        end
      end

      def self.project_extension
        Actions::GetEnvironmentInfoAction.run({})[PROJECT_EXTENSION_ENV_KEY] || DEFAULT_PROJECT_EXTENSION
      end

    end
  end
end
