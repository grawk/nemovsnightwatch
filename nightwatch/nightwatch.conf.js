module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "pages",
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "server_path" : "/Users/medelman/bin/selenium-server-standalone-3.9.1.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.gecko.driver" : "",
      "webdriver.edge.driver" : ""
    }
  },

  "test_settings" : {
    "default" : {
      "filter": "tests/inline.js",
      "launch_url" : (process.env.NODE_ENV === 'production') ? "https://payfriend.herokuapp.com/" : "http://localhost:8000",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    },
    "object" : {
      "filter": "tests/object.js",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    },
    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
};
